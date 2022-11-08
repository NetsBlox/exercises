const {execSync} = require('child_process');
const path = require('path');
const assert = require('assert');
const toml = require('toml');
const fs = require('fs');
const ROOT_PATH = path.join(__dirname, '..', '..');
const EXERCISES_PATH = path.join(ROOT_PATH, 'exercises');
const TPL_PATH = path.join(__dirname, 'template.xml.ejs');
const EDITOR_URL = 'https://editor.netsblox.org';
const tpl = require('lodash.template');
const makeLibrary = tpl(fs.readFileSync(TPL_PATH, 'utf8'));
const makeReadme = tpl(fs.readFileSync(path.join(__dirname, 'readme.md.ejs'), 'utf8'));
const XML_Element = require('./lib/snap/xml');

const isHook = !!process.argv.find(opt => opt === '--hook');

function sum(a, b) {
    return a + b;
}
const updatedCount = [
    prepareExercises(),
    updateLibrary(),
    updateReadme(),
    updateWebsite(),
].reduce(sum, 0);

if (isHook && updatedCount > 0) {
    console.log('Please confirm the changes and recommit.');
    process.exit(1);
}

function prepareExercises() {
    const exercises = fs.readdirSync(EXERCISES_PATH);
    // TODO: Clean this next fn up
    return exercises.reduce((changed, exercise) => {
        const tpls = getStarterTemplates(exercise);
        for (const tpl of tpls) {
            const [name, contents] = tpl;
            const relpath = path.relative(EXERCISES_PATH, name);
            changed += updateFile(name, contents, `Updated ${exercise} (${relpath})`);
        }
        return changed;
    }, 0);
}

function* getStarterTemplates(dirname) {
    const exerciseDir = path.join(EXERCISES_PATH, dirname);
    const filenames = fs.readdirSync(exerciseDir);
    const metadata = getMetadata(exerciseDir);

    const xmlFiles = filenames.filter(name => name.endsWith('.xml'))
        .map(xmlFile => path.join(EXERCISES_PATH, dirname, xmlFile));

    assert(xmlFiles.length, `No templates found for ${dirname}`);
    for (const filepath of xmlFiles) {
        const xml = fs.readFileSync(filepath, 'utf8').trim();
        const updatedXml = setProjectName(scrubHistory(xml), metadata.name);
        yield [filepath, updatedXml];
    }

    const hasBlankTemplateXML = !!xmlFiles.find(filepath => filepath.endsWith('template.xml'));
    if (!hasBlankTemplateXML) {
        yield createEmptyTemplate(xmlFiles[0]);
    }
}

function getTestedBlocks(dirname) {
    const testsFile = path.join(dirname, 'tests.json');
    if (fs.existsSync(testsFile)) {
        const blockSpecs = require(testsFile)
            .map(test => test.spec);

        return unique(blockSpecs);
    } else {
        return [];
    }
}

function unique(list) {
    return list.reduce((uniq, item) => {
        if (!uniq.includes(item)) {
            uniq.push(item);
        }
        return uniq;
    }, []);
}

function createEmptyTemplate(parsonsFile) {
    const dirname = path.dirname(parsonsFile);
    const blockSpecs = getTestedBlocks(dirname);
    const parsonsXml = fs.readFileSync(parsonsFile, 'utf8');

    const element = new XML_Element();
    element.parseString(parsonsXml);
    assert(element.children.length === 1, 'Multiple roles not yet supported');

    const [role] = element.children;
    const [project] = role.children;
    const blocks = project.childNamed('blocks');
    const testedBlocks = blocks.children.filter(block => blockSpecs.includes(block.attributes.s));

    testedBlocks.forEach(blockDef => {
        const scripts = blockDef.childNamed('scripts');
        scripts.children = [];
    });

    const templateFile = path.join(dirname, 'template.xml');
    return [
        templateFile,
        element.toString().trim(),
    ];
}

