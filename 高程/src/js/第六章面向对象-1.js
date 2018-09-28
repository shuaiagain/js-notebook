
//Object.defineProperty()
var per = {
    name: 'ss'
};

Object.defineProperty(per, 'age', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: 12
});

per.age;
for (var item in per) {
    console.log(item);
}
delete per.age
per.age
// Object.defineProperties()
var oo = {};
Object.defineProperties();
