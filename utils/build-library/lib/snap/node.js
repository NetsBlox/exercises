/*

    morphic.js

    a lively Web-GUI
    inspired by Squeak

    written by Jens Mönig
    jens@moenig.org

    Copyright (C) 2017 by Jens Mönig

    This file is part of Snap!.

    Snap! is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


    This contains the Node definition from the morphic framework (as the xml.js)
    file depends on it
*/
function Node(parent, childrenArray) {
  this.init(parent || null, childrenArray || []);
}

Node.prototype.init = function (parent, childrenArray) {
  this.parent = parent || null;
  this.children = childrenArray || [];
};

// Node string representation: e.g. 'a Node[3]'

Node.prototype.toString = function () {
  return "a Node" + "[" + this.children.length.toString() + "]";
};

// Node accessing:

Node.prototype.addChild = function (aNode) {
  this.children.push(aNode);
  aNode.parent = this;
};

Node.prototype.addChildFirst = function (aNode) {
  this.children.splice(0, null, aNode);
  aNode.parent = this;
};

Node.prototype.removeChild = function (aNode) {
  var idx = this.children.indexOf(aNode);
  if (idx !== -1) {
    this.children.splice(idx, 1);
  }
};

// Node functions:

Node.prototype.root = function () {
  if (this.parent === null) {
    return this;
  }
  return this.parent.root();
};

Node.prototype.depth = function () {
  if (this.parent === null) {
    return 0;
  }
  return this.parent.depth() + 1;
};

Node.prototype.allChildren = function () {
  // includes myself
  var result = [this];
  this.children.forEach(function (child) {
    result = result.concat(child.allChildren());
  });
  return result;
};

Node.prototype.forAllChildren = function (aFunction) {
  if (this.children.length > 0) {
    this.children.forEach(function (child) {
      child.forAllChildren(aFunction);
    });
  }
  aFunction.call(null, this);
};

Node.prototype.anyChild = function (aPredicate) {
  // includes myself
  var i;
  if (aPredicate.call(null, this)) {
    return true;
  }
  for (i = 0; i < this.children.length; i += 1) {
    if (this.children[i].anyChild(aPredicate)) {
      return true;
    }
  }
  return false;
};

Node.prototype.allLeafs = function () {
  var result = [];
  this.allChildren().forEach(function (element) {
    if (element.children.length === 0) {
      result.push(element);
    }
  });
  return result;
};

Node.prototype.allParents = function () {
  // includes myself
  var result = [this];
  if (this.parent !== null) {
    result = result.concat(this.parent.allParents());
  }
  return result;
};

Node.prototype.siblings = function () {
  var myself = this;
  if (this.parent === null) {
    return [];
  }
  return this.parent.children.filter(function (child) {
    return child !== myself;
  });
};

Node.prototype.parentThatIsA = function (constructor) {
  // including myself
  if (this instanceof constructor) {
    return this;
  }
  if (!this.parent) {
    return null;
  }
  return this.parent.parentThatIsA(constructor);
};

Node.prototype.parentThatIsAnyOf = function (constructors) {
  // including myself
  var yup = false,
    myself = this;
  constructors.forEach(function (each) {
    if (myself.constructor === each) {
      yup = true;
      return;
    }
  });
  if (yup) {
    return this;
  }
  if (!this.parent) {
    return null;
  }
  return this.parent.parentThatIsAnyOf(constructors);
};

module.exports = Node;
