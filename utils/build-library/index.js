const path = require('path');
const fs = require('fs');
const EXERCISES_PATH = path.join(__dirname, '..', '..', 'exercises');
const TPL_PATH = path.join(__dirname, 'template.xml.ejs');
const tpl = require('lodash.template');
const makeLibrary = tpl(fs.readFileSync(TPL_PATH, 'utf8'));

const exercises = fs.readdirSync(EXERCISES_PATH)
    .filter(dirname => fs.existsSync(path.join(EXERCISES_PATH, dirname, 'tests.json')))
    .map(dirname => [fs.readFileSync(path.join(EXERCISES_PATH, dirname, 'name.txt'), 'utf8').trim(), dirname]);

fs.writeFileSync(path.join(EXERCISES_PATH, '..', 'AutograderTools.xml'), makeLibrary({exercises}));
console.log('Updated the autograder tools!');
