class Animal{
    constructor (name, age, legs, species, status){
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce(){
        console.log (`Nama ${this.name}, Umur ${this.age}, Kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}`);
    }
}

class Shark extends Animal{
    constructor (){
        super();
         this.name = 'Hiu'   
         this.age = 10
         this.legs = 0
         this.species = 'shark'
         this.status = 'Berenang'
    }
}

class Cat extends Animal{
    constructor (){
        super();
         this.name = 'Kucing'   
         this.age = 10
         this.legs = 4
         this.species = 'Cat'
         this.status = 'Berjalan'
    }
}

class Dog extends Animal{
    constructor (){
        super();
         this.name = 'Anjing'   
         this.age = 10
         this.legs = 4
         this.species = 'Dog'
         this.status = 'Lari'
         this.master = 'Hasan'
    }
    greetMaster(){
        console.log (`Nama ${this.name}, Umur ${this.age}, Kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}, Pemilik ${this.master}`);
    }
}

const binatang = new Shark()
binatang.introduce()

const binatang2 = new Cat()
binatang2.introduce()

const binatang3 = new Dog()
binatang3.greetMaster()