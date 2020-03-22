import {addToOutput} from "./script"

export const print = (...args) => {let string="";let arg;for(arg of args)string+=`${arg} `;console.log(string);}
export const INPUT_OPTIONS = Symbol("input_options");
export let options = {
    _intro: "You can Type",
    [INPUT_OPTIONS]: ["left", "right", "up", "down", "help"],
    outputOptions(){this[INPUT_OPTIONS].forEach(f => addToOutput(`${this._intro} ${f}`))},
    
}