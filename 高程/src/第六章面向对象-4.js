/* 
1.EMCScript中有两种属性：数据属性和访问器属性
*/

/*
2.访问器属性
    访问器属性不包含数据值；它们包含一对getter和setter函数（不过，这两个函数都不是必须的）；
    访问器属性有如下4个特性：
        (1)[[Configurable]]:表示能否通过delete删除属性从而重定义属性，能否修改属性的特性，或者能否把属性修改为数据属性，
            对于直接在对象上定义的属性，这个特性的默认值为true；
        (2)[[Enumerable]]:表示能否通过for-in循环返回属性；对于直接在对象上定义的属性，这个特性的默认值为true；
        (3)[[Get]]:在读取属性时调用的函数。默认值为undefined
        (4)[[Set]]:在写入属性时调用的函数。默认值为undefined

3.数据属性和访问器属性都不能访问或定义，要通过Object.defineProperty()来访问或定义；
*/

var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {

        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition)
