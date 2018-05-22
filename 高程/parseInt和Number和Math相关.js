// 看书时看到Number（）和+转换数字速度要比parseInt（）快的多，所以闲来无事我就试了试。
// 1.parseInt（）
// parseInt（）函数将给定的字符串以指定的基数解析为整数。 
// parseInt（string，radix） 
// 第二个参数表示使用的进制，我们一般使用10进制，也可能会有到8或者16进制。为了避免对“0”和“0x”开头的字符串解析错误，各种javascript编程规范都规定必须要明确给出第二个参数的值，如parseInt(“123”,10). 
// parseInt从头解析string为整数，在遇到不能解析的字符时就返回已近解析的整数部分，如果第一个字符就不能解析，就直接返回NaN。
// 2.Number（）
// Number（）在不用new操作符时，可以用来执行类型转换。如果无法转换为数字，就返回NaN。 
// 像“123a”，parseInt（）返回是123，Number（）返回是NaN。
// 3.+
// +操作符可以将字符串转化为数字，如+”123”返回是123. 
// 和Number（）一样，+”123a”返回是NaN；


// Math.ceil()
// 功能：对一个数进行上取整。
// 语法：Math.ceil(x)
// 参数：
// x：一个数值。
// 返回值：返回大于或等于x，并且与之最接近的整数。
// 注：如果x是正数，则把小数“入”；如果x是负数，则把小数“舍”。
// 例：
// document.write( Math.ceil(1.2)+", "+Math.ceil(1.8)+", "+Math.ceil(-1.2)+", "+Math.ceil(-1.8) ); 2, 2, -1, -1

// Math.floor()
// 功能：对一个数进行下取整。
// 语法：Math.floor(x)
// 参数：
// x：一个数值。
// 返回值：返回小于或等于x，并且与之最接近的整数。
// 注：如果x是正数，则把小数“舍”；如果x是负数，则把小数“入”。
// 例：
// document.write( Math.floor(1.2)+", "+Math.floor(1.8)+", "+Math.floor(-1.2)+", "+Math.floor(-1.8) ); 1, 1, -2, -2


// Math.round()
// 功能：四舍五入取整。
// 语法：Math.round(x)
// 参数：
// x：一个数值。
// 返回值：与x最接近的整数。
// 例：
// document.write( Math.round(1.2)+", "+Math.round(1.8)+", "+Math.round(-1.2)+", "+Math.round(-1.8) );
// 输出结果为：
// document.write( Math.round(1.2)+", "+Math.round(1.8)+", "+Math.round(-1.2)+", "+Math.round(-1.8) ); 1, 2, -1, -2