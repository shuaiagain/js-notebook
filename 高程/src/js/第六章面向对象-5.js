function Person() {

}

var friend = new Person();
Person.prototype = {
    constructor: Person,
    name: 'one',
    age: 20,
    friends: [1, 2, 3],
    cartoons: {
        a: 'one',
        b: 'two'
    },
    sayName: function () {
        console.log(this.name);
    }
}

debugger
// friend.sayName();
var p1 = new Person();
var p2 = new Person();
p1.name = 'two'

p1.cartoons.a='0'
console.log(Person.prototype.name)
console.log(p2.name)

console.log(p1.hasOwnProperty('friends'))


