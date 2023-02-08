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



////////////////////////////////////////////////////////////////
var myString = "   hiephuynh hiephuynh hiephuynh h   "

//1. Lenght
console.log(myString.length)

//2. Find index
console.log(myString.indexOf("u", 2)) // có thể truyền vị trí tìm kiếm
console.log(myString.lastIndexOf("hiep" ))
console.log(myString.search("hiep")) // không thể truyền vị trí tì kiếm 

//3. Cut string
console.log(myString.slice(0, 5))
console.log(myString.slice(-3,-1)) // cắt từ phải sang trái

//4. Replace
console.log(myString.replace("hiephuynh", "heo map"))
console.log(myString.replace(/hiephuynh/g, "heo map")) //thay đổi tất cả 

//5. Convert to upper case
console.log(myString.toUpperCase())

//6. Convert to lower case
console.log(myString.toLowerCase())

//7. Trim
console.log(myString.trim())

//8. Split
var language = 'javascript, PHP, Ruby'
console.log(language.split(', '))
console.log(language.split(''))

//9. Get a character by index
const myString2 = 'hiep huynh'
console.log(myString2.charAt(2))
console.log(myString2[10])