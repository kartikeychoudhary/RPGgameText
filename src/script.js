import {Environment} from "./environment";
import {options, print} from "./additional";

const BR = "<br>";
const defaultLine = "+ Start your Journey now !!!"

var environment = new Environment("Forest - ");


function main(){
    let enterEl = document.querySelector("#enter");

    enterEl.addEventListener("click", onclickEnter, false);

    addToOutput();
}
main();

function addToOutput(newLine=defaultLine){
 let ouput =document.querySelector("#output");
 ouput.innerHTML += BR + newLine;
 print(newLine);
}

function onclickEnter(){
    let commands = document.querySelector("#commands");
    
    if(commands.value == "help"){
       options.outputOptions(); 
    }else if(commands.value == "left"){
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "right"){
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "up"){
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "down"){
        addToOutput(environment.stumbleUpon());
    }
    else{
        addToOutput(commands.value);
    }
}