/*
var myInf = {
    name: 'hiep huynh',
    age: 18,
    address: {
        city: 'chicago',
        state: 'IL'
    },
    getName: function() { 
        return this.name;
    }
}
myInf.email = 'hzdkv@example.com'  // them vao object
console.log(myInf.name, myInf.age, myInf.address.city) ; // lay key trong object

var mykey = 'address'
console.log(myInf[mykey]);

delete myInf.address;
console.log(myInf);

//function --> phuong thuc /method
// other --> thuoc tinh / property

*/



//object constructor
/*
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('thien', 'huynh', 'https://avatars.githubusercontent.com');
var user = new User('vu', 'huynh', 'https://avatars.githubusercontent.com');

author.title = 'chia se dao tai f8';
user.comment = 'chia se dao tai f8';

console.log(author.getName());
console.log(user.getName());


function car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;

    this.getName = function() {
        return `${this.name} ${this.model} ${this.year}`
    }
}

var legendaryCar = new car('BMW', 'X5', 2016);
var modernCar = new car('Audi', 'A4', 2016);

legendaryCar.override = 2019
modernCar.override = 2019

console.log(legendaryCar.getName());
console.log(modernCar.getName());

*/



//Object prototype
/*
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8'
User.prototype.getClassName = function() {
    return this.className;
}

var user1 = new User('thien', 'huynh', 'https://avatars.githubusercontent.com');
var user = new User('vu', 'huynh', 'https://avatars.githubusercontent.com');

user1.title = 'chia se dao tai f8';
user.comment = 'chia se dao tai f8';

console.log(user1.className);
console.log(user.getClassName());
*/


//Đối tượng Date
/*
var date = new Date()

var year = date.getFullYear()
var month = date.getMonth() + 1
var day = date.getDate()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
console.log(`nam ${year} thang ${month} ngay ${day} 
gio ${hours} phut ${ minutes} giay ${seconds}`)

*/

//Math Object

//1. Math.PI
console.log(Math.PI);
//2. Math.round() 
console.log(Math.round(3.14));
//3. Math.abs() // tri tuyet doi
console.log(Math.abs(-3.14));
//4. Math.ceil() // lam tron tren
console.log(Math.ceil(3.00000001));
//5. Math.floor() // lam tron duoi
console.log(Math.floor(3.9));
//6. Math.random()
console.log(Math.floor(Math.random() * 10));

var random  = Math.floor(Math.random() * 5)
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
console.log(bonus[random])

var random2 = Math.floor(Math.random() * 100)
if(random2 < 50) {
    console.log('cuong hoa thanh cong')
}

//7. Math.min()
console.log(Math.min(1, 2, 3, 4, 5));
//8. Math.max()
console.log(Math.max(1, 2, 3, 4, 5));

function getRandomItem(random) {
    return  random[Math.floor(Math.random() * random.length)];
}

let getArrayRandomItem = getRandomItem([ '50 test', '60 test', '70 test', '80 test', '90 test' ]) 
function getRandomItem(array) { 
    let random = Math.floor(Math.random() * array.length) 
    return array[random] 
}

console.log(getArrayRandomItem)