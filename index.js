import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/jagerua/a-tiny-JS-world.git
   Web app: https://jagerua.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Animals {
   constructor (name, friends, gender, species, saying, legs) {
      this.name = name;
      this.friends = friends;
      this.gender = gender;
      this.species = species;
      this.saying = saying;
      this.legs = legs;
   }
   getDescription() {
      return `This ${this.saying} name <strong>${this.name}</strong>. ${this.species}. This is ${this.gender}. And ${this.name}\`s friends are ${this.friends.join(', ')} around. Legs ${this.legs}.`;
   }
};

class Dog extends Animals {
   constructor (name, friends, gender) {
      super(name, friends, gender, 'Woof-woof!', 'dog', 4);
   }
};

class Cat extends Animals {
   constructor (name, friends, gender) {
      super(name, friends, gender, 'May!', 'cat', 4);
   }
};

class People {
   constructor (name, friends, gender, species, saying, legs, hands) {
      this.name = name;
      this.friends = friends;
      this.gender = gender;
      this.species = species;
      this.saying = saying;
      this.legs = legs;
      this.hands = hands;
   }
   getDescriptionPeople() {
      return `This ${this.saying} name <strong>${this.name}</strong>. ${this.saying}! This is ${this.gender}. And ${this.name}\`s friends are ${this.friends.join(', ')}. Has ${this.legs} legs, ${this.hands} hands.`;
   }
};


   class Men extends People {
      constructor (name, friends, gender, saying) {
         super(name, friends, gender, saying, 'human', 2, 2);
         
      }
   }

   class SuperWoman extends People {
      constructor (name, friends, gender, saying) {
         super(name, friends, gender, saying, 'human', 2, 2);
         this.power = 'SuperWoman.';
      }
       getDescriptionPeople() {
         return super.getDescriptionPeople() + ` I am ${this.power}`
       }
        
   };


const dog = new Dog ('Jack', ['All'], 'male');
const cat = new Cat ('Puss', ['All'], 'female');
const men = new Men ('Tom', ['Jack', 'Puss'], 'male', 'Hello');
const woman = new SuperWoman ('Leya', ['Jack', 'Puss', 'All'], 'female', 'Karamba')

const inhabitants = [dog, cat];
inhabitants.forEach(item => print(item.getDescription()));

const humans = [men, woman];
humans.forEach(item => print(item.getDescriptionPeople()));


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
