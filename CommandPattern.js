/* Command Pattern : with command pattern , we can decouple objects
 that execute certain task from the object that calls the method. */

/* example of online food delivery * User can place, track, cancel orders */

class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(command, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`you have ${order}`);
  });
}

function TracOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id === id);
    console.log();
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order.id != id);
  });
}

const manager = new OrderManager();
manager.execute(new PlaceOrderCommand("Pad Thai", "123"));
manager.execute(new TracOrderCommand("123"));
manager.execute(new CancelOrderCommand("123"));

/* Pros
The command pattern allows us to decouple methods from the object that executes the operation. It gives you more control if you’re dealing with commands that have a certain lifespan, or commands that should be queued and executed at specific times.

Cons
The use cases for the command pattern are quite limited, and often adds unnecessary boilerplate to an application */
