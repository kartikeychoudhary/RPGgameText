import * as encounter from "./encounter";

export class Environment{
    constructor(name){
        this.name = name;
        this.encounter = encounter.generator();
    }

    stumbleUpon(){
        this.encounter=encounter.generator();
        this.pokeEncountered=this.encounter.poke();
        
        return `${this.name} ${this.encounter.whenEncounter()}`;} 

    poke(){
        var pokeReturn = this.pokeEncountered.next();
        if(!pokeReturn.done){
            return pokeReturn.value;
        }
    }
}