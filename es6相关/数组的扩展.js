// 1.Array.from()方法用于将两类对象转为真正的数组：类似数组的对象和可遍历对象（包括ES6新增的数据结构Set和Map）
// (1)类似数组
let arrLike = {
    '0': 1,
    '1': 2,
    '2': 3,
    length: 3
};
//ES5的写法
//或者Array.prototype.slice.call(arrLike)
var arr2 = [].slice.call(arrLike);
var arr4 = Array.prototype.slice.call(arrLike);
//ES6的写法
var arr3 = Array.from(arrLike);

let divs = document.querySelectorAll('div');
Array.from(divs).forEach(d => {
    console.log(d);
});
//（2） arguments对象
function arg (one, two) {
    var args = Array.from(arguments);
    console.log(args);
}

arg(1, 2);

//对于还没有部署Array.from()方法的浏览器可以使用Array.prototype.slice方法替代
//P：还没试验过
const toArray = ((obj) => Array.from ? Array.from : obj => [].slice.call(obj))();

//p:所谓类似数组的对象，本质特征只有一点，必须有length属性
//扩展运算符（...）也可以将某些数据结构转为数组
function args () {
    var arr = [...arguments];
}

[...document.querySelectorAll('div')]

//2.Array.from()还可以接受第二个参数，作用类似于数组的map方法，用来
// 对每个元素进行处理，将处理后的值放入返回的数组
let aa = Array.from(arrLike, function (x) {
    return x * x;
});


console.log(aa);
let bb = Array.from(arrLike, x => x * x);
console.log(bb);

let cc = Array.from([1, 2, 3], x => x + x);
console.log(cc);


//3.Array.of()方法用于将一组值转换为数组
Array.of(1, 2, 3);//[1,2,3]
Array.of(1);//[1]
Array.of(1).length;//1

// Array.of()方法可以用下面的代码模拟实现
function ArrayOf () {
    return [].slice.call(arguments);
}

//4.数组实例的find()和findIndex()
var a = [1, 2, 3, 4].find(x => x >= 1.5);
console.log(a);

var a = [1, 2, 3, 4].find((val, index, arr) => {
    console.log(val, index)
});

var b = [1, 2, NaN].find(x => {
    if (isNaN(x))
        console.log(x);
})

//Object.is()方法判断两个值是否是相同的值。
var b = [1, 2, NaN].find(x => Object.is(NaN, x))

// 5.数组的空位，数组的空位指数组的某一位置没有任何指。比如，Array()构造函数返回的数组都是空位.
// 注意，空位不是undefined,一个位置的值等于undefined依然是有值的。空位置没有任何值，in运算符
// 可以说明这一点
0 in [undefined, undefined] //true
0 in [,] //false
var a = new Array(3);
debugger;
console.log(a);