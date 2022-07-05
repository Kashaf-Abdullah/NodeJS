// addition of type  for ES6 module
//import {simple} from "./ES6modulesecond.mjs"  //add time  module in package.json
//import {simple2 as simple} from "./ES6modulesecond.mjs"
//import { simple,simple2} from "./ES6modulesecond.mjs"// remove default keyword 
import * as a2 from "./ES6modulesecond.mjs";



// simple();
// simple2();

console.log(a2);// for import * as a2 from "./ES6modulesecond.mjs";
console.log(a2.simple)
console.log(a2.simple())

console.log(a2.simple2)
