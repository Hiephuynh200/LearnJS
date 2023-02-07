//Hàm
/*
function showDialog() {
    alert("Hello World!");
}

showDialog();
*/


//Tham số hàm

/*
function writeLog(message, message2)  {
    if(message) {
        console.log(message);
    }
    if(message2) {
        console.log(message2);
    }
}

writeLog('javascript', "php"); 


function writeLog()  {
    var myString = "";
    for(var param of arguments) {
       myString += `${param} - `;
    }
    console.log(myString);
}

writeLog('log1', "log2", 'log3'); 


function WriteCar() {
    var myCarString = "";
    for(var param of arguments) {
         myCarString += `${param} + `;
    }
    console.log(myCarString);
}

WriteCar('car1', 'car2', 'car3');
*/

//return trong hàm 

/*
var isConfirm = confirm('message?');
console.log(isConfirm);

function cong(a,b) {
    return a + b;
}
var result = cong(1,2);
console.log(result);


function cong(a,b) {
    return "2" + "2";
}
var result = cong(1,2);
console.log(result);

*/


//hiểu hơn về hàm
/*
function showMessage() {
    console.log('message1')
}
function showMessage() {
    console.log('message2')
}
function showMessage() {
    console.log('message3')
}
showMessage(); //--> message3 chỉ lấy function cuối nếu function trùng tên

function showDialog(){
    var fullName = "hiep huynh"
    console.log(fullName);
}
showDialog()

function showMessage2() {
    function showMessage3() {
        console.log('mesage2')
    }
    showMessage3(); //--> message3 
}
showMessage2()
*/

//declaration function
showMessage()
function showMessage() {
    console.log("Declaration function")
}

//expression function
var showMessage2 = function testName() {
    console.log("expression function")

}

setTimeout(function testName() {

});

var myObject = {
    myFunction: function testName() {

    }
}