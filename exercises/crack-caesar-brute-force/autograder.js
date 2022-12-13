/* globals NetsBloxExtensions, snapEquals, fontHeight, Point, DialogBoxMorph,
 ScrollFrameMorph, nop, HandleMorph, List, Extension, ToggleMorph, BlockMorph,
 Color, SpriteMorph, localize, TextMorph, MorphicPreferences, WHITE*/
(function() {
    const config = {"name":"Cracking the Caesar Shift with Brute Force","tests":[{"type":"CustomBlockTest","name":"it should find key when starts with a search word","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10039\" s=\"reportEquals\"><block collabId=\"item_10051\" s=\"evaluate\"><block collabId=\"item_10052\" var=\"code breaker\"/><list><custom-block collabId=\"item_63_12\" s=\"shift %txt by %n\"><l>hello world</l><l>2</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10004\" s=\"reportNewList\"><list><l>hello</l></list></block></list></block><l>2</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin><context id=\"77\"><inputs></inputs><variables></variables><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context></context>"},{"name":"it should find key when using multiple search words","type":"CustomBlockTest","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10086_13\" s=\"reportEquals\"><block collabId=\"item_10086_19\" s=\"evaluate\"><block collabId=\"item_10086_23\" var=\"code breaker\"/><list><custom-block collabId=\"item_10086_24\" s=\"shift %txt by %n\"><l>with spaces</l><l>15</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10086_25\" s=\"reportNewList\"><list><l>hello</l><l>with</l></list></block></list></block><l>15</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context>"},{"name":"it should find key when ends with one of many search words","type":"CustomBlockTest","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10108_15\" s=\"reportEquals\"><block collabId=\"item_10108_21\" s=\"evaluate\"><block collabId=\"item_10108_25\" var=\"code breaker\"/><list><custom-block collabId=\"item_10108_26\" s=\"shift %txt by %n\"><l>with spaces</l><l>33</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10108_27\" s=\"reportNewList\"><list><l>hello</l><l>spaces</l></list></block></list></block><l>33</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context>"},{"name":"it should return -1 if cannot decode message","type":"CustomBlockTest","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10116_15\" s=\"reportEquals\"><block collabId=\"item_10116_21\" s=\"evaluate\"><block collabId=\"item_10116_25\" var=\"code breaker\"/><list><custom-block collabId=\"item_10116_26\" s=\"shift %txt by %n\"><l>no hidden words</l><l>3</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10116_27\" s=\"reportNewList\"><list><l>hello</l><l>spaces</l></list></block></list></block><l>-1</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context>"}]};
    const [ide] = world.children;

    class CustomBlockAutograder extends Extension {
        constructor(ide) {  /* TODO: Use an API wrapper instead? */
            super(config.name);
            this.ide = ide;
            this.currentAssignment = null;
            this.resultsDialog = null;
            this.integrations = config.integrations || [];
            this.assignments = config.assignments.map(assignmentConfig => {
                const data = omit(assignmentConfig, ['name', 'starter template', 'description', 'tests']);
                return new Assignment(
                    assignmentConfig.name,
                    assignmentConfig['starter template'],
                    assignmentConfig.description,
                    assignmentConfig.tests.map(testConfig => {
                        if (testConfig.type === 'CustomBlockTest') {
                            return CustomBlockTestCase.fromConfig(testConfig);
                        } else {
                            throw new Error(`Unknown test type: ${testConfig.type}`);
                        }
                    }),
                    data
                );
            });
        }

        getMenu() {
            const dict = {};
            if (this.currentAssignment) {
                dict[`Grade assignment`] = () => this.grade(this.currentAssignment);
                if (this.integrations.includes('coursera')) {
                    dict[`Submit...`] = () => this.submit(this.currentAssignment);
                }
                dict['~'] = '~';
                const submenu = {};
                this.assignments.forEach(assignment => {
                    submenu[assignment.name] = () => this.loadAssignment(assignment);
                });
                dict['Switch to...'] = submenu;
            } else {
                this.assignments.forEach(assignment => {
                    dict[`Start ${assignment.name}`] = () => this.loadAssignment(assignment);
                });
            }

            return dict;
        }

        async showResults(testCases, testResults) {
            const world = this.ide.parentThatIsA(WorldMorph);
            const isAlreadyOpen = world.anyChild(child => child === this.resultsDialog);
            if (!isAlreadyOpen) {
                const dialog = new DialogBoxMorph().withKey('GradeAssignment');
                const frame = new ScrollFrameMorph();
                frame.acceptsDrops = false;
                frame.contents.acceptsDrops = false;
                frame.color = dialog.color;
                frame.fixLayout = nop;

                dialog.labelString = `${this.currentAssignment.name} Results`;
                dialog.createLabel();
                dialog.addBody(frame);
                dialog.addButton('ok', 'Rerun');
                if (this.integrations.includes('coursera')) {
                    dialog.addButton('submit', 'Submit');
                    dialog.submit = () => {
                        this.submit(this.currentAssignment);
                        dialog.destroy();
                    };
                }
                dialog.addButton('cancel', 'Close');
                dialog.ok = () => this.grade(this.currentAssignment);
                dialog.cancel = () => {
                    this.resultsDialog = null;
                    DialogBoxMorph.prototype.cancel.call(dialog);
                };

                dialog.fixLayout = function () {
                    var th = fontHeight(this.titleFontSize) + this.titlePadding * 2,
                        x = 0,
                        y = 0,
                        fp;
                    this.buttons.fixLayout();
                    this.body.setPosition(this.position().add(new Point(
                        this.padding,
                        th + this.padding
                    )));
                    this.body.setExtent(new Point(
                        this.width() - this.padding * 2,
                        this.height() - this.padding * 3 - th - this.buttons.height()
                    ));
                    fp = this.body.position();
                    frame.contents.children.forEach(function (icon) {
                        icon.setPosition(fp.add(new Point(x, y)));
                        y += icon.height();
                    });
                    frame.contents.adjustBounds();
                    this.label.setCenter(this.center());
                    this.label.setTop(this.top() + (th - this.label.height()) / 2);
                    this.buttons.setCenter(this.center());
                    this.buttons.setBottom(this.bottom() - this.padding);

                    /* refresh shadow */
                    this.removeShadow();
                    this.addShadow();
                };

                dialog.popUp(world);
                dialog.setExtent(new Point(400, 300));
                dialog.setCenter(world.center());

                new HandleMorph(
                    dialog,
                    300,
                    280,
                    dialog.corner,
                    dialog.corner
                );
                this.resultsDialog = dialog;
            }

            const frame = this.resultsDialog.body;
            frame.contents.children = zip(testCases, testResults).map(pair => {
                const [testCase, result] = pair;
                const message = !result.status && result.getFailureReason() ?
                    ` (${result.getFailureReason()})` : '';
                /* TODO: Add details on click? */
                const icon = new ToggleMorph(
                    'checkbox',
                    null,
                    nop,
                    testCase.name + message,
                    () => result.status
                );
                const RED = new Color(250, 50, 50);
                const GREEN = new Color(0, 200, 0);
                icon.color = result.status ? GREEN : RED;
                icon.trigger = nop;
                icon.mouseClickLeft = () => testCase.onClick(icon.world());
                icon.mouseDownLeft = nop;
                icon.mouseEnter = nop;
                icon.mouseLeave = nop;
                icon.isDraggable = false;
                icon.userMenu = nop;
                icon.parent = frame.contents;
                return icon;
            });
            const descText = localize(`The automated tests for the assignment are shown below. \nClick on a test to view the specific test case.\n`);
            const testDesc = new TextMorph(
                descText,
                null,
                null,
                true,
                false,
                'center',
                null,
                null,
                MorphicPreferences.isFlat ? null : new Point(1, 1),
                WHITE
            );
            frame.contents.addChildFirst(testDesc);
            frame.contents.adjustBounds();
            this.resultsDialog.fixLayout();
        }

        async loadAssignment(assignment) {
            let message = `Would you like to start ${assignment.name}?`;

            if (this.currentAssignment) {
                const isReload = this.currentAssignment === assignment;
                message = isReload ?
                    `Would you like to reload ${assignment.name}?` :
                    `Would you like to stop working on ${this.currentAssignment.name}\n\nand switch to ${assignment.name}?`;
                
            }

            const title = `Start ${assignment.name}`;
            const confirmed = await this.ide.confirm(message, title);
            if (confirmed) {
                const xml = await assignment.fetch();
                await this.ide.droppedText(xml);
                if (assignment.description) {
                    this.ide.inform(`${assignment.name} Description`, assignment.description);
                }
                this.currentAssignment = assignment;
                if (this.resultsDialog) {
                    this.resultsDialog.destroy();
                }
            }
        }

        async grade(assignment) {
            const testResults = await assignment.grade();
            this.showResults(assignment.tests, testResults);
        }

        async submit(assignment) {
            const assignmentKey = assignment.data.CourseraAssignmentKey;
            const partEntries = await assignment.tests.reduce(
                async (entriesP, test) => {
                    const entries = await entriesP;
                    const testResult = await test.run();
                    const result = {
                        output: testResult.status ? '1' : '-1'
                    };

                    entries.push([test.data.CourseraPartID, result]);
                    return entries;
                },
                Promise.resolve([])
            );
            const {email, secret} = await this.promptCourseraCredentials();
            const body = {
                assignmentKey,
                submitterEmail: email,
                secret,
                parts: Object.fromEntries(partEntries),
            };
            const url = this.getOriginURL() + '/routes/autograders/submit/coursera';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                },
                body: JSON.stringify(body),
            });
            if (response.status < 400) {
                this.ide.showMessage(`Successfully submitted ${assignment.name}!`);
            } else {
                this.ide.inform('Submission Failed', await response.text());
            }
        }

        getOriginURL() {
            return window.location.origin + '/services';
        }

        async promptCourseraCredentials() {
            const dialog = new CourseraCredentialsDialog();
            const world = this.ide.parentThatIsA(WorldMorph);
            dialog.popUp(world);

            return dialog.askCredentials();
        }
    }

    class CourseraCredentialsDialog extends DialogBoxMorph {
        init(target, action, environment) {
            super.init(target, action, environment);
            this.key = 'CourseraCredentials';
        }

        askCredentials() {
            const eml = new InputFieldMorph();
            const secret = new InputFieldMorph();
            const inp = new AlignmentMorph('column', 2);
            const bdy = new AlignmentMorph('column', this.padding);

            function labelText(string) {
                return new TextMorph(
                    localize(string),
                    10,
                    null, // style
                    false, // bold
                    null, // italic
                    null, // alignment
                    null, // width
                    null, // font name
                    MorphicPreferences.isFlat ? null : new Point(1, 1),
                    WHITE // shadowColor
                );
            }

            inp.alignment = 'left';
            inp.setColor(this.color);
            bdy.setColor(this.color);

            eml.setWidth(200);
            secret.setWidth(200);

            inp.add(labelText('Coursera Email:'));
            inp.add(eml);

            inp.add(labelText('Token:'));
            inp.add(secret);

            bdy.add(inp);

            inp.fixLayout();
            bdy.fixLayout();

            this.labelString = localize('Enter Coursera Submission Info');
            this.createLabel();

            this.addBody(bdy);

            this.addButton('ok', 'OK');
            this.addButton('cancel', 'Cancel');

            this.fixLayout();

            function validInputs() {
                var checklist,
                    empty,
                    em = eml.getValue();

                function indicate(morph, string) {
                    var bubble = new SpeechBubbleMorph(localize(string));
                    bubble.isPointingRight = false;
                    bubble.fixLayout();
                    bubble.popUp(
                        world,
                        morph.leftCenter().subtract(new Point(bubble.width() + 2, 0))
                    );
                    if (morph.edit) {
                        morph.edit();
                    }
                }

                empty = detect(
                    [eml, secret],
                    inp => !inp.getValue()
                );
                if (empty) {
                    indicate(empty, 'please fill out\nthis field');
                    return false;
                }
                if (em.indexOf(' ') > -1 || em.indexOf('@') === -1
                        || em.indexOf('.') === -1 || em.length < 5) {
                    indicate(eml, 'please provide a valid\nemail address');
                    return false;
                }
                return true;
            }

            this.getInput = function () {
                this.cache.email = eml.getValue();
                this.cache.secret = secret.getValue();
                return this.cache;
            };

            if (this.cache.email) {
                eml.setContents(this.cache.email);
                secret.setContents(this.cache.secret);
            }

            const deferred = utils.defer();
            this.accept = () => {
                if (validInputs()) {
                    DialogBoxMorph.prototype.accept.call(this);
                    deferred.resolve(this.getInput());
                }
            };
            return deferred.promise;
        }
    }
    CourseraCredentialsDialog.prototype.cache = {};

    class Assignment {
        constructor(name, url, desc, tests, data) {
            this.name = name;
            this.url = url;
            this.description = desc;
            this.tests = tests;
            this.data = data;
        }

        async fetch() {
            const response = await fetch(this.url);
            return await response.text();
        }

        async grade() {
            return await Promise.all(this.tests.map(test => test.run()));
        }
    }

    class TestCase {
        constructor(name, testFn, data={}) {
            this.name = name;
            this.test = testFn;
            this.data = data;
        }

        async run() {
            try {
                return await this.test();
            } catch (err) {
                return new ErroredTest(err);
            }
        }

        onClick(world) {
        }
    }

    const CustomBlockHelpers = {};
    CustomBlockHelpers.getCustomBlockDefinition = function(spec) {
        return ide.stage.globalBlocks.find(
            block => block.spec === spec
        );
    };

    CustomBlockHelpers.getCustomBlockInstance = function(blockSpec, inputs=[]) {
        const definition = CustomBlockHelpers.getCustomBlockDefinition(blockSpec);
        const block = definition.blockInstance();
        zip(block.inputs(), inputs).forEach(pair => {
            const [input, value] = pair;
            if (value instanceof List) {
                const valueAsBlock = value.blockify();
                block.replaceInput(input, valueAsBlock);
            } else {
                input.setContents(value);
            }
        });
        return block;
    };

    CustomBlockHelpers.evalBlock = async (block, args, variables) => {
        const {threads} = ide.stage;

        return new Promise((resolve, reject) => {
            CustomBlockHelpers.removeProcess(block);

            const process = threads.startProcess(
                block,
                ide.stage,
                true,
                false,
                resolve,
                undefined,
                undefined,
                undefined,
                variables
            );
            const handleError = process.handleError;
            process.handleError = function(error) {
                reject(error);
                return handleError.call(this, ...arguments);
            };
            setTimeout(() => {
                const isRunning = threads.processes.includes(process);
                if (isRunning) {
                    const {topBlock} = process;
                    process.handleError(new Error('Timeout Exceeded'), topBlock);
                }
            }, 2000);
        });
    };

    CustomBlockHelpers.removeProcess = block => {
        const {threads} = ide.stage;
        const oldProcess = threads.findProcess(block.topBlock(), ide.stage);
        if (oldProcess) {
            oldProcess.stop();
            const index = threads.processes.indexOf(oldProcess);
            threads.processes.splice(index, 1);
        }
    };

    class SimpleCustomBlockTestCase extends TestCase {
        constructor(spec, inputs, output, data) {
            const testFn = SimpleCustomBlockTestCase.getTest(spec, inputs, output);
            const name = data.name || SimpleCustomBlockTestCase.getName(spec, inputs, output);
            super(name, testFn, data);
            this.onClick = SimpleCustomBlockTestCase.onClick.bind(null, spec, inputs, output);
        }

        static onClick(spec, inputs, output, world) {
            const block = CustomBlockHelpers.getCustomBlockInstance(spec, inputs.map(toSnap));
            const equalsBlock = SpriteMorph.prototype.blockForSelector('reportEquals', true);
            let expectedValue;
            if (typeof output === 'boolean') {
                expectedValue = output ?
                    SpriteMorph.prototype.blockForSelector('reportBoolean', true) :
                    SpriteMorph.prototype.blockForSelector('reportFalse', true);
            } else {
                expectedValue = toSnap(output);
                if (expectedValue instanceof List) {
                    expectedValue = expectedValue.blockify();
                }
            }
            const [left, right] = equalsBlock.inputs();
            equalsBlock.replaceInput(left, block);
            equalsBlock.replaceInput(right, expectedValue);
            equalsBlock.pickUp(world);
        }

        static getName(spec, inputs, output) {
            let index = 0;
            const testCaseName = BlockMorph.prototype.parseSpec(spec)
                .map(spec => {
                    let isInput = true;
                    try {
                        BlockMorph.prototype.labelPart(spec);
                        isInput = false;
                    } catch {}

                    if (isInput) {
                        return JSON.stringify(inputs[index++]);
                    }
                    return spec;
                })
                .join(' ');

            const description = `should report ${JSON.stringify(output)}`;
            let displayName = `"${testCaseName}" ${description}`;
            return displayName;
        }

        static getTest(spec, inputs, expectedOutput) {
            return async function() {
                const args = inputs.map(toSnap);
                const block = CustomBlockHelpers.getCustomBlockInstance(spec, args);
                const actual = await CustomBlockHelpers.evalBlock(block, args);
                if (snapEquals(actual, toSnap(expectedOutput))) {
                    return new TestResult(true);
                } else {
                    return new FailingTest(actual, expectedOutput);
                }
            };
        }
    }

    class CustomBlockTestCase extends TestCase {
        constructor(name, spec, functionXML, data) {
            const testFn = CustomBlockTestCase.getTest(spec, functionXML);
            super(name, testFn, data);
        }

        static getTest(spec, functionXML) {
            const fn = ide.sockets.deserializeData([functionXML])[0];
            const variables = new VariableFrame();
            variables.addVar('test fn', fn);

            const testBlock = SpriteMorph.prototype.blockForSelector('evaluate', true);
            const [fnToCall, fnArgs] = testBlock.inputs();
            testBlock.replaceInput(fnToCall, SpriteMorph.prototype.variableBlock('test fn'));
            fnArgs.addInput();

            return async function() {
                const customBlock = CustomBlockHelpers.getCustomBlockInstance(spec);
                const ring = CustomBlockTestCase.ringify(customBlock);
                fnArgs.replaceInput(fnArgs.inputs()[0], ring);
                const actual = await CustomBlockHelpers.evalBlock(testBlock, [], variables);
                if (snapEquals(actual, toSnap(true))) {
                    return new TestResult(true);
                } else if (typeof actual !== 'boolean') {
                    return new TestResult(false, actual);
                } else {
                    return new TestResult(false);
                }
            };
        }

        static ringify(customBlock) {
            const ring = new RingMorph();
            ring.embed(customBlock);
            const ringArgs = ring.inputs()[1];
            customBlock.inputs().forEach(input => {
                const arg = ringArgs.addInput().template().fullCopy();
                arg.isTemplate = false;
                arg.isDraggable = true;
                customBlock.replaceInput(input, arg);
            });
            return ring;
        }

        static fromConfig(config) {
            const opts = omit(config, ['type', 'spec', 'inputs', 'output']);
            if (config.hasOwnProperty('inputs') && config.hasOwnProperty('output')) {
                return new SimpleCustomBlockTestCase(config.spec, config.inputs, config.output, opts);
            } else if (config.function) {
                return new CustomBlockTestCase(config.name, config.spec, config.function, opts);
            } else {
                throw new Error(`Invalid configuration for CustomBlockTest: ${JSON.stringify(config, null, 2)}`);
            }
        }
    }

    class TestResult {
        constructor(status, reason='') {
            this.status = status;
            this.reason = reason;
        }

        getFailureReason() {
            return this.reason;
        }
    }

    class FailingTest extends TestResult {
        constructor(actual, expected) {
            super(false);
            this.actual = actual;
            this.expected = expected;
        }

        getFailureReason() {
            if (this.actual !== null) {
                return `reported "${JSON.stringify(toJS(this.actual))}"`;
            } else {
                return 'did not report';
            }
        }
    }

    class ErroredTest extends TestResult {
        constructor(error) {
            super(false);
            this.error = error;
        }

        getFailureReason() {
            return 'error!';
        }
    }

    function zip() {
        const lists = new Array(...arguments);
        const len = Math.min(...lists.map(l => l.length));
        const result = [];

        for (let i = 0; i < len; i++) {
            result.push(lists.map(l => l[i]));
        }

        return result;
    }

    function toSnap(data) {
        if (Array.isArray(data)) {
            const contents = data.map(toSnap);
            return new List(contents);
        } else if (typeof data === 'object') {
            return toSnap(Object.entries(data));
        }
        return data;
    }

    function toJS(data) {
        if (data instanceof List) {
            return data.asArray().map(toJS);
        } else {
            return data;
        }
    }

    function omit(obj, keys) {
        const entries = Object.entries(obj).filter(entry => !keys.includes(entry[0]));
        return Object.fromEntries(entries);
    }

    NetsBloxExtensions.register(CustomBlockAutograder);

    // Prompt to load the assignment right away
    const autograder = new CustomBlockAutograder(world.children[0]);
    autograder.loadAssignment(autograder.assignments[0]);

})();