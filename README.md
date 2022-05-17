# Programming Exercises in NetsBlox
This repository contains a collection of programming exercises in NetsBlox. Each exercise contains a starter template ("template.xml") and *most* contain test cases. These exercises have been designed to be compatible with the [autograding](https://editor.netsblox.org/docs/services/Autograders/index.html) capabilities in NetsBlox and should be pretty easily composed into your own lessons!

## Getting Started
### Standalone (not using the autograding capabilities)
Feel free to browse the [exercises](./exercises) and open the starter template (ie, the "template.xml" file) of exercises that pique your interest!
- [Actor's Birthday](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/actor-birthday/template.xml).
- [Anagram](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/anagram/template.xml).
- [Atbash Cipher](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/atbash/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/atbash/parsons.xml), too!
- [Compute the Average](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/average/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/average/parsons.xml), too!
- [Compute the Average of a List](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/average-list/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/average-list/parsons.xml), too!
- [Between](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/between/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/between/parsons.xml), too!
- [Caesar Shift](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/caesar-shift/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/caesar-shift/parsons.xml), too!
- [Cracking the Caesar Shift with Brute Force](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/crack-caesar-brute-force/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/crack-caesar-brute-force/parsons.xml), too!
- [Cracking the Caesar Shift with a Partial Solution](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/crack-caesar-partial-soln/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/crack-caesar-partial-soln/parsons.xml), too!
- [Cyclic Iterator](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/cyclic-iterator/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/cyclic-iterator/parsons.xml), too!
- [Fizz-Buzz](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/fizz-buzz/template.xml).
- [Intro to Infinite Sequences](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/intro-infinite-sequences/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/intro-infinite-sequences/parsons.xml), too!
- [Leap Year](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/leap-year/template.xml).
- [Counting Letter Frequency](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/letter-frequency/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/letter-frequency/parsons.xml), too!
- [Counting Letter Frequency as Dictionary](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/letter-frequency-dictionary/template.xml).
- [Mapping Over Infinite Sequences](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/map-sequence/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/map-sequence/parsons.xml), too!
- [Moving Average](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/moving-average/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/moving-average/parsons.xml), too!
- [Sliding Windows](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/sliding-windows/template.xml).
- [From Infinite Sequences to Finite Lists](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/take-collect-sequences/template.xml). Available as a [Parsons problem](https://editor.netsblox.org#open:https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/take-collect-sequences/parsons.xml), too!


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