function Person(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
}

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.secondName}`;
}

function Customer(firstName, secondName, phone, membership) {
    Person.call(this, firstName, secondName);
    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const person1 = new Person('John', 'Doe');
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standart');

console.log(person1);
console.log(customer1);
console.log(person1.greeting());
console.log(customer1.greeting());
