/* Prototype Pattern is a usefull way to share properties among many objects of the same type.
This will allow us to easily let objects access and inherit properties from other objects. */

class Dogs {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log("hi");
  }
}

class SuperDog extends Dogs {
  constructor(name) {
    super(name);
  }
  fly() {
    console.log("fly");
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();
