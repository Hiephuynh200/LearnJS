//1. for - lặp với điều kiện đúng
// var date = 2
// if(date == 2) {
//     for(var i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// } else {
//     console.log('ko co gi')
// }


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

//
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

//
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
