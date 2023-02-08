// var languages = [
//     'javascript',
//     'PHP',
//     'ruby',
//     'python',
//     null,
//     undefined,
//     function() {},
//     {}
// ];

// console.log(languages); // cách 1 nên dùng

// var languages = new Array(
//     'javascript',
//     'PHP',
//     'ruby',
//     'python',
//     null,
// )

//console.log(languages); // cách 2 


var languages = [
    'javascript',
    'PHP',
    'ruby',
    'python',
    // null,
    // undefined,
    // function() {},
    // {}
];
console.log(languages.length); 
console.log(languages[122]); 
console.log(Array.isArray(languages)) // kiểm tra có phải là array hay không


//1. To string
console.log(languages.toString());

//2. join
console.log(languages.join('; '));

//3. Pop
console.log(languages.pop()); // xoá element cuối mảng và trả về phần tử đã xoá

//4. Push
console.log(languages.push('Dart', 'java')); // thêm element vào cuối mảng có thể thêm một hoặc nhiều
console.log(languages);

//5. Shift
console.log(languages.shift()); // xoá element cuối mảng và trả về phần tử đã xoá

//6. Unshift
console.log(languages.unshift('Dart', 'java')); // thêm element vào đầu mảng có thể thêm một hoặc nhiều    
console.log(languages);

//7. splice
console.log(languages.splice(1, 0)); //  
