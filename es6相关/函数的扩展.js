// 默认值：注意，ES6内部使用严格相等运算符（===）判断一个位置是否有值。所以，如果
// 一个数组成员不严格等于undefined,默认值不会生效

// 1.函数参数的默认值
// 下面两种写法有什么差别？

// 写法一
function mOne ({ x = 0, y = 0 } = {}) {
    console.log([x, y]);
}

// 写法二 
function mTwo ({ x, y } = { x: 0, y: 0 }) {
    console.log([x, y]);
}

mOne();
mTwo();

mOne({ x: 3, y: 8 });
mTwo({ x: 3, y: 8 });

mOne({ x: 3 });
mTwo({ x: 3 });

mOne({});
mTwo({});

mOne({ z: 3 });
mTwo({ Z: 3 });

// 2.函数默认参数作用域
// 如果参数默认值是一个变量，则该变量所处的作用域与其他变量的作用域规则是一样的，
// 即先是当前函数的作用域，然后才是全局作用域

var x = 1;
function f (x, y = x) {
    console.log(y);
}

f(2) //2
// 上面参数y的默认值等于x,调用时，由于函数作用域内部的变量x已经生成，所以y等于参数x而不是全局变量

// 如果函数A的参数默认值是函数B，那么由于函数的作用域是其声明时所在的作用域，函数B的作用域就不是函数A,
// 而是全局作用域

let foo = 'outer';

function bar (func = x => foo) {
    let foo = 'inner';
    console.log(func());
}

bar();

function bb (func = function x () {
    return foo;
}) {
    let foo = 'inner';
    console.log(func());
}

bb()
console.log(1);

// 3.扩展运算符，是三个点（...）.它好比rest参数的逆运算，讲一个数组转为用逗号分隔的参数序列


console.log(...[1, 2, 3, 4]);

console.log(...['1', '2', '3']);

//用扩展运算符替代数组的apply方法
function f (x, y, z) {
    console.log(x + y + z)
}
var arg = [1, 2, 3];
f.apply(this, arg);
f(...arg)

// 用扩展预算符取代apply方法，用于Math.max方法简化求数组最大元素的写法
//es5写法
Math.max.apply(null, [13, 4, 77])

//es6写法
Math.max(...[13, 4, 77])

debugger;
//讲一个数组添加到另一个数组尾部
var arr2 = [1, 2, 3];
var arr3 = [4, 5, 6];
// es5写法
Array.prototype.push.apply(arr2, arr3);

// es6写法
arr2.push(...arr3);

