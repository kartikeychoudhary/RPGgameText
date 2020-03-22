"use strict";

var _environment = require("./environment");

var _additional = require("./additional");

var BR = "<br>";
var defaultLine = "+ Start your Journey now !!!";

var environment = new _environment.Environment("Forest - ");

function main() {
    var enterEl = document.querySelector("#enter");

    enterEl.addEventListener("click", onclickEnter, false);

    addToOutput();
}
main();

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
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "right") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "up") {
        addToOutput(environment.stumbleUpon());
    } else if (commands.value == "down") {
        addToOutput(environment.stumbleUpon());
    } else {
        addToOutput(commands.value);
    }
}
//# sourceMappingURL=script.js.map