"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ghost = exports.Angel = exports.Bear = exports.Encounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generator = generator;

require("babel-core/register");

require("babel-polyfill");

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
    }, {
        key: "poke",
        value: /*#__PURE__*/regeneratorRuntime.mark(function poke() {
            return regeneratorRuntime.wrap(function poke$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return "hey, sup !!!";

                        case 2:
                        case "end":
                            return _context.stop();
                    }
                }
            }, poke, this);
        })
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr grow, You encountered a Bear. !!!"));
    }

    _createClass(Bear, [{
        key: "poke",
        value: /*#__PURE__*/regeneratorRuntime.mark(function poke() {
            return regeneratorRuntime.wrap(function poke$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return "Grrrr ...";

                        case 2:
                            _context2.next = 4;
                            return "Bear is Agressive";

                        case 4:
                            _context2.next = 6;
                            return "Bear is Attacking you!!";

                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, poke, this);
        })
    }]);

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "wow you encountered an Angel, This will give you healing capabilites or increased strength possibilites"));
    }

    _createClass(Angel, [{
        key: "poke",
        value: /*#__PURE__*/regeneratorRuntime.mark(function poke() {
            return regeneratorRuntime.wrap(function poke$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return "May the Force be with You";

                        case 2:
                            _context3.next = 4;
                            return "Your Health is recovered";

                        case 4:
                            _context3.next = 6;
                            return "Your Strength is increased";

                        case 6:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, poke, this);
        })
    }]);

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        return _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this, "Booh!!, you encountered a Ghost!!"));
    }

    _createClass(Ghost, [{
        key: "poke",
        value: /*#__PURE__*/regeneratorRuntime.mark(function poke() {
            return regeneratorRuntime.wrap(function poke$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return "Aloha.!! where are you going";

                        case 2:
                            _context4.next = 4;
                            return "Ghost is sucking your health";

                        case 4:
                            _context4.next = 6;
                            return "Ghost hurt your health";

                        case 6:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, poke, this);
        })
    }]);

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
//# sourceMappingURL=encounter.js.map