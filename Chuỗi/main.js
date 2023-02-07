//Các cách tạo chuỗi
var fullName = "hiep huynh" //cách 1 nên dùng
var fullName = new String("hiephuynh") //cách 2
console.log(typeof fullName)

// một số case sử dụng backlash (\)
var nameFull = "hiep huynh la \'sieu nhan\'"
console.log(nameFull)

//xem độ dài chuỗi
var lengthName = "hiephuynh"
console.log(lengthName.length) // cách 1 nên dùng

var lengthName = new String("hiephuynh") //cách 2 dài dòng 
console.log(typeof lengthName.length)

// chú ý độ dài khi viết code
var lengthName = "hiephuynh hiephuynh hiephuynh" 
+ " hiephuynh hiephuynh hiephuynh hiephuynh hiephuynh"
+ " hiephuynh hiephuynh hiephuynh hiephuynh hiephuynh"
+ " hiephuynh hiephuynh hiephuynh hiephuynh hiephuynh"
console.log(lengthName)

// template string ES6
var firsName = "hiep"
var lastName = "huynh"
console.log(`toi la: ${firsName} ${lastName}`)