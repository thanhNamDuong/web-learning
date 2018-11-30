var person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function () {
    console.log('Hi! I\'m ' + this.name + '.');
}

var person2 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
});

//Using the create() method without using constructors
var person3 = Object.create(person2);
console.log(person3.name);
//console.log(person3.greeting());
console.log(person2.__proto__.__proto__);