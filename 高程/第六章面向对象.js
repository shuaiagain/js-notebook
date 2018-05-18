//1.工厂模式
function createPerson(name, age, job) {

    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };

    return o;
}

var personOne = createPerson('John', 12, 'student');
var personTwo = createPerson('Jone', 13, 'student');

//工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）


// 2.构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = function () {
        alert(this.name);
    }
}

var peOne = new Person('Jack', 12, 'programmer');
var peOne = new Person('LiLi', 13, 'programmer');

// 创建Person的新实例，必须用new操作符，以这种方式调用构造函数实际上会经历以下四个步骤：
// （1）创建一个新对象；
// （2）将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
// （3）执行构造函数中的代码（为这个新对象添加属性）
// （4）返回新对象；

// 构造函数的问题： 每个方法都要在每个实例上重新创建一遍；

// 3.原型模式
// 我们创建的每个函数都有一个prototype(原型) 属性， 这个属性是一个指针，
// 指向一个对象， 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
// 按照字面意思来理解， 那么prototype就是通过调用构造函数而创建的那个对象实例的原型对象。 使用
// 原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。 换句话说， 不必在构造函数中定义对象实例的信息，
// 而可以将这些信息直接添加到原型对象中。

// （1）虽然可以通过对象实例访问保存在原型中的值，但却不能通过对象实例重写原型中的值。
// 如果我们在实例中添加了一个属性，而这个属性实例原型中的一个属性同名，那我们就在实例中创建该属性，
// 该属性将会屏蔽原型中的那个属性
// eg:
function Person() {

}

Person.prototype.name = 'jojo';
Person.prototype.age = 29;
Person.prototype.sayName = function () {
    alert(this.name);
}

var pOne = new Person();
var pTwo = new Person();
pTwo.name = 'jone'; //这里添加的name是pp对象里的name而不是pp对象原型里的name
Person.prototype.name = 'oop';
alert(pOne.name);

// （2）使用delete操作符可以完全删除实例属性
// （3）使用hasOwnProperty()方法可以检测一个属性师傅存在与实例中，只有给点的属性存在于实例中时，才会
// 返回true
// （4）自己写的检测属性是否在原型中hasPrototyProperty(object,propertyName)
function hasPrototyProperty(object, propertyName) {
    return !object.hasOwnProperty(name) && (name in object);
}


//（5） 要获取对象上所有可枚举的属性，可以使用ECMAScript5的Object.keys()方法,
// 该方法接受一个对象作为参数，返回一个包含所有可以枚举属性的字符串数组
function Person() {

}

Person.prototype.name = 'jone';
Person.prototype.age = 12;
Person.prototype.sayName = function () {
    alert(this.name);
}

var keys = Object.keys(Person.prototype);
alert(keys);//'name,age,job,sayName'

var pone = new Person();
pone.name = 'john';
pone.age = 11;
var poneKeys = Object.keys(pone)
alert(poneKeys);//'name,age'

//（6）如果你想得到所有实例属性，无论它是否可枚举，都可以使用Object.getOwnPropertyNames()
// 方法
var allKeys = Object.getOwnPropertyNames(Person.prototype);
alert(allKeys);//'constructor,name,age,sayName'

//（7）更简单的原型语法
function Person() {
}

Person.prototype = {
    name: 'jack',
    age: 12,
    sayName: function () {
        console.log(this.name);
    }
}

// 上面的代码我们将Person.prototype设置为等于一个对象字面量形式创建的对象，其他都和之前分开给prototype添加
// 的属性一样，但是有一个例外：constructor属性不在指向Person了（现在指向Object构造函数），此时
// 尽管instanceof操作符能返回正常的结果，但通过constructor已经无法确定对象的类型了

var p = new Person();
console.log(p instanceof Object);//true
console.log(p instanceof Person);//true
console.log(p.constructor === Person);//false
console.log(p.constructor === Object);//true

//如果constructor的值真的很重要，可以像下面这样特意讲台设置回适当的值，
Person.prototype = {
    constructor: Person,
    name: 'jack',
    age: 12,
    sayName: function () {
        console.log(this.name);
    }
}
//以这种方式重设constructor属性会导致他的[[Enumerable]]属性被设置为true.默认的情况下，原生
// 的constructor属性是不可枚举的，因此如果你使用兼容ECMAScript5的javascript引擎，可以试一试
//Object.defineProperty()方法
//重设构造函数只适用于ECMAScript5的兼容性浏览器
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});


