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
//# sourceMappingURL=additional.js.map