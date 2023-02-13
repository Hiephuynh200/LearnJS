//1. for - lặp với điều kiện đúng

var date = 2
if(date == 2) {
    for(var i = 1; i <= 5; i++) {
        console.log(i);
    }
} else {
    console.log('ko co gi')
}

////////////////////////////////

var myArray = [
    'javascript',
    'html',
    'css',
    'node'
]
var arrLength = myArray.length;
for(var i = 0; i < arrLength; i++) {
    console.log(`${i} ${myArray[i]}`);
}

////////////////////////////////

var myCar = [
    'bentley',
    'roll royce',
    'honda',
    'lamborghini',
    'bmw'
]

var carLength = myCar.length;

for(var i = 0; i < carLength; i++) {
    console.log(`${i} ${myCar[i]}`);
}

////////////////////////////////

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(price){
    var sum = 0
    for(var i = 0; i < price.length; i++) {
        sum += price[i].price
    }
    return sum
}

console.log(`gia tien tong cong: ${getTotal(orders)}`)

////////////////////////////////
//for-in 

var myInfor = {
    name: 'Khóa học HTML - CSS Pro',
    price: 300000,
    address: 'nha trang'
}

for (var key in myInfor) {
    //console.log(`${key}: ${myInfor[key]}`)
    console.log(myInfor[key])
}
////////////////////////////////

var language = [
    'javascript',
    'html',
    'css',
    'node'
]

for(var key in language) {
    console.log(language[key])
}
////////////////////////////////

var languageString = 'javascript'

for(var key in languageString) { 
    console.log(languageString[key])
}

////////////////////////////////
//for of

var language = [
    'javascript',
    'html',
    'css',
    'node'
]
for(var x of language) {
    console.log(x)
}

////////////////////////////////
var languages ='javascript'
for(var x of languages) {
    console.log(x)
}
////////////////////////////////
var languagesString = {
    name: 'javascript',
    age: 18
}
console.log(Object.keys(languagesString)) // lay key cua object
for(var x of Object.keys(languagesString)) {
    console.log(languagesString[x])
}


////////////////////////////////
//while

var i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}

var myArray = [
    'javascript',
    'html',
    'css',
    'node'
]
var i=0
while(i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

////////////////////////////////
//do-while

var i = 0
var isSuccessful = false

do {
    i++;
    console.log('nap the lan ' + i );

    //thanh cong
    if(false) {
        isSuccessful = true;
    }

} while(!isSuccessful && i <= 3)


////////////////////////////////
//break va continue in loop
//break
for(var i = 0; i < 10; i++) { 
    console.log(i)

    if(i >= 5) {
        break;
    }
}

//continue
for(var i = 0; i < 10; i++) { 
    if(i % 2 !== 0){
        continue;
    }
    console.log(i)
}


////////////////////////////////
//vong lap long nhau - nested loop
var myArray = [
    [1,2],
    [3,4],
    [5,6]
]
for(var i = 0; i < myArray.length; i++) {
    for(var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}



for(var i = 100; i > 0; i--) {
    console.log(i)
}

for(var i = 0; i <= 100; i+= 10) { 
    console.log(i)
}


for(var i = 100; i > 0; i -= 10) {
    console.log(i)
}


//de quy
var arr =['a','b','c','a','b','c']
console.log([...(new Set(arr))])

function countDown(num) { 
    if(num > 0) { 
        console.log(num)
        return countDown(num - 1)
    }
    return num;
}
countDown(3)
////////////////////////////////
function loop(start, end, callback) { 
    if(start <= end) { 
        callback(start);
        return loop(start + 1, end, callback)
    }
}

var arr = ['javascript', 'html', 'css']

loop(0, arr.length , function(index) {
    console.log(arr[index])
})
////////////////////////////////
//tinh giai thua cua 3
//loop
function giaithua(num) {
    var output = 1 
    for(var i = num; i > 0; i--) { 
        output *= i 
    }
    return output
}
console.log(giaithua(6))
//de quy
function giaithua2(num) { 
    if(num > 0) {
        return num * giaithua2(num - 1)
    }
    return 1;
}

console.log(giaithua2(6))