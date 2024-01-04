/* Factory pattern , with factory pattern, we can use factory function while creating a new object.
 A function is a factory when it return an object without using a new keyword */

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "John",
  lastName: "David",
  email: "john@gmail.com",
});
