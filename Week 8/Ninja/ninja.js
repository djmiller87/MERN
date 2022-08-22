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

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
