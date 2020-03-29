"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addToOutput = addToOutput;

var _environment = require("./environment");

var _additional = require("./additional");

var _fileprocessing = require("./fileprocessing");

var BR = "<br>";
var defaultLine = "+ Start your Journey now !!!";

var environment = new _environment.Environment("Forest - ");
var treasures = new WeakMap();
var tresCoords = new Set();
var _fileInput;

var x = 0,
    y = 0;

function navigate(stepX, stepY) {
    var _ref = [x + stepX, y + stepY];
    x = _ref[0];
    y = _ref[1];


    var coordiates = document.querySelector("#coordinates");
    coordiates.innerHTML = x + ", " + y;

    findTreasure();
}

function findTreasure() {
    var findCoords = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tresCoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var coords = _step.value;

            if (coords.x == x && coords.y == y) {
                findCoords = coords;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (findCoords) {
        var _treasures$get = treasures.get(findCoords),
            name = _treasures$get.name,
            value = _treasures$get.value;

        if (value) {
            addToOutput("You found a " + name + " value (" + value + ")");
        }
    }
}

function main() {
    var enterEl = document.querySelector("#enter");

    enterEl.addEventListener("click", onclickEnter, false);

    addToOutput();

    var coordinate1 = { x: 2, y: 2 };
    tresCoords.add(coordinate1);
    treasures.set(coordinate1, { name: "treasure_chest", value: 100 });
    var coordinate2 = { x: 2, y: 0 };
    tresCoords.add(coordinate2);
    treasures.set(coordinate2, { name: "medaillon", value: 10 });

    _fileInput = document.querySelector("#file");
    _fileInput.onchange = function () {
        (0, _fileprocessing.onChange)(_fileInput.files, tresCoords, treasures);
    };
}
main();
console.log(Object.getOwnPropertySymbols(_additional.options));

function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var ouput = document.querySelector("#output");
    ouput.innerHTML += BR + newLine;
    (0, _additional.print)(newLine);
}

function onclickEnter() {
    var commands = document.querySelector("#commands");

    if (commands.value == "help") {
        _additional.options.outputOptions();
    } else if (commands.value == "left") {
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "right") {
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "up") {
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "down") {
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "poke") {
        addToOutput(environment.poke());
    } else {
        addToOutput(commands.value);
    }
}
//# sourceMappingURL=script.js.map