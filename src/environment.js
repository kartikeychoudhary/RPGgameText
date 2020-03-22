import * as encounter from "./encounter";

export class Environment{
    constructor(name){
        this.name = name;
        this.encounter = encounter.generator();
    }

    stumbleUpon(){return `${this.name} ${this.encounter.whenEncounter()}`;} 
}