// first comment the type:module in package ,json file then this code will run
const EventEmitter=require('events');//use of event package

class MyEmitter extends EventEmitter{}
const myEmitter =new MyEmitter();

//this code will run when event(Waterful) fired
myEmitter.on('Waterful',()=>{
    console.log('off the motor');
    //setTime is never block the code 
    setTimeout(()=>{
        console.log('plz  ....turn  off the motor');
    },3000)

});

console.log('The script is running');
myEmitter.emit('Waterful');

//if event name is emit so we call event like this--->myEmitter.emit('emit');