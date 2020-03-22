import {Environment} from "./environment";
import {options, print} from "./additional";

const BR = "<br>";
const defaultLine = "+ Start your Journey now !!!"

var environment = new Environment("Forest - ");
var treasures = new WeakMap();
var tresCoords = new Set();

var x=0, y=0;

function navigate(stepX, stepY){
    [x, y] = [x+stepX, y+stepY];

    let coordiates= document.querySelector("#coordinates");
    coordiates.innerHTML = `${x}, ${y}`;

    findTreasure();
}

function findTreasure(){
    let findCoords;
    for(let coords of tresCoords){
        if(coords.x == x && coords.y == y){
            findCoords = coords;
        }
    }

    if(findCoords){
        var {name, value} = treasures.get(findCoords);
        if(value){
            addToOutput(`You found a ${name} value (${value})`);
        }
    }
}

function main(){
    let enterEl = document.querySelector("#enter");

    enterEl.addEventListener("click", onclickEnter, false);

    addToOutput();

    var coordinate1 = {x:2, y:2};
    tresCoords.add(coordinate1);
    treasures.set(coordinate1,{name:"treasure_chest",value:100});
    var coordinate2 = {x:2, y:0};
    tresCoords.add(coordinate2);
    treasures.set(coordinate2,{name:"medaillon",value:10});

}
main();
console.log(Object.getOwnPropertySymbols(options));

export function addToOutput(newLine=defaultLine){
 let ouput =document.querySelector("#output");
 ouput.innerHTML += BR + newLine;
 print(newLine);
}

function onclickEnter(){
    let commands = document.querySelector("#commands");
    
    if(commands.value == "help"){
       options.outputOptions(); 
    }else if(commands.value == "left"){
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "right"){
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "up"){
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    }else if(commands.value == "down"){
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    }
    else{
        addToOutput(commands.value);
    }
}