function setProjectName(xml, name) {
    const cleanName = name.replace(/"/g, '\\"');
    return xml.replace(/room name="[^"]+"/, `room name="${cleanName}"`);
}

function scrubHistory(xml) {
    return xml
        .replace(/<history>.*?<\/history>/g, '<history></history>')
        .replace(/<replay>.*?<\/replay>/g, '<replay></replay>');
}

function getParsonsName(filepath) {
    const metadata = getMetadata(path.dirname(filepath));
    const chunks = path.basename(filepath).split('-');
    if (chunks.length > 1) {
        chunks.shift();
        chunks[chunks.length - 1] = chunks[chunks.length - 1].replace('.xml', '');
        const suffix = chunks.join(' ');
        return `${metadata.name} (${suffix})`;
    }
    return metadata.name;
}

function getMetadata(exerciseDir) {
    const metadataPath = path.join(exerciseDir, 'metadata.toml');
    const text = fs.readFileSync(metadataPath, 'utf8').trim();
    const metadata = toml.parse(text);
    assert(metadata.name, `Missing "name" field in ${metadataPath}`);
    const defaults = {
        description: '',
        concepts: []
    };

    return Object.assign({}, defaults, metadata);
}

function updateLibrary() {
    const testedExercises = fs.readdirSync(EXERCISES_PATH)
        .filter(dirname => fs.existsSync(path.join(EXERCISES_PATH, dirname, 'tests.json')));
    const exercises = testedExercises
        .map(dirname => [getMetadata(path.join(EXERCISES_PATH, dirname)).name, dirname]);
    const parsons = testedExercises
        .flatMap(dirname => fs.readdirSync(path.join(EXERCISES_PATH, dirname))
            .map(d => path.join(EXERCISES_PATH, dirname, d))
            .filter(filepath => filepath.endsWith('.xml') && !filepath.endsWith('template.xml'))
            .map(filepath => [getParsonsName(filepath), path.relative(EXERCISES_PATH, filepath)])
        )
    const toolsPath = path.join(EXERCISES_PATH, '..', 'AutograderTools.xml');
    const toolsXML = makeLibrary({exercises, parsons}).trim();

    return updateFile(toolsPath, toolsXML, 'Updated the autograder tools!');
}

function updateReadme() {
    const exerciseNames = fs.readdirSync(EXERCISES_PATH);
    const exercises = exerciseNames.map(dirname => {
        const name = getMetadata(path.join(EXERCISES_PATH, dirname)).name;
        const template = getOpenInEditorLink(dirname, 'template.xml');
        const parsons = getOpenInEditorLink(dirname, 'parsons.xml');
        return {name, template, parsons};
    });
    const readmePath = path.join(ROOT_PATH, 'README.md');
    const contents = makeReadme({exercises}).trim();

    return updateFile(readmePath, contents, 'Updated README');
}

function updateWebsite() {
    const exerciseNames = fs.readdirSync(EXERCISES_PATH);
    const exercises = exerciseNames.map(dirname => {
        const metadata = getMetadata(path.join(EXERCISES_PATH, dirname));
        metadata.template = getSourceUrl(dirname, 'template.xml');
        metadata.parsons = getSourceUrl(dirname, 'parsons.xml');
        return metadata;
    }).sort((e1, e2) => e1.name < e2.name ? -1 : 1);

    const websitePath = path.join(ROOT_PATH, 'website', 'src', 'exercises.json');
    const updated = updateFile(websitePath, JSON.stringify(exercises, null, 2), 'Updated website');
    if (updated) {
        rebuildWebsite();
    }
    return updated;
}

function rebuildWebsite() {
    const websitePath = path.join(ROOT_PATH, 'website');
    const stdout = execSync('npm run build', {cwd: websitePath});
    console.log(stdout.toString());
}

function getSourceUrl(dirname, filepath) {
    const fullpath = path.join(EXERCISES_PATH, dirname, filepath)

    if (fs.existsSync(fullpath)) {
        const relpath = path.relative(ROOT_PATH, fullpath);
        return `https://raw.githubusercontent.com/NetsBlox/exercises/master/${relpath}`;
    }
    return null;
}

function getOpenInEditorLink(dirname, filepath) {
    const fullpath = path.join(EXERCISES_PATH, dirname, filepath)

    if (fs.existsSync(fullpath)) {
        const relpath = path.relative(ROOT_PATH, fullpath);
        const xmlUrl = getSourceUrl(dirname, filepath);
        const url = `${EDITOR_URL}#open:${xmlUrl}`;
        return url;
    }
    return null;
}

function updateFile(path, newContents, msg) {
    const contents = () => fs.readFileSync(path, 'utf8').trim();
    let updated = false;
    if (!fs.existsSync(path) || newContents !== contents()) {
        fs.writeFileSync(path, newContents);
        console.log(msg);
        updated = true;
    }
    return updated;
}
