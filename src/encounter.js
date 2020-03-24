import "babel-core/register";
import "babel-polyfill";

export class Encounter {
    constructor(introText=""){
        this.introText = introText;
    }
    whenEncounter(){
        return this.introText;
    }

    * poke(){
        yield "hey, sup !!!";
    }
}

export class Bear extends Encounter{
    constructor(){
        super("grr grow, You encountered a Bear. !!!");
    }
    * poke(){
        yield "Grrrr ...";
        yield "Bear is Agressive";
        yield "Bear is Attacking you!!"
    }
}

export class Angel extends Encounter{
    constructor(){
        super("wow you encountered an Angel, This will give you healing capabilites or increased strength possibilites");
    }

    * poke(){
        yield "May the Force be with You";
        yield "Your Health is recovered";
        yield "Your Strength is increased"
    }
}

export class Ghost extends Encounter{
    constructor(){
        super("Booh!!, you encountered a Ghost!!");
    }
    * poke(){
        yield "Aloha.!! where are you going";
        yield "Ghost is sucking your health";
        yield "Ghost hurt your health"
    }
}

export function generator(){
     let number = Math.floor(Math.random()*(4-1))+1;

     switch(number){
         case 1:return new Bear();
         case 2:return new Angel();
         case 3:return new Ghost();
         case 4:return new Encounter();

     }
}

