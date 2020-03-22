(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.options = exports.INPUT_OPTIONS = exports.print = undefined;

var _options;

var _script = require("./script");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var print = exports.print = function print() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var string = "";var arg = void 0;var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            arg = _step.value;
            string += arg + " ";
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

    console.log(string);
};
var INPUT_OPTIONS = exports.INPUT_OPTIONS = Symbol("input_options");
var options = exports.options = (_options = {
    _intro: "You can Type"
}, _defineProperty(_options, INPUT_OPTIONS, ["left", "right", "up", "down", "help"]), _defineProperty(_options, "outputOptions", function outputOptions() {
    var _this = this;

    this[INPUT_OPTIONS].forEach(function (f) {
        return (0, _script.addToOutput)(_this._intro + " " + f);
    });
}), _options);

},{"./script":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generator = generator;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
    function Encounter() {
        var introText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Encounter);

        this.introText = introText;
    }

    _createClass(Encounter, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return this.introText;
        }
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr grow, You encountered a Bear. !!!"));
    }

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "wow you encountered an Angel, This will give you healing capabilites or increased strength possibilites"));
    }

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        return _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this, "Booh!!, you encountered a Ghost!!"));
    }

    return Ghost;
}(Encounter);

function generator() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;

    switch (number) {
        case 1:
            return new Bear();
        case 2:
            return new Angel();
        case 3:
            return new Ghost();
        case 4:
            return new Encounter();

    }
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Environment = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encounter = require("./encounter");

var encounter = _interopRequireWildcard(_encounter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = exports.Environment = function () {
    function Environment(name) {
        _classCallCheck(this, Environment);

        this.name = name;
        this.encounter = encounter.generator();
    }

    _createClass(Environment, [{
        key: "stumbleUpon",
        value: function stumbleUpon() {
            return this.name + " " + this.encounter.whenEncounter();
        }
    }]);

    return Environment;
}();

},{"./encounter":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addToOutput = addToOutput;

var _environment = require("./environment");

var _additional = require("./additional");

var BR = "<br>";
var defaultLine = "+ Start your Journey now !!!";

var environment = new _environment.Environment("Forest - ");
var treasures = new WeakMap();
var tresCoords = new Set();

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
    } else {
        addToOutput(commands.value);
    }
}

},{"./additional":1,"./environment":3}]},{},[4]);
