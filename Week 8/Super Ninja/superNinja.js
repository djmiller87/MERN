class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){ 
        console.log(`${this.name}`)
    }

    showStats(){
        console.log(`Name: ${this.name}\n Strength: ${this.strength}\n Speed: ${this.speed}\n Health: ${this.health}`)
    }

    drinkSake(){
        this.health += 10
        console.log(`Drinking sake lowered your health to ${this.health}`)
    }

}

class Sensei extends Ninja {
    constructor(name, wisdom){
        super(name, 200, 10, 10, wisdom);
            this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`"To fix an error use //. Free from error, you shall be!"`)
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

