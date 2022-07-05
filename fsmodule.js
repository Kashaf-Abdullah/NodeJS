//  UTF-8 stands for “Unicode Transformation Format - 8 bits.” 
//In callback function ,we have 2 arguments err and data 
// A callback is a function passed as an argument to another function.
// CALLBACK FUNCT

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

const fs=require('fs');
const { stringify } = require('querystring');
fs.readFile('file.txt','utf8',(err,data)=>{

    console.log(err,data);

})

console.log('Finished Reading file');
//Finished Reading will print first and then filw will be read because file reading take time sp Finished Reading will print first



// ........................
// If the encoding option is specified then this function returns a string. Otherwise it returns a buffer
const a=fs.readFileSync('file.txt')
// console.log(a)..if you see string
console.log(a.toString())

console.log('Finished Reading file');
// but using fs.readFileSync  -->content of file will print first then finished Raeding just becaise NodeJs block intentionally


// fs.access(): check if the file exists and Node.js can access it with its permissions
// fs.appendFile(): append data to a file. If the file does not exist, it's created