export const print = (...args) => {let string="";let arg;for(arg of args)string+=`${arg} `;console.log(string);}

export let options = {
    _intro: "You can Type",
    _options: ["left", "right", "up", "down", "help"],
    outputOptions(){this._options.forEach(f => addToOutput(`${this._intro} ${f}`))},
    
}