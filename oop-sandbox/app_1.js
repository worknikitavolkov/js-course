function Person(firstName, secondName, dob) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.secondName}`;
}

Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const brad = new Person('Brad', 'Traversy', '9-10-1981');

console.log(brad.calculateAge());
console.log(brad.getFullName());