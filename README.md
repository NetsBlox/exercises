# Programming Exercises in NetsBlox
This repository contains a collection of programming exercises in NetsBlox. Each exercise contains a starter template ("template.xml") and *most* contain test cases. These exercises have been designed to be compatible with the [autograding](https://editor.netsblox.org/docs/services/Autograders/index.html) capabilities in NetsBlox and should be pretty easily composed into your own lessons!

## Getting Started
### Standalone (not using the autograding capabilities)
Feel free to browse the [exercises](./exercises) and open the starter template (ie, the "template.xml" file) of exercises that pique your interest!

### Build your own lesson!
If you want to compose these exercises into autograded (and automatically loaded!) activities, simply import the "AutograderTools.xml" file into [NetsBlox](https://editor.netsblox.org/) and then use the Autograders service to create your own lesson/set of assignments! An example can be found below:

![Creating an autograded lesson with the exercises!](./example.png)

## Contributing
After cloning the repository, configure the githooks with:
```
git config core.hooksPath .githooks
```
This will ensure that any automated preparation will happen automatically such as updating the autograder tools library.

Next, create a new directory in `exercises/`. This should contain the following files:
- name.txt: The display name for the activity
- template.xml: The starter template for the project
- tests.json: The test cases to use when grading the activity
- credits.txt [optional]: Any attributions to sources of inspiration, etc, for the activity
