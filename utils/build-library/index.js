const path = require('path');
const fs = require('fs');
const EXERCISES_PATH = path.join(__dirname, '..', '..', 'exercises');
const TPL_PATH = path.join(__dirname, 'template.xml.ejs');
const tpl = require('lodash.template');
const makeLibrary = tpl(fs.readFileSync(TPL_PATH, 'utf8'));

const exercises = fs.readdirSync(EXERCISES_PATH)
    .filter(dirname => fs.existsSync(path.join(EXERCISES_PATH, dirname, 'tests.json')))
    .map(dirname => [fs.readFileSync(path.join(EXERCISES_PATH, dirname, 'name.txt'), 'utf8').trim(), dirname]);

const isHook = !!process.argv.find(opt => opt === '--hook');
const toolsPath = path.join(EXERCISES_PATH, '..', 'AutograderTools.xml');
if (isHook) {
    const newToolsTxt = makeLibrary({exercises}).trim();
    const oldToolsTxt = fs.existsSync(toolsPath) ? fs.readFileSync(toolsPath, 'utf8').trim() : '';
    if (newToolsTxt !== oldToolsTxt) {
        fs.writeFileSync(toolsPath, newToolsTxt);
        console.log('Updated the autograder tools! Please confirm the changes and recommit.');
        process.exit(1);
    }
} else {
    fs.writeFileSync(toolsPath, makeLibrary({exercises}));
    console.log('Updated the autograder tools!');
}
