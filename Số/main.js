//1. Tạo giá trị Number

var age = 18;
var PI = 3.14; // cách 1 nên dùng

var otherNumber = new Number(10); // cách 2 

var result = 20 / 'ABC'
console.log(result)
console.log(isNaN(result))

//2. Làm việc với Number

var age2 = 18
var pi2 = 30000.5341231

var myString = age2.toString() 
console.log(typeof myString)

var myPi = pi2.toFixed()
console.log( myPi)


//bài tập

function isNumber(value){
    return (typeof value === 'number')
}

console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false