// 7.组合使用构造函数模式和原型模式（创建自定义类型）
// 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享属性，结果每个实例都会
// 有自己的衣服实例属性的副本，但同时有共享着对方法的引用，最大限度的节省内存；另外
// 这种混合模式还支持向构造函数传参；可谓是集两种模式之长；


function Person(name, job) {

    this.name = name;
    this.job = job;
    this.friends = ['a', 'b'];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}



// 8.继承
// （1）原型链：让原型对象等于另一个类型的实例（确定实例的类型）

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperProperty = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

SubType.prototype.getPro = function () {
    return this.subproperty;
}

var subOne = new SubType();
console.log(subOne);
SubType.prototype = new SuperType();

debugger;
SubType.prototype.getSubProperty = function () {
    return this.subproperty;
}

var sub = new SubType();
console.log(sub.property, sub.subproperty, sub.getSuperProperty(), sub.getSubProperty())

sub.property;
sub.subproperty;
sub.getSuperProperty();
sub.getSubProperty();

//要注意instance.constructor（即指SubType.Constructor）现在指向的事SuperType
//（2）所有函数的默认原型都是Object的实例，因此默认原型都会包含一个内部指针，指向Object.prototype，
// 这也正是所有自定义类型都很继承toString()、valueOf()等默认方法的根本原因
//(既然所有函数默认原型都是Object的实例，那为什么函数默认会有个constructor属性呢？是声明函数时添加进去的吗？)

//（3）确定原型和实例的关系，通过两种方式来确定，第一种是使用instanceof操作符，
// 只要用这个操作符来测试实例(此时的构造函数为SuperType)与原型链(此时的构造函数为SuperType)中出现过的构造函数，
// 结果就好返回true.
alert(instance instanceof Object)
alert(instance instanceof SuperType)
alert(instance instanceof SubType)
//（3）确定原型和实例的关系，通过两种方式来确定，第二种是使用isPrototypeOf()方法。只要是原型链中出现过的原型，都可以
// 说是该原型链所派生的实例原型，因此isPrototypeOf()方法也会返回true

alert(Object.prototype.isPrototypeOf(instance))
alert(SuperType.prototype.isPrototypeOf(instance))
alert(SubType.prototype.isPrototypeOf(instance))

// （4）借用构造函数（也叫做伪造对象或经典继承）：在子类构造函数的内部调用超类构造函数，别忘了，函数只不过是在特定
// 环境中执行代码的对象,因此通过调用apply和call方法也可以在（将来）新创建的对象上执行构造函数；
function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {
    SuperType.call(this);
}

var sub = new SubType();
console.log(sub.colors);
sub.colors.push('black');
console.log(sub.colors);

var subTwo = new SubType();
console.log(subTwo);
// 优点：相对于原型链而言，借用构造函数有一个很大的优势，既可以在子类型构造函数中向超类型构造函数传递参数
// 缺点：(1)方法都在构造函数中，因此函数复用就无从谈起了（2）在超类的原型中定义的方法，对子类而言也是不可见
// 的
function SuperType(name) {
    this.name = name;
}

function SubType() {

    SuperType.call(this, 'Nicholas');

    this.age = 29;
}

var instance = new SubType();
alert(instance.name);
alert(instance.age);

// (5) 组合继承，有时候也叫伪经典继承，原型链和构造函数的技术组合到一块；思路是：原型上定义方法实现了函数复用，
// 又能够保证每个实例都有它自己的属性；instanceof和isPrototypeof()也能够用于识别基于组合继承创建的对象；


function SuperType(name) {

    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {

    alert(this.name);
}

function SubType(name, age) {

    SuperType.call(this, name);

    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {

    console.log(this.age);
};

var one = new SubType('one', 29);
one.colors.push('black');
one.sayName();
one.sayAge();

var two = new SubType('two', 20);
two.sayName();
two.sayAge();

//（6）原型式继承：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型;
// 在object函数内部，先创建一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后
// 返回了这个临时类型的一个新实力；object()对传入其中的对象执行了一次浅复制；
function object(o) {
    function F() {

    }
    F.prototype = o;
    return new F();
}

//eg:
var person = {
    name: 'jone',
    friends: ['one', 'two'],
    sayName: function () {
        console.log(this.name);
    }
};

var one = object(person);
one.name='one';
one.friends.push('three');
debugger;
console.log(one.friends);
one.sayName();

var two=object(person);
two.name='two';
two.friends.push('four');

console.log(two.friends);
two.sayName();

