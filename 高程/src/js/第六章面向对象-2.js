
//工程模式
function Person(name, age) {

    var o = new Object();
    o.name = name;
    o.age = age;

    return o;
}

Person.prototype.getName = function () {
    return this.name;
}

var p = Person('one', 12);
debugger
console.log(p.name);
var pp = new Person('two', 11);
pp.getName();

//构造函数模式
function Animal(name, type) {

    this.name = name;
    this.type = type;
}
var aa=new Animal('dog','four');

