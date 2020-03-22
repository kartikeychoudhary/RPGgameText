export class Encounter {
    constructor(introText=""){
        this.introText = introText;
    }
    whenEncounter(){
        return this.introText;
    }
}

export class Bear extends Encounter{
    constructor(){
        super("grr grow, You encountered a Bear. !!!");
    }
}

export class Angel extends Encounter{
    constructor(){
        super("wow you encountered an Angel, This will give you healing capabilites or increased strength possibilites");
    }
}

export class Ghost extends Encounter{
    constructor(){
        super("Booh!!, you encountered a Ghost!!");
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

