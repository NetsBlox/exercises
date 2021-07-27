const path = require('path');
const assert = require('assert');
const fs = require('fs');
const EXERCISES_PATH = path.join(__dirname, '..', '..', 'exercises');
const TPL_PATH = path.join(__dirname, 'template.xml.ejs');
const tpl = require('lodash.template');
const makeLibrary = tpl(fs.readFileSync(TPL_PATH, 'utf8'));
const XML_Element = require('./lib/snap/xml');

const isHook = !!process.argv.find(opt => opt === '--hook');

function sum(a, b) {
    return a + b;
}
const updatedCount = [
    prepareExercises(),
    updateLibrary(),
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
    const filenames = fs.readdirSync(path.join(EXERCISES_PATH, dirname));
    const namePath = path.join(EXERCISES_PATH, dirname, 'name.txt');
    const name = fs.readFileSync(namePath, 'utf8').trim();

    const xmlFiles = filenames.filter(name => name.endsWith('.xml'))
        .map(xmlFile => path.join(EXERCISES_PATH, dirname, xmlFile));

    assert(xmlFiles.length, `No templates found for ${dirname}`);
    for (const filepath of xmlFiles) {
        const xml = fs.readFileSync(filepath, 'utf8').trim();
        const updatedXml = setProjectName(scrubHistory(xml), name);
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
    const namePath = path.join(path.dirname(filepath), 'name.txt');
    const name = fs.readFileSync(namePath, 'utf8').trim();
    const chunks = path.basename(filepath).split('-');
    if (chunks.length > 1) {
        chunks.pop();
        chunks[chunks.length - 1] = chunks[chunks.length - 1].replace('.xml', '');
        const suffix = chunks.join(' ');
        return `${name} (${suffix})`;
    }
    return name;
}

function updateLibrary() {
    const exercises = fs.readdirSync(EXERCISES_PATH)
        .filter(dirname => fs.existsSync(path.join(EXERCISES_PATH, dirname, 'tests.json')))
        .map(dirname => [fs.readFileSync(path.join(EXERCISES_PATH, dirname, 'name.txt'), 'utf8').trim(), dirname]);
    const parsons = fs.readdirSync(EXERCISES_PATH)
        .flatMap(dirname => fs.readdirSync(path.join(EXERCISES_PATH, dirname))
            .map(d => path.join(EXERCISES_PATH, dirname, d))
            .filter(filepath => filepath.endsWith('.xml') && !filepath.endsWith('template.xml'))
            .map(filepath => [getParsonsName(filepath), path.relative(EXERCISES_PATH, filepath)])
        )
    const toolsPath = path.join(EXERCISES_PATH, '..', 'AutograderTools.xml');
    const toolsXML = makeLibrary({exercises, parsons}).trim();

    return updateFile(toolsPath, toolsXML, 'Updated the autograder tools!');
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
