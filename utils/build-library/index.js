const path = require('path');
const fs = require('fs');
const EXERCISES_PATH = path.join(__dirname, '..', '..', 'exercises');
const TPL_PATH = path.join(__dirname, 'template.xml.ejs');
const tpl = require('lodash.template');
const makeLibrary = tpl(fs.readFileSync(TPL_PATH, 'utf8'));

const isHook = !!process.argv.find(opt => opt === '--hook');

const updatedCount = [
    updateLibrary(),
    cleanExercises(),
].reduce((sum, next) => sum + next, 0);

if (isHook && updatedCount > 0) {
    console.log('Please confirm the changes and recommit.');
    process.exit(1);
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
        fs.writeFileSync(path, newContents);
        console.log(msg);
        updated = true;
    }
    return updated;
}
