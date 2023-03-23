/* globals NetsBloxExtensions, snapEquals, fontHeight, Point, DialogBoxMorph,
 ScrollFrameMorph, nop, HandleMorph, List, Extension, ToggleMorph, BlockMorph,
 Color, SpriteMorph, localize, TextMorph, MorphicPreferences, WHITE*/
(function() {
    const config = {"name":"NetsBlox Exercises","assignments":[{"name":"Actor's Birthday","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/actor-birthday/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"birthday of %'actor'","inputs":["Keanu Reeves"],"output":"1964-09-02"},{"type":"CustomBlockTest","spec":"birthday of %'actor'","inputs":["Meryl Streep"],"output":"1949-06-22"},{"type":"CustomBlockTest","spec":"birthday of %'actor'","inputs":["Denzel Washington"],"output":"1954-12-28"},{"type":"CustomBlockTest","spec":"birthday of %'actor'","inputs":["Lin-Manuel Miranda"],"output":"1980-01-16"}]},{"name":"Anagram","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/anagram/template.xml","tests":[{"type":"CustomBlockTest","spec":"is %'word' an anagram of %'other'","inputs":["shepherd","spider"],"output":false},{"type":"CustomBlockTest","spec":"is %'word' an anagram of %'other'","inputs":["cat","ccat"],"output":false},{"type":"CustomBlockTest","spec":"is %'word' an anagram of %'other'","inputs":["olive","ilove"],"output":true},{"type":"CustomBlockTest","spec":"is %'word' an anagram of %'other'","inputs":["cat","CAT"],"output":true}]},{"name":"Atbash Cipher","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/atbash/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"encrypt %'message'","inputs":["abc"],"output":"zyx"},{"name":"should preserve letter case","type":"CustomBlockTest","spec":"encrypt %'message'","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><block collabId=\"item_251\" s=\"reportEquals\"><block collabId=\"item_378\" s=\"reportUnicode\"><block collabId=\"item_393\" s=\"evaluate\"><block collabId=\"item_398\" var=\"iterator fn\"/><list><l>XYZ</l></list></block></block><block collabId=\"item_385\" s=\"reportUnicode\"><l>CBA</l></block></block><receiver><sprite name=\"intro\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"16\"><costumes><list struct=\"atomic\" id=\"17\"></list></costumes><sounds><list struct=\"atomic\" id=\"18\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"16\"></ref></origin><context id=\"21\"><inputs></inputs><variables></variables><receiver><ref id=\"16\"></ref></receiver><origin><ref id=\"16\"></ref></origin></context></context>"},{"type":"CustomBlockTest","spec":"encrypt %'message'","inputs":["$?! +@"],"output":"$?! +@","name":"should preserve non-letters such as punctuation"}]},{"name":"Between","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/between/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"is %'number' between %'lower' and %'upper'","inputs":[2,1,3],"output":true},{"type":"CustomBlockTest","spec":"is %'number' between %'lower' and %'upper'","inputs":[1,1,3],"output":true},{"type":"CustomBlockTest","spec":"is %'number' between %'lower' and %'upper'","inputs":[3,1,3],"output":true},{"type":"CustomBlockTest","spec":"is %'number' between %'lower' and %'upper'","inputs":[2,3,5],"output":false},{"type":"CustomBlockTest","spec":"is %'number' between %'lower' and %'upper'","inputs":[-6,-5,5],"output":false},{"type":"CustomBlockTest","spec":"is %'number' between %'lower' and %'upper'","inputs":[20,-5,5],"output":false}]},{"name":"Caesar Shift","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/caesar-shift/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"shift %'text' by %'amount'","inputs":["abc",2],"output":"cde"},{"type":"CustomBlockTest","spec":"shift %'text' by %'amount'","inputs":["DEF",100],"output":"()*"},{"type":"CustomBlockTest","spec":"shift %'text' by %'amount'","inputs":["DEF",-50],"output":"\u0012\u0013\u0014"},{"type":"CustomBlockTest","spec":"shift %'text' by %'amount'","inputs":["with spaces",10],"output":"\u0001s~r*}zkmo}"},{"type":"CustomBlockTest","spec":"shift %'text' by %'amount'","inputs":["no shift!",0],"output":"no shift!"},{"type":"CustomBlockTest","spec":"shift %'text' by %'amount'","inputs":["negative wrapping!",-200],"output":"&\u001d\u001f\u0019,!.\u001dX/*\u0019((!&\u001fY"}]},{"name":"Compute the Average","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/average/parsons.xml","tests":[]},{"name":"Compute the Average of a List","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/average-list/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"average %'list'","inputs":[["1","1"]],"output":"1"},{"type":"CustomBlockTest","spec":"average %'list'","inputs":[["1","2"]],"output":"1.5"},{"type":"CustomBlockTest","spec":"average %'list'","inputs":[["-1","2","4","-3"]],"output":"0.5"},{"type":"CustomBlockTest","spec":"average %'list'","inputs":[["35","-97","12","-19","32"]],"output":-7.4},{"type":"CustomBlockTest","spec":"average %'list'","inputs":[["35","-97","12","-19","32","54"]],"output":2.8333333333333335}]},{"name":"Counting Letter Frequency","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/letter-frequency/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"count letters in %'doc'","name":"count letters in %'doc' should count letters in \"abcc\"","function":"<context id=\"1\"><inputs><input>count</input></inputs><variables></variables><block collabId=\"item_12\" s=\"reportEquals\"><block collabId=\"item_20\" s=\"evaluate\"><block collabId=\"item_21\" var=\"count\"/><list><l>abcc</l></list></block><block collabId=\"item_15\" s=\"reportNewList\"><list><l>1</l><l>1</l><l>2</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l></list></block></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"41\"><costumes><list struct=\"atomic\" id=\"42\"></list></costumes><sounds><list struct=\"atomic\" id=\"43\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"41\"></ref></origin><context id=\"46\"><inputs></inputs><variables></variables><receiver><ref id=\"41\"></ref></receiver><origin><ref id=\"41\"></ref></origin></context></context>"},{"type":"CustomBlockTest","spec":"count letters in %'doc'","name":"count letters in %'doc' should skip non-alphabetic characters","function":"<context id=\"1\"><inputs><input>count</input></inputs><variables></variables><block collabId=\"item_34_4\" s=\"reportEquals\"><block collabId=\"item_39\" s=\"reportListLength\"><block collabId=\"item_34_9\" s=\"evaluate\"><block collabId=\"item_34_12\" var=\"count\"/><list><l>a b ! c</l></list></block></block><l>26</l></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"14\"><costumes><list struct=\"atomic\" id=\"15\"></list></costumes><sounds><list struct=\"atomic\" id=\"16\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"14\"></ref></origin><context id=\"19\"><inputs></inputs><variables></variables><receiver><ref id=\"14\"></ref></receiver><origin><ref id=\"14\"></ref></origin></context></context>"},{"type":"CustomBlockTest","spec":"count letters in %'doc'","name":"count letters in %'doc' should treat upper and lowercase as the same","function":"<context id=\"1\"><inputs><input>count</input></inputs><variables></variables><block collabId=\"item_47_4\" s=\"reportEquals\"><block collabId=\"item_47_10\" s=\"evaluate\"><block collabId=\"item_47_12\" var=\"count\"/><list><l>aAbBcCzZ</l></list></block><block collabId=\"item_53\" s=\"reportNewList\"><list><l>2</l><l>2</l><l>2</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>0</l><l>2</l></list></block></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"41\"><costumes><list struct=\"atomic\" id=\"42\"></list></costumes><sounds><list struct=\"atomic\" id=\"43\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"41\"></ref></origin><context id=\"46\"><inputs></inputs><variables></variables><receiver><ref id=\"41\"></ref></receiver><origin><ref id=\"41\"></ref></origin></context></context>"}]},{"name":"Counting Letter Frequency as Dictionary","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/letter-frequency-dictionary/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"count letters in %'doc'","name":"count letters in %'doc' should count letters in \"abcc\"","inputs":["abcc"],"output":[["a",1],["b",1],["c",2]]},{"type":"CustomBlockTest","spec":"count letters in %'doc'","name":"count letters in %'doc' should skip non-alphabetic characters","inputs":["a4cc"],"output":[["a",1],["c",2]]},{"type":"CustomBlockTest","spec":"count letters in %'doc'","name":"count letters in %'doc' should treat upper and lowercase as the same","inputs":["xyzZ"],"output":[["x",1],["y",1],["z",2]]}]},{"name":"Cracking the Caesar Shift with Brute Force","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/crack-caesar-brute-force/parsons.xml","tests":[{"type":"CustomBlockTest","name":"it should find key when starts with a search word","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10039\" s=\"reportEquals\"><block collabId=\"item_10051\" s=\"evaluate\"><block collabId=\"item_10052\" var=\"code breaker\"/><list><custom-block collabId=\"item_63_12\" s=\"shift %txt by %n\"><l>hello world</l><l>2</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10004\" s=\"reportNewList\"><list><l>hello</l></list></block></list></block><l>2</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin><context id=\"77\"><inputs></inputs><variables></variables><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context></context>"},{"name":"it should find key when using multiple search words","type":"CustomBlockTest","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10086_13\" s=\"reportEquals\"><block collabId=\"item_10086_19\" s=\"evaluate\"><block collabId=\"item_10086_23\" var=\"code breaker\"/><list><custom-block collabId=\"item_10086_24\" s=\"shift %txt by %n\"><l>with spaces</l><l>15</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10086_25\" s=\"reportNewList\"><list><l>hello</l><l>with</l></list></block></list></block><l>15</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context>"},{"name":"it should find key when ends with one of many search words","type":"CustomBlockTest","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10108_15\" s=\"reportEquals\"><block collabId=\"item_10108_21\" s=\"evaluate\"><block collabId=\"item_10108_25\" var=\"code breaker\"/><list><custom-block collabId=\"item_10108_26\" s=\"shift %txt by %n\"><l>with spaces</l><l>33</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10108_27\" s=\"reportNewList\"><list><l>hello</l><l>spaces</l></list></block></list></block><l>33</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context>"},{"name":"it should return -1 if cannot decode message","type":"CustomBlockTest","spec":"find key where %'msg' contains %'words'","function":"<context id=\"1\"><inputs><input>code breaker</input></inputs><variables></variables><block collabId=\"item_10116_15\" s=\"reportEquals\"><block collabId=\"item_10116_21\" s=\"evaluate\"><block collabId=\"item_10116_25\" var=\"code breaker\"/><list><custom-block collabId=\"item_10116_26\" s=\"shift %txt by %n\"><l>no hidden words</l><l>3</l><receiver><project collabStartIndex=\"10167\" name=\"myRole\" app=\"NetsBlox 1.27.2, http://netsblox.org\" version=\"1.27.2\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"11\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"12\"></list></costumes><sounds><list struct=\"atomic\" id=\"13\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"52\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"94.500002\" color=\"243,118,29\" extX=\"100\" extY=\"87.5\"/><watcher var=\"test\" style=\"normal\" x=\"10\" y=\"272.000004\" color=\"243,118,29\" extX=\"160.201904296875\" extY=\"107.5\"/><watcher scope=\"Stage\" s=\"reportRPCError\" style=\"normal\" x=\"10\" y=\"338.999998\" color=\"217,77,17\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_10000_201\" s=\"shift %&apos;text&apos; by %&apos;amount&apos;\" type=\"reporter\" category=\"operators\"><header></header><code></code><translations></translations><inputs><input type=\"%txt\"></input><input type=\"%n\"></input></inputs><script><block collabId=\"item_10000_193\" s=\"doDeclareVariables\"><list><l>shifted letters</l></list></block><block collabId=\"item_10000_190\" s=\"doSetVar\"><l>shifted letters</l><block collabId=\"item_10000_188\" s=\"reportNewList\"><list></list></block></block><block collabId=\"item_10000_186\" s=\"doForEach\"><l>letter</l><block collabId=\"item_10000_184\" s=\"reportTextSplit\"><block collabId=\"item_10000_183\" var=\"text\"/><l><option>letter</option></l></block><script><block collabId=\"item_10000_179\" s=\"doAddToList\"><block collabId=\"item_10000_178\" s=\"reportUnicodeAsLetter\"><block collabId=\"item_10000_177\" s=\"reportModulus\"><block collabId=\"item_10000_176\" s=\"reportSum\"><block collabId=\"item_10000_175\" s=\"reportUnicode\"><block collabId=\"item_10000_174\" var=\"letter\"/></block><block collabId=\"item_10000_173\" var=\"amount\"/></block><l>128</l></block></block><block collabId=\"item_10000_171\" var=\"shifted letters\"/></block></script></block><block collabId=\"item_10000_170\" s=\"doReport\"><block collabId=\"item_10000_169\" s=\"reportJoinWords\"><block collabId=\"item_10000_168\" var=\"shifted letters\"/></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_10116_27\" s=\"reportNewList\"><list><l>hello</l><l>spaces</l></list></block></list></block><l>-1</l></block><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context>"}]},{"name":"Cracking the Caesar Shift with a Partial Solution","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/crack-caesar-partial-soln/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"shift amount from %'letter' to %'encrypted letter'","inputs":["a","c"],"output":2},{"type":"CustomBlockTest","spec":"shift amount from %'letter' to %'encrypted letter'","inputs":["A","a"],"output":32},{"type":"CustomBlockTest","spec":"shift amount from %'letter' to %'encrypted letter'","inputs":["a","A"],"output":-32},{"type":"CustomBlockTest","spec":"shift amount from %'letter' to %'encrypted letter'","inputs":["5","0"],"output":-5},{"type":"CustomBlockTest","spec":"shift amount from %'letter' to %'encrypted letter'","inputs":[".","?"],"output":17}]},{"name":"Cyclic Iterator","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/cyclic-iterator/parsons.xml","tests":[{"name":"block should return a function","type":"CustomBlockTest","spec":"cycle %'list'","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><block collabId=\"item_385\" s=\"reportIsA\"><block collabId=\"item_357_198\" s=\"evaluate\"><block collabId=\"item_357_197\" var=\"iterator fn\"/><list><block collabId=\"item_365\" s=\"reportNewList\"><list><l>1</l></list></block></list></block><l><option>command</option></l></block><receiver><sprite name=\"cyclic\" collabId=\"item_357\" idx=\"3\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"16\"><costumes><list struct=\"atomic\" id=\"17\"></list></costumes><sounds><list struct=\"atomic\" id=\"18\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"16\"></ref></origin><context id=\"21\"><inputs></inputs><variables></variables><receiver><ref id=\"16\"></ref></receiver><origin><ref id=\"16\"></ref></origin></context></context>"},{"name":"sequence should start with the first value in the list","type":"CustomBlockTest","spec":"cycle %'list'","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><block collabId=\"item_378_15\" s=\"reportAnd\"><block collabId=\"item_378_22\" s=\"reportEquals\"><custom-block collabId=\"item_378_27\" s=\"next %s\"><block collabId=\"item_378_30\" s=\"evaluate\"><block collabId=\"item_378_38\" var=\"iterator fn\"/><list><block collabId=\"item_378_39\" s=\"reportNewList\"><list><l>1</l></list></block></list></block><receiver><project collabStartIndex=\"536\" name=\"myRole\" app=\"NetsBlox 1.27.1, http://netsblox.org\" version=\"1.27.1\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"8\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"9\"></list></costumes><sounds><list struct=\"atomic\" id=\"10\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"intro\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"16\"><costumes><list struct=\"atomic\" id=\"17\"></list></costumes><sounds><list struct=\"atomic\" id=\"18\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"map\" collabId=\"item_304\" idx=\"2\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"21\"><costumes><list struct=\"atomic\" id=\"22\"></list></costumes><sounds><list struct=\"atomic\" id=\"23\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"cyclic\" collabId=\"item_357\" idx=\"3\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"26\"><costumes><list struct=\"atomic\" id=\"27\"></list></costumes><sounds><list struct=\"atomic\" id=\"28\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"129\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"200\" extY=\"129\"/><watcher var=\"iterator\" style=\"normal\" x=\"10\" y=\"315.000006\" color=\"243,118,29\"/><watcher var=\"value\" style=\"normal\" x=\"10\" y=\"330.499998\" color=\"243,118,29\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_361_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_361_3\" s=\"doReport\"><block collabId=\"item_361_2\" s=\"evaluate\"><block collabId=\"item_361_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables><variable name=\"iterator\"><context id=\"48\"><inputs></inputs><variables></variables><script><block collabId=\"item_361_23\" s=\"doSetVar\"><l>index</l><block collabId=\"item_361_21\" s=\"reportSum\"><block collabId=\"item_361_20\" s=\"reportModulus\"><block collabId=\"item_361_19\" var=\"index\"/><block collabId=\"item_361_18\" s=\"reportListLength\"><block collabId=\"item_361_17\" var=\"list\"/></block></block><l>1</l></block></block><block collabId=\"item_361_15\" s=\"doReport\"><block collabId=\"item_361_14\" s=\"reportListItem\"><block collabId=\"item_361_13\" var=\"index\"/><block collabId=\"item_361_12\" var=\"list\"/></block></block></script><receiver><ref id=\"26\"></ref></receiver><origin><ref id=\"26\"></ref></origin><context id=\"67\"><inputs></inputs><variables></variables><receiver><ref id=\"26\"></ref></receiver><origin></origin></context></context></variable></variables><history></history><replay></replay></project></receiver></custom-block><l>1</l></block><block collabId=\"item_378_23\" s=\"reportEquals\"><custom-block collabId=\"item_378_26\" s=\"next %s\"><block collabId=\"item_378_31\" s=\"evaluate\"><block collabId=\"item_378_36\" var=\"iterator fn\"/><list><block collabId=\"item_378_37\" s=\"reportNewList\"><list><l>24</l></list></block></list></block></custom-block><l>24</l></block></block><receiver><ref id=\"26\"></ref></receiver><origin><ref id=\"26\"></ref></origin><context id=\"96\"><inputs></inputs><variables></variables><receiver><ref id=\"26\"></ref></receiver><origin><ref id=\"26\"></ref></origin></context></context>"},{"name":"sequence should remember position","type":"CustomBlockTest","spec":"cycle %'list'","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><script><block collabId=\"item_437\" s=\"doDeclareVariables\"><list><l>iterator</l><l>value</l></list></block><block collabId=\"item_439\" s=\"doSetVar\"><l>iterator</l><block collabId=\"item_441\" s=\"evaluate\"><block collabId=\"item_441_1\" var=\"iterator fn\"/><list><block collabId=\"item_441_2\" s=\"reportNewList\"><list><l>1</l><l>9</l></list></block></list></block></block><block collabId=\"item_531\" s=\"doRepeat\"><l>2</l><script><block collabId=\"item_531_1\" s=\"doSetVar\"><l>value</l><custom-block collabId=\"item_531_2\" s=\"next %s\"><block collabId=\"item_531_3\" var=\"iterator\"/><receiver><project collabStartIndex=\"536\" name=\"myRole\" app=\"NetsBlox 1.27.1, http://netsblox.org\" version=\"1.27.1\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"29\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"30\"></list></costumes><sounds><list struct=\"atomic\" id=\"31\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"intro\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"37\"><costumes><list struct=\"atomic\" id=\"38\"></list></costumes><sounds><list struct=\"atomic\" id=\"39\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"map\" collabId=\"item_304\" idx=\"2\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"42\"><costumes><list struct=\"atomic\" id=\"43\"></list></costumes><sounds><list struct=\"atomic\" id=\"44\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"cyclic\" collabId=\"item_357\" idx=\"3\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"47\"><costumes><list struct=\"atomic\" id=\"48\"></list></costumes><sounds><list struct=\"atomic\" id=\"49\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"129\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"200\" extY=\"129\"/><watcher var=\"iterator\" style=\"normal\" x=\"10\" y=\"315.000006\" color=\"243,118,29\"/><watcher var=\"value\" style=\"normal\" x=\"10\" y=\"330.499998\" color=\"243,118,29\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_361_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_361_3\" s=\"doReport\"><block collabId=\"item_361_2\" s=\"evaluate\"><block collabId=\"item_361_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables><variable name=\"iterator\"><context id=\"69\"><inputs></inputs><variables></variables><script><block collabId=\"item_361_23\" s=\"doSetVar\"><l>index</l><block collabId=\"item_361_21\" s=\"reportSum\"><block collabId=\"item_361_20\" s=\"reportModulus\"><block collabId=\"item_361_19\" var=\"index\"/><block collabId=\"item_361_18\" s=\"reportListLength\"><block collabId=\"item_361_17\" var=\"list\"/></block></block><l>1</l></block></block><block collabId=\"item_361_15\" s=\"doReport\"><block collabId=\"item_361_14\" s=\"reportListItem\"><block collabId=\"item_361_13\" var=\"index\"/><block collabId=\"item_361_12\" var=\"list\"/></block></block></script><receiver><ref id=\"47\"></ref></receiver><origin><ref id=\"47\"></ref></origin><context id=\"88\"><inputs></inputs><variables></variables><receiver><ref id=\"47\"></ref></receiver><origin></origin></context></context></variable><variable name=\"value\"><l>7</l></variable></variables><history></history><replay></replay></project></receiver></custom-block></block></script></block><block collabId=\"item_445\" s=\"doReport\"><block collabId=\"item_395_5\" s=\"reportEquals\"><block collabId=\"item_534\" var=\"value\"/><l>9</l></block></block></script><receiver><ref id=\"47\"></ref></receiver><origin><ref id=\"47\"></ref></origin><context id=\"97\"><inputs></inputs><variables><variable name=\"value\"><l>7</l></variable><variable name=\"iterator\"><ref id=\"69\"></ref></variable></variables><receiver><ref id=\"47\"></ref></receiver><origin><ref id=\"47\"></ref></origin></context></context>"},{"name":"sequence should restart after reaching the end","type":"CustomBlockTest","spec":"cycle %'list'","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><script><block collabId=\"item_459_1\" s=\"doDeclareVariables\"><list><l>iterator</l><l>value</l></list></block><block collabId=\"item_459_2\" s=\"doSetVar\"><l>iterator</l><block collabId=\"item_459_4\" s=\"evaluate\"><block collabId=\"item_459_5\" var=\"iterator fn\"/><list><block collabId=\"item_411_12\" s=\"reportNewList\"><list><l>7</l><l>9</l><l>3</l></list></block></list></block></block><block collabId=\"item_488_1\" s=\"doRepeat\"><l>4</l><script><block collabId=\"item_508\" s=\"doSetVar\"><l>value</l><custom-block collabId=\"item_488_9\" s=\"next %s\"><block collabId=\"item_488_10\" var=\"iterator\"/><receiver><project collabStartIndex=\"536\" name=\"myRole\" app=\"NetsBlox 1.27.1, http://netsblox.org\" version=\"1.27.1\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"30\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"31\"></list></costumes><sounds><list struct=\"atomic\" id=\"32\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"intro\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"38\"><costumes><list struct=\"atomic\" id=\"39\"></list></costumes><sounds><list struct=\"atomic\" id=\"40\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"map\" collabId=\"item_304\" idx=\"2\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"43\"><costumes><list struct=\"atomic\" id=\"44\"></list></costumes><sounds><list struct=\"atomic\" id=\"45\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"cyclic\" collabId=\"item_357\" idx=\"3\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"48\"><costumes><list struct=\"atomic\" id=\"49\"></list></costumes><sounds><list struct=\"atomic\" id=\"50\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"129\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"200\" extY=\"129\"/><watcher var=\"iterator\" style=\"normal\" x=\"10\" y=\"315.000006\" color=\"243,118,29\"/><watcher var=\"value\" style=\"normal\" x=\"10\" y=\"330.499998\" color=\"243,118,29\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_361_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_361_3\" s=\"doReport\"><block collabId=\"item_361_2\" s=\"evaluate\"><block collabId=\"item_361_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables><variable name=\"iterator\"><context id=\"70\"><inputs></inputs><variables></variables><script><block collabId=\"item_361_23\" s=\"doSetVar\"><l>index</l><block collabId=\"item_361_21\" s=\"reportSum\"><block collabId=\"item_361_20\" s=\"reportModulus\"><block collabId=\"item_361_19\" var=\"index\"/><block collabId=\"item_361_18\" s=\"reportListLength\"><block collabId=\"item_361_17\" var=\"list\"/></block></block><l>1</l></block></block><block collabId=\"item_361_15\" s=\"doReport\"><block collabId=\"item_361_14\" s=\"reportListItem\"><block collabId=\"item_361_13\" var=\"index\"/><block collabId=\"item_361_12\" var=\"list\"/></block></block></script><receiver><ref id=\"48\"></ref></receiver><origin><ref id=\"48\"></ref></origin><context id=\"89\"><inputs></inputs><variables></variables><receiver><ref id=\"48\"></ref></receiver><origin></origin></context></context></variable><variable name=\"value\"><l>7</l></variable></variables><history></history><replay></replay></project></receiver></custom-block></block></script></block><block collabId=\"item_459_7\" s=\"doReport\"><block collabId=\"item_459_9\" s=\"reportEquals\"><block collabId=\"item_520\" var=\"value\"/><l>7</l></block></block></script><receiver><ref id=\"48\"></ref></receiver><origin><ref id=\"48\"></ref></origin><context id=\"98\"><inputs></inputs><variables><variable name=\"value\"><l>7</l></variable><variable name=\"iterator\"><ref id=\"70\"></ref></variable></variables><receiver><ref id=\"48\"></ref></receiver><origin><ref id=\"48\"></ref></origin></context></context>"}]},{"name":"Factorial","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/factorial/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"factorial %'num'","inputs":[5],"output":120},{"type":"CustomBlockTest","spec":"factorial %'num'","inputs":[0],"output":1},{"type":"CustomBlockTest","name":"should compute the factorial of an unknown input","spec":"factorial %'num'","inputs":[7],"output":5040}]},{"name":"FizzBuzz","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/fizz-buzz/template.xml","tests":[{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[1],"output":1},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[-39],"output":"fizz"},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[3],"output":"fizz"},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[-50],"output":"buzz"},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[5],"output":"buzz"},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[-150],"output":"fizzbuzz"},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[15],"output":"fizzbuzz"},{"type":"CustomBlockTest","spec":"fizz buzz %'number'","inputs":[0],"output":"fizzbuzz"}]},{"name":"From Infinite Sequences to Finite Lists","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/take-collect-sequences/parsons.xml","tests":[]},{"name":"Intro to Infinite Sequences","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/intro-infinite-sequences/parsons.xml","tests":[{"name":"sequence should start with 1","type":"CustomBlockTest","spec":"counting numbers","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><block collabId=\"item_251\" s=\"reportEquals\"><custom-block collabId=\"item_255\" s=\"next %s\"><block collabId=\"item_256\" s=\"evaluate\"><block collabId=\"item_257\" var=\"iterator fn\"/><list></list></block><receiver><project collabStartIndex=\"290\" name=\"myRole\" app=\"NetsBlox 1.26.0, http://netsblox.org\" version=\"1.26.0\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"6\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"7\"></list></costumes><sounds><list struct=\"atomic\" id=\"8\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"14\"><costumes><list struct=\"atomic\" id=\"15\"></list></costumes><sounds><list struct=\"atomic\" id=\"16\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"86\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"80\" extY=\"70\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_0_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_0_3\" s=\"doReport\"><block collabId=\"item_0_2\" s=\"evaluate\"><block collabId=\"item_0_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><l>1</l></block><receiver><ref id=\"14\"></ref></receiver><origin><ref id=\"14\"></ref></origin><context id=\"41\"><inputs></inputs><variables></variables><receiver><ref id=\"14\"></ref></receiver><origin><ref id=\"14\"></ref></origin></context></context>"},{"name":"sequence should remember current position","type":"CustomBlockTest","spec":"counting numbers","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><script><block collabId=\"item_242_14\" s=\"doDeclareVariables\"><list><l>seq</l></list></block><block collabId=\"item_242_19\" s=\"doSetVar\"><l>seq</l><block collabId=\"item_242_21\" s=\"evaluate\"><block collabId=\"item_242_22\" var=\"iterator fn\"/><list></list></block></block><block collabId=\"item_242_23\" s=\"doReport\"><block collabId=\"item_267\" s=\"reportNot\"><block collabId=\"item_242_26\" s=\"reportEquals\"><custom-block collabId=\"item_242_27\" s=\"next %s\"><block collabId=\"item_264\" var=\"seq\"/><receiver><project collabStartIndex=\"290\" name=\"myRole\" app=\"NetsBlox 1.26.0, http://netsblox.org\" version=\"1.26.0\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"21\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"22\"></list></costumes><sounds><list struct=\"atomic\" id=\"23\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"29\"><costumes><list struct=\"atomic\" id=\"30\"></list></costumes><sounds><list struct=\"atomic\" id=\"31\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"86\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"80\" extY=\"70\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_0_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_0_3\" s=\"doReport\"><block collabId=\"item_0_2\" s=\"evaluate\"><block collabId=\"item_0_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><custom-block collabId=\"item_242_28\" s=\"next %s\"><block collabId=\"item_265\" var=\"seq\"/></custom-block></block></block></block></script><receiver><ref id=\"29\"></ref></receiver><origin><ref id=\"29\"></ref></origin><context id=\"54\"><inputs></inputs><variables></variables><receiver><ref id=\"29\"></ref></receiver><origin><ref id=\"29\"></ref></origin></context></context>"},{"name":"sequence should produce counting numbers","type":"CustomBlockTest","spec":"counting numbers","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><script><block collabId=\"item_275\" s=\"doDeclareVariables\"><list><l>seq</l></list></block><block collabId=\"item_276\" s=\"doSetVar\"><l>seq</l><block collabId=\"item_276_1\" s=\"evaluate\"><block collabId=\"item_276_2\" var=\"iterator fn\"/><list></list></block></block><block collabId=\"item_28\" s=\"doFor\"><l>i</l><l>1</l><l>10</l><script><block collabId=\"item_30\" s=\"doIf\"><block collabId=\"item_32\" s=\"reportNot\"><block collabId=\"item_33\" s=\"reportEquals\"><custom-block collabId=\"item_277\" s=\"next %s\"><block collabId=\"item_277_1\" var=\"seq\"/><receiver><project collabStartIndex=\"290\" name=\"myRole\" app=\"NetsBlox 1.26.0, http://netsblox.org\" version=\"1.26.0\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"27\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"28\"></list></costumes><sounds><list struct=\"atomic\" id=\"29\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"35\"><costumes><list struct=\"atomic\" id=\"36\"></list></costumes><sounds><list struct=\"atomic\" id=\"37\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"86\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"80\" extY=\"70\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_0_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_0_3\" s=\"doReport\"><block collabId=\"item_0_2\" s=\"evaluate\"><block collabId=\"item_0_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><block collabId=\"item_34\" var=\"i\"/></block></block><script><block collabId=\"item_31\" s=\"doReport\"><block collabId=\"item_38\" s=\"reportBoolean\"><l><bool>false</bool></l></block></block></script></block></script></block><block collabId=\"item_39\" s=\"doReport\"><block collabId=\"item_41\" s=\"reportBoolean\"><l><bool>true</bool></l></block></block></script><receiver><ref id=\"35\"></ref></receiver><origin><ref id=\"35\"></ref></origin><context id=\"68\"><inputs></inputs><variables></variables><receiver><ref id=\"35\"></ref></receiver><origin><ref id=\"35\"></ref></origin></context></context>"},{"name":"two sequences should iterate independently","type":"CustomBlockTest","spec":"counting numbers","function":"<context id=\"1\"><inputs><input>iterator fn</input></inputs><variables></variables><script><block collabId=\"item_238_14\" s=\"doDeclareVariables\"><list><l>first</l><l>second</l></list></block><block collabId=\"item_238_19\" s=\"doSetVar\"><l>first</l><block collabId=\"item_238_21\" s=\"evaluate\"><block collabId=\"item_238_22\" var=\"iterator fn\"/><list></list></block></block><block collabId=\"item_238_20\" s=\"doSetVar\"><l>second</l><block collabId=\"item_238_24\" s=\"evaluate\"><block collabId=\"item_238_25\" var=\"iterator fn\"/><list></list></block></block><block collabId=\"item_238_23\" s=\"doReport\"><block collabId=\"item_238_26\" s=\"reportEquals\"><custom-block collabId=\"item_238_27\" s=\"next %s\"><block collabId=\"item_238_30\" var=\"first\"/><receiver><project collabStartIndex=\"290\" name=\"myRole\" app=\"NetsBlox 1.26.0, http://netsblox.org\" version=\"1.26.0\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"27\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"28\"></list></costumes><sounds><list struct=\"atomic\" id=\"29\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"35\"><costumes><list struct=\"atomic\" id=\"36\"></list></costumes><sounds><list struct=\"atomic\" id=\"37\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"86\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"128.5615234375\" extY=\"35\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"80\" extY=\"70\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_0_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_0_3\" s=\"doReport\"><block collabId=\"item_0_2\" s=\"evaluate\"><block collabId=\"item_0_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block><custom-block collabId=\"item_238_28\" s=\"next %s\"><block collabId=\"item_238_29\" var=\"second\"/></custom-block></block></block></script><receiver><ref id=\"35\"></ref></receiver><origin><ref id=\"35\"></ref></origin><context id=\"60\"><inputs></inputs><variables></variables><receiver><ref id=\"35\"></ref></receiver><origin><ref id=\"35\"></ref></origin></context></context>"}]},{"name":"Leap Year","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/leap-year/template.xml","tests":[{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[2015],"output":false},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[1970],"output":false},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[1996],"output":true},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[1960],"output":true},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[2100],"output":false},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[1900],"output":false},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[2000],"output":true},{"type":"CustomBlockTest","spec":"is %'year' a leap year?","inputs":[2400],"output":true}]},{"name":"Luhn Formula","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/luhn-formula/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"is %'text' valid?","name":"single digits cannot be valid","inputs":["8"],"output":false},{"type":"CustomBlockTest","spec":"is %'text' valid?","name":"invalid credit card","inputs":["8273 1232 7352 0569"],"output":false},{"type":"CustomBlockTest","spec":"is %'text' valid?","name":"text with non digit is invalid","inputs":["059a"],"output":false},{"type":"CustomBlockTest","spec":"is %'text' valid?","name":"invalid long number with even remainder","inputs":["1 2345 6789 1234 5678 9012"],"output":false},{"type":"CustomBlockTest","spec":"is %'text' valid?","name":"valid number with even digits","inputs":["095 245 88"],"output":true},{"type":"CustomBlockTest","spec":"is %'text' valid?","name":"valid number with odd number of spaces","inputs":["234 567 891 234"],"output":true}]},{"name":"Mapping Over Infinite Sequences","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/map-sequence/parsons.xml","tests":[{"name":"map should return another sequence","type":"CustomBlockTest","spec":"map %'fn' over sequence %'iter'","function":"<context id=\"1\"><inputs><input>map</input></inputs><variables></variables><block collabId=\"item_369\" s=\"reportIsA\"><block collabId=\"item_372\" s=\"evaluate\"><block collabId=\"item_362\" var=\"map\"/><list><block collabId=\"item_372_2\" s=\"reifyReporter\"><autolambda><block collabId=\"item_372_5\" s=\"reportProduct\"><l>2</l><l></l></block></autolambda><list></list></block><custom-block collabId=\"item_372_3\" s=\"counting numbers\"><receiver><project collabStartIndex=\"433\" name=\"myRole\" app=\"NetsBlox 1.26.0, http://netsblox.org\" version=\"1.26.0\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"20\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"21\"></list></costumes><sounds><list struct=\"atomic\" id=\"22\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"intro\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"28\"><costumes><list struct=\"atomic\" id=\"29\"></list></costumes><sounds><list struct=\"atomic\" id=\"30\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"map\" collabId=\"item_304\" idx=\"2\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"33\"><costumes><list struct=\"atomic\" id=\"34\"></list></costumes><sounds><list struct=\"atomic\" id=\"35\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"52.5\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"200\" extY=\"52.5\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_0_328\" s=\"counting numbers\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs></inputs><script><block collabId=\"item_0_322\" s=\"doDeclareVariables\"><list><l>number</l></list></block><block collabId=\"item_0_319\" s=\"doReport\"><block collabId=\"item_0_318\" s=\"reifyScript\"><script><block collabId=\"item_0_316\" s=\"doChangeVar\"><l>number</l><l>1</l></block><block collabId=\"item_0_313\" s=\"doReport\"><block collabId=\"item_0_312\" var=\"number\"/></block></script><list></list></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block></list></block><l><option>reporter</option></l></block><receiver><ref id=\"33\"></ref></receiver><origin><ref id=\"33\"></ref></origin><context id=\"65\"><inputs></inputs><variables></variables><receiver><ref id=\"33\"></ref></receiver><origin><ref id=\"33\"></ref></origin></context></context>"},{"name":"new sequence should contain transformed values","type":"CustomBlockTest","spec":"map %'fn' over sequence %'iter'","function":"<context id=\"1\"><inputs><input>map</input></inputs><variables></variables><script><block collabId=\"item_304_164\" s=\"doDeclareVariables\"><list><l>evens</l><l>by threes</l></list></block><block collabId=\"item_304_161\" s=\"doSetVar\"><l>evens</l><block collabId=\"item_304_159\" s=\"evaluate\"><block collabId=\"item_313\" var=\"map\"/><list><block collabId=\"item_411\" s=\"reifyReporter\"><autolambda><block collabId=\"item_411_2\" s=\"reportProduct\"><l>2</l><l></l></block></autolambda><list></list></block><custom-block collabId=\"item_321\" s=\"counting numbers\"><receiver><project collabStartIndex=\"433\" name=\"myRole\" app=\"NetsBlox 1.26.0, http://netsblox.org\" version=\"1.26.0\"><notes></notes><thumbnail></thumbnail><stage name=\"Stage\" width=\"480\" height=\"360\" collabId=\"item_-1_1\" costume=\"0\" tempo=\"60\" threadsafe=\"false\" lines=\"round\" codify=\"false\" inheritance=\"false\" sublistIDs=\"false\" scheduled=\"false\" id=\"26\"><pentrails></pentrails><costumes><list struct=\"atomic\" id=\"27\"></list></costumes><sounds><list struct=\"atomic\" id=\"28\"></list></sounds><variables></variables><blocks></blocks><messageTypes><messageType><name>message</name><fields><field>msg</field></fields></messageType></messageTypes><scripts></scripts><sprites><sprite name=\"intro\" collabId=\"item_-1\" idx=\"1\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"34\"><costumes><list struct=\"atomic\" id=\"35\"></list></costumes><sounds><list struct=\"atomic\" id=\"36\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><sprite name=\"map\" collabId=\"item_304\" idx=\"2\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"39\"><costumes><list struct=\"atomic\" id=\"40\"></list></costumes><sounds><list struct=\"atomic\" id=\"41\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite><watcher var=\"test case\" style=\"normal\" x=\"15.020833333333485\" y=\"15.020833333333336\" color=\"243,118,29\"/><watcher var=\"test\" style=\"normal\" x=\"18.020833333333485\" y=\"113.10625300416677\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"52.5\"/><watcher var=\"grader config\" style=\"normal\" x=\"10\" y=\"10\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"assignment\" style=\"normal\" x=\"10\" y=\"103.000002\" color=\"243,118,29\" extX=\"191.84228515625\" extY=\"78\"/><watcher var=\"tests\" style=\"normal\" x=\"10\" y=\"178.000004\" color=\"243,118,29\" extX=\"200\" extY=\"52.5\"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks><block-definition collabId=\"item_0_328\" s=\"counting numbers\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs></inputs><script><block collabId=\"item_0_322\" s=\"doDeclareVariables\"><list><l>number</l></list></block><block collabId=\"item_0_319\" s=\"doReport\"><block collabId=\"item_0_318\" s=\"reifyScript\"><script><block collabId=\"item_0_316\" s=\"doChangeVar\"><l>number</l><l>1</l></block><block collabId=\"item_0_313\" s=\"doReport\"><block collabId=\"item_0_312\" var=\"number\"/></block></script><list></list></block></block></script></block-definition><block-definition collabId=\"item_0_10\" s=\"next %&apos;iterator&apos;\" type=\"reporter\" category=\"custom\"><header></header><code></code><translations></translations><inputs><input type=\"%s\"></input></inputs><script><block collabId=\"item_0_3\" s=\"doReport\"><block collabId=\"item_0_2\" s=\"evaluate\"><block collabId=\"item_0_1\" var=\"iterator\"/><list></list></block></block></script></block-definition></blocks><variables></variables><history></history><replay></replay></project></receiver></custom-block></list></block></block><block collabId=\"item_419\" s=\"doSetVar\"><l>by threes</l><block collabId=\"item_419_1\" s=\"evaluate\"><block collabId=\"item_419_2\" var=\"map\"/><list><block collabId=\"item_419_3\" s=\"reifyReporter\"><autolambda><block collabId=\"item_419_6\" s=\"reportProduct\"><l>3</l><l></l></block></autolambda><list></list></block><custom-block collabId=\"item_419_4\" s=\"counting numbers\"></custom-block></list></block></block><block collabId=\"item_398\" s=\"doFor\"><l>i</l><l>1</l><l>10</l><script><block collabId=\"item_400\" s=\"doIf\"><block collabId=\"item_402\" s=\"reportNot\"><block collabId=\"item_425\" s=\"reportAnd\"><block collabId=\"item_304_154\" s=\"reportEquals\"><custom-block collabId=\"item_304_153\" s=\"next %s\"><block collabId=\"item_423\" var=\"evens\"/></custom-block><block collabId=\"item_405\" s=\"reportProduct\"><l>2</l><block collabId=\"item_407\" var=\"i\"/></block></block><block collabId=\"item_424\" s=\"reportEquals\"><custom-block collabId=\"item_424_1\" s=\"next %s\"><block collabId=\"item_428\" var=\"by threes\"/></custom-block><block collabId=\"item_424_2\" s=\"reportProduct\"><l>3</l><block collabId=\"item_424_3\" var=\"i\"/></block></block></block></block><script><block collabId=\"item_408\" s=\"doReport\"><block collabId=\"item_408_1\" s=\"reportBoolean\"><l><bool>false</bool></l></block></block></script></block></script></block><block collabId=\"item_304_156\" s=\"doReport\"><block collabId=\"item_397\" s=\"reportBoolean\"><l><bool>true</bool></l></block></block></script><receiver><ref id=\"39\"></ref></receiver><origin><ref id=\"39\"></ref></origin><context id=\"135\"><inputs></inputs><variables></variables><receiver><ref id=\"39\"></ref></receiver><origin><ref id=\"39\"></ref></origin></context></context>"}]},{"name":"Minesweeper","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/minesweeper/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"%'board' with mine counts","inputs":[[["","*",""],["*","",""],["","*","*"]]],"output":[[2,"*",1],["*",4,3],[2,"*","*"]],"name":"board w/ mine counts on square board"},{"type":"CustomBlockTest","spec":"%'board' with mine counts","inputs":[[["*","*"],["*",""],["","*"]]],"output":[["*","*"],["*",4],[2,"*"]],"name":"board w/ mine counts on rectangle board"},{"type":"CustomBlockTest","spec":"%'board' with mine counts","inputs":[[["*","*","*"],["*","","*"],["","*",""]]],"output":[["*","*","*"],["*",6,"*"],[2,"*",2]],"name":"board w/ mine counts on dense board"},{"type":"CustomBlockTest","spec":"%'board' with mine counts","inputs":[[["","","",""],["","","","*"],["","","",""]]],"output":[[0,0,1,1],[0,0,1,"*"],[0,0,1,1]],"name":"board w/ mine counts on sparse board"}]},{"name":"Moving Average","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/moving-average/parsons.xml","tests":[{"name":"moving average block should return a list","type":"CustomBlockTest","spec":"moving average %'data' %'n'","function":"<context id=\"1\"><inputs><input>fn</input></inputs><variables></variables><block collabId=\"item_374\" s=\"reportIsA\"><block collabId=\"item_357_281\" s=\"evaluate\"><block collabId=\"item_383\" var=\"fn\"/><list><block collabId=\"item_384\" s=\"reportNewList\"><list><l>1</l><l>1</l><l>1</l></list></block><l>2</l></list></block><l><option>list</option></l></block><receiver><sprite name=\"moving average\" collabId=\"item_357\" idx=\"3\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"19\"><costumes><list struct=\"atomic\" id=\"20\"></list></costumes><sounds><list struct=\"atomic\" id=\"21\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"19\"></ref></origin><context id=\"24\"><inputs></inputs><variables></variables><receiver><ref id=\"19\"></ref></receiver><origin><ref id=\"19\"></ref></origin></context></context>"},{"name":"moving average should be computed correctly","type":"CustomBlockTest","spec":"moving average %'data' %'n'","function":"<context id=\"1\"><inputs><input>fn</input></inputs><variables></variables><block collabId=\"item_464\" s=\"reportEquals\"><block collabId=\"item_468\" s=\"evaluate\"><block collabId=\"item_468_1\" var=\"fn\"/><list><block collabId=\"item_357_234\" s=\"reportNewList\"><list><l>-1</l><l>0</l><l>4</l><l>1</l><l>7</l><l>6</l></list></block><l>3</l></list></block><block collabId=\"item_457\" s=\"reportNewList\"><list><l>1</l><l>1.6666666666666667</l><l>4</l><l>4.666666666666667</l></list></block></block><receiver><sprite name=\"moving average\" collabId=\"item_357\" idx=\"3\" x=\"0.3328710124826557\" y=\"-0.24965325936204863\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"29\"><costumes><list struct=\"atomic\" id=\"30\"></list></costumes><sounds><list struct=\"atomic\" id=\"31\"></list></sounds><variables></variables><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"29\"></ref></origin><context id=\"34\"><inputs></inputs><variables></variables><receiver><ref id=\"29\"></ref></receiver><origin><ref id=\"29\"></ref></origin></context></context>"}]},{"name":"N-gram Autocomplete (n=2)","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/bigram-autocomplete/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"build bigram model from %'words'","name":"build bigram model from %'words' should return a list","function":"<context id=\"1\"><inputs><input>fn</input></inputs><variables></variables><block collabId=\"item_40\" s=\"reportIsA\"><block collabId=\"item_42\" s=\"evaluate\"><block collabId=\"item_43\" var=\"fn\"/><list><block collabId=\"item_30\" s=\"reportNewList\"><list><l>cat</l><l>cab</l></list></block></list></block><l><option>list</option></l></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"17\"><costumes><list struct=\"atomic\" id=\"18\"></list></costumes><sounds><list struct=\"atomic\" id=\"19\"></list></sounds><variables></variables><messageTypes></messageTypes><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"17\"></ref></origin><context id=\"23\"><inputs></inputs><variables></variables><receiver><ref id=\"17\"></ref></receiver><origin><ref id=\"17\"></ref></origin></context></context>"},{"type":"CustomBlockTest","spec":"build bigram model from %'words'","name":"build bigram model from %'words' should return a list with 26 rows","function":"<context id=\"1\"><inputs><input>fn</input></inputs><variables></variables><block collabId=\"item_52\" s=\"reportEquals\"><block collabId=\"item_51\" s=\"reportListAttribute\"><l><option>length</option></l><block collabId=\"item_48_8\" s=\"evaluate\"><block collabId=\"item_48_11\" var=\"fn\"/><list><block collabId=\"item_48_12\" s=\"reportNewList\"><list><l>cat</l><l>cab</l></list></block></list></block></block><l>26</l></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"20\"><costumes><list struct=\"atomic\" id=\"21\"></list></costumes><sounds><list struct=\"atomic\" id=\"22\"></list></sounds><variables></variables><messageTypes></messageTypes><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"20\"></ref></origin><context id=\"26\"><inputs></inputs><variables></variables><receiver><ref id=\"20\"></ref></receiver><origin><ref id=\"20\"></ref></origin></context></context>"},{"type":"CustomBlockTest","spec":"build bigram model from %'words'","name":"build bigram model from %'words' should contain rows that sum to 100","function":"<context id=\"1\"><inputs><input>fn</input></inputs><variables></variables><block collabId=\"item_64\" s=\"reportEquals\"><block collabId=\"item_65\" s=\"reportListAttribute\"><l><option>length</option></l><block collabId=\"item_58\" s=\"reportKeep\"><block collabId=\"item_58_1\" s=\"reifyPredicate\"><autolambda><block collabId=\"item_70\" s=\"reportLessThan\"><block collabId=\"item_77\" s=\"reportMonadic\"><l><option>abs</option></l><block collabId=\"item_75\" s=\"reportDifference\"><l>100</l><block collabId=\"item_69\" s=\"reportVariadicSum\"><block collabId=\"item_82\" var=\"row\"/></block></block></block><l>.5</l></block></autolambda><list><l>row</l></list></block><block collabId=\"item_45_8\" s=\"evaluate\"><block collabId=\"item_45_11\" var=\"fn\"/><list><block collabId=\"item_45_12\" s=\"reportNewList\"><list><l>cat</l><l>cab</l></list></block></list></block></block></block><l>26</l></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"41\"><costumes><list struct=\"atomic\" id=\"42\"></list></costumes><sounds><list struct=\"atomic\" id=\"43\"></list></sounds><variables></variables><messageTypes></messageTypes><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"41\"></ref></origin><context id=\"47\"><inputs></inputs><variables></variables><receiver><ref id=\"41\"></ref></receiver><origin><ref id=\"41\"></ref></origin></context></context>"},{"type":"CustomBlockTest","spec":"build bigram model from %'words'","name":"build bigram model from %'words' should return correct probabilities","function":"<context id=\"1\"><inputs><input>fn</input></inputs><variables></variables><block collabId=\"item_95\" s=\"reportEquals\"><l>50</l><block collabId=\"item_101\" s=\"reportListItem\"><l>1</l><block collabId=\"item_97\" s=\"reportListItem\"><l>3</l><block collabId=\"item_88_8\" s=\"evaluate\"><block collabId=\"item_88_11\" var=\"fn\"/><list><block collabId=\"item_88_12\" s=\"reportNewList\"><list><l>cat</l><l>cab</l><l>che</l><l>chi</l></list></block></list></block></block></block></block><receiver><sprite name=\"Sprite\" collabId=\"item_-1\" idx=\"1\" x=\"0\" y=\"0\" heading=\"90\" scale=\"1\" rotation=\"1\" draggable=\"true\" costume=\"0\" color=\"80,80,80\" pen=\"tip\" id=\"25\"><costumes><list struct=\"atomic\" id=\"26\"></list></costumes><sounds><list struct=\"atomic\" id=\"27\"></list></sounds><variables></variables><messageTypes></messageTypes><blocks></blocks><scripts></scripts></sprite></receiver><origin><ref id=\"25\"></ref></origin><context id=\"31\"><inputs></inputs><variables></variables><receiver><ref id=\"25\"></ref></receiver><origin><ref id=\"25\"></ref></origin></context></context>"}]},{"name":"Pangram","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/pangram/parsons.xml","tests":[]},{"name":"Sieve of Eratosthenes","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/sieve/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"primes up to %'limit'","name":"should not consider 1 prime","inputs":[1],"output":[]},{"type":"CustomBlockTest","spec":"primes up to %'limit'","name":"should find the all primes up to 5","inputs":[5],"output":[2,3,5]},{"type":"CustomBlockTest","name":"should find the all primes up to 30","spec":"factorial %'num'","inputs":[30],"output":[2,3,5,7,11,13,17,19,23,29]}]},{"name":"Sliding Windows","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/sliding-windows/template.xml","tests":[]},{"name":"Vigenere Cipher","starter template":"https://raw.githubusercontent.com/NetsBlox/exercises/master/exercises/vigenere/parsons.xml","tests":[{"type":"CustomBlockTest","spec":"encrypt %'message' with %'keys'","inputs":["how are you?",["1","2","3","4"]],"output":"iqz$bth$zqxC"},{"type":"CustomBlockTest","spec":"encrypt %'message' with %'keys'","inputs":["cba",["1","2","3"]],"output":"ddd"},{"type":"CustomBlockTest","spec":"encrypt %'message' with %'keys'","inputs":["wow, negative keys?",["-2","-5","-3"]],"output":"ujt*\u001bkcb^rdsc\u001bhctp="},{"type":"CustomBlockTest","spec":"encrypt %'message' with %'keys'","inputs":["what large keys!",["100","200","300"]],"output":"[0\rXh\u0018E:\u0013Ih\u0017IA\u001f\u0005"}]}]};
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
                await this.grade(this.currentAssignment);
                const padding = 20;
                this.resultsDialog.setBottom(this.ide.bottom() - padding);
                this.resultsDialog.setRight(this.ide.right() - padding);
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
    function checkLoaded() {
        if (!NetsBloxExtensions.isLoaded(config.name)) {
            return setTimeout(checkLoaded, 100);
        }

        const autograder = NetsBloxExtensions.registry.find(ext => ext.name === config.name);
        const assignmentName = 'Sieve of Eratosthenes';
        const assignment = autograder.assignments.find(a => a.name === assignmentName);
        if (assignment) {
            autograder.loadAssignment(assignment);
        }
    }
    checkLoaded();

})();