//first import os module
const os=require('os');
// //we are not using slash here because this is builtin model but in index.js 
// when we import second.js so use slash beacsue of file system
// whenever we use builtin model so we just write name not any slash

console.log(os.freemem())// will show free memory of your computer
console.log(os.homedir());//home directory will show
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());

//explore more "os function" from nodejs docs 

//will display all information of os