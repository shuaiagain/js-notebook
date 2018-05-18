// 要去看看第四章的执行环境及作用域

// 1.函数声明提升：在执行代码之前会先读取函数声明
sayHi();
function sayHi () {
    console.log(hi);
}

// (1)递归
function factorial (num) {

    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

var fa = factorial;
fa(3);
factorial = null;
fa(3);

//改写1,arguments.callee是指向一个正在指向的函数的指针，但是在严格模式下，不能
// 通过脚本访问arguments.callee，访问这个属性会导致错误
function factorial (num) {

    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

//改下2,可以通过创建一个名为ff()的命名函数表达式，然后将它赋值给变量factorial;
// 即便把函数赋值给另一个变量，函数的名字ff仍然有效
var factorial = function ff (num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * ff(num - 1);
    }
};

factorial(3);
console.log(factorial(3));
console.log(factorial.name);
var f = factorial;
factorial = null;
console.log(f(3));

//2.闭包：是指有权访问另一个函数作用域中的变量的函数 



//3.关于this对象，this对象是在运行时基于函数的执行环境绑定的：在全局函数中，
// this等于window,而当函数作为某个对象的方法调用时，this等于那个对象。不过，匿名函数的执行
// 环境具有全局性，因此其this对象通常指向window。

var name = 'the window';
var obj = {
    name: 'my obj',
    getName: function () {
        return function () {
            return this.name;
        };
    }
}