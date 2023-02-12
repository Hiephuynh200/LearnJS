var date = 0;
if(date == 2) {
    console.log("hom nay la thu 2");
} else if(date == 3) {
    console.log("hom nay la thu 3");
} else if(date == 4) {
    console.log("hom nay la thu 4");
} else {
    console.log("hom nay sai");
}


// lenh re nhanh switch

var ngay = 1;
switch(ngay) {
    case 1:
        console.log("ngay 1");
        break;
    case 2:
        console.log("ngay 2");
        break;
    case 3:
        console.log("ngay 3");
        break;
    default:
        console.log("eo co ngay nay");
}

//toan tu 3 ngoi

var course = { 
    name: "C++",
    coin: 0
}

if(course.coin > 0) {
    console.log(`${course.coin} Coins`)
} else  {
    console.log('mien phi')
}

var result = course.coin > 0 ? `${course.coin} Coins` :  'mien phi'; // --> 3 ngoi
console.log(result);

var a = 0
var b = 2

var c = a > 0 ? a : b
console.log(c);