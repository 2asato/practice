const tamagotchi1 = {
  name: 'Noodle',
  creatureType: 'Corgi',
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry(){
    console.log('Waaaaa!!!!');
    this.foodInTummy--;
  },
  puke(){
    console.log(this.name + ' is goinig to yak...Bleeeeh :0~~');
    tamagotchi1.health--;
    console.log(tamagotchi1.name + '\'s health: ' + tamagotchi1.health);
  },
  yawn(){
    console.log(this.name + ' is tired...Yaaaawwwwn!');
    tamagotchi1.restedness--;
    console.log(this.name + '\'s restedness: ' + this.restedness);
  }
}
// tamagotchi1.cry();
// tamagotchi1.puke();
// tamagotchi1.yawn();

const tamagotchi2 = {
  name: 'Cleo',
  creatureType: 'Rottweiler',
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry(){
    console.log('Waaaaa!!!!');
    this.foodInTummy--;
  },
  puke(){
    console.log(this.name + ' is goinig to yak...Bleeeeh :0~~');
    this.health--;
    console.log(this.name + '\'s health: ' + this.health);

  },
  yawn(){
    console.log(this.name + ' is tired...Yaaaawwwwn!');
    this.restedness--;
    console.log(this.name + '\'s restedness: ' + this.restedness);

  }
}
// tamagotchi2.puke();

const player = {
  name: 'Teyo',
  sayName(){
    console.log('Hi my name is: ' + this.name);
  },
  feedTamagotchis(){
    tamagotchi1.foodInTummy++;
    tamagotchi2.foodInTummy++;
    console.log(tamagotchi1.name + '\'s food in tummy: ' + tamagotchi1.foodInTummy);
    console.log(tamagotchi2.name + '\'s food in tummy: ' + tamagotchi2.foodInTummy);
  },
  medicateTamagotchi(tamagotchi){
    tamagotchi.health++;
    console.log(tamagotchi.name + '\'s health: ' + tamagotchi.health);
  },
  knockOutTamagotchi(tamagotchi){
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' is sleeping');
    console.log(tamagotchi.name + '\'s restedness: ' + tamagotchi.restedness);
  }
}
// player.sayName();
// player.feedTamagotchis();
// player.medicateTamagotchi(tamagotchi1);
// player.medicateTamagotchi(tamagotchi2);
// player.knockOutTamagotchi(tamagotchi2);

const hungerTimer = setInterval(()=>{
  tamagotchi1.cry();
  tamagotchi2.cry();
}, 6000);
