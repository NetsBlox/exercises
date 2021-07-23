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
    cleanExercises(),
    //createEmptyTemplates(),
    updateLibrary(),
].reduce(sum, 0);

if (isHook && updatedCount > 0) {
    console.log('Please confirm the changes and recommit.');
    process.exit(1);
}

/*
 * Ensure each exercise has a template.xml file in which the custom
 * block has all contents removed
 */
function createEmptyTemplates() {
    const parsonsFiles = getParsonsFiles();
    return parsonsFiles.map(createEmptyTemplate).reduce(sum, 0);
}

function getParsonsFiles() {
    const getParsonsFile = dirname => {
        const filenames = fs.readdirSync(path.join(EXERCISES_PATH, dirname));
        const parsonsVariants = filenames
            .filter(name => name.startsWith('parsons') && name.endsWith('.xml'))
            .sort((a, b) => a.length < b.length ? -1 : 1)

        if (parsonsVariants.length) {
            const filename = parsonsVariants.shift();
            return path.join(EXERCISES_PATH, dirname, filename);
        }
    };

    const parsonsFiles = fs.readdirSync(EXERCISES_PATH)
        .map(name => getParsonsFile(name))
        .filter(filename => filename);

    return parsonsFiles;
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
        scripts.children.forEach(block => scripts.removeChild(block));
    });

    const templateFile = path.join(dirname, 'template.xml');
    return updateFile(
        templateFile,
        element.toString().trim(),
        `Created blank template for ${path.basename(dirname)}`
    );
}

function cleanExercises() {
    const requiredFiles = name => [
        path.join(EXERCISES_PATH, name, 'name.txt'),
        path.join(EXERCISES_PATH, name, 'template.xml')
    ];
    const exerciseFiles = fs.readdirSync(EXERCISES_PATH)
        .map(name => requiredFiles(name))
        .filter(files => files.every(n => fs.existsSync(n)));

    const updates = exerciseFiles.map(filepaths => {
        const [, xmlPath] = filepaths;
        const [name, xml] = filepaths.map(f => fs.readFileSync(f, 'utf8').trim());
        const updatedXml = setProjectName(scrubHistory(xml), name);
        return updateFile(xmlPath, updatedXml, `Updated ${name} exercise template.`);
    });

    return updates.reduce((s, n) => s + n, 0);
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

function updateLibrary() {
    const exercises = fs.readdirSync(EXERCISES_PATH)
        .filter(dirname => fs.existsSync(path.join(EXERCISES_PATH, dirname, 'tests.json')))
        .map(dirname => [fs.readFileSync(path.join(EXERCISES_PATH, dirname, 'name.txt'), 'utf8').trim(), dirname]);
    const toolsPath = path.join(EXERCISES_PATH, '..', 'AutograderTools.xml');
    const toolsXML = makeLibrary({exercises}).trim();

    return updateFile(toolsPath, toolsXML, 'Updated the autograder tools!');
}

function updateFile(path, newContents, msg) {
    const contents = () => fs.readFileSync(path, 'utf8').trim();
    let updated = false;
    if (!fs.existsSync(path) || newContents !== contents()) {
        console.log(`>${newContents}<`);
        console.log(`>${contents()}<`);
        fs.writeFileSync(path, newContents);
        console.log(msg);
        updated = true;
    }
    return updated;
}
