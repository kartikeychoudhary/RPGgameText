"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var options = exports.options = {
    _intro: "You can Type",
    _options: ["left", "right", "up", "down", "help"],
    outputOptions: function outputOptions() {
        var _this = this;

        this._options.forEach(function (f) {
            return addToOutput(_this._intro + " " + f);
        });
    }
};
//# sourceMappingURL=additional.js.map