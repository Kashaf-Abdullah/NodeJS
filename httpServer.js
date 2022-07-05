const http=require('http');

const { callbackify } = require('util');
//process get which port
// const port =process.env.port;


// to identify in which port your application is running so .PORT 
const port =process.env.PORT||3000;//then search localhost:300 so it will show you and then inspect go on network so you will see there is status code 200 which we define earlier




// createserver is the function of http server and it takes two callbacks ==>req and res

const server=http.createServer((req,res)=>{

console.log(req)
console.log(req.url)//so whatever u eill search ->localhost:300/kashaf Abdullah so it will display in console


    //response code for not found is 404,,,,,,response statusCode tell if there is any problem/issue with response
    res.statusCode=200;
    //set header is type of cintent-type so request will save  with in html otherwise will save in plain text

    res.setHeader('Content-Type','text/html' )
    //the response which do u wanna send
res.end('<h1>This is kashaf Abdullah</h1> <p>Student of software engineering</p>')

})
//server.listen takes one callback
server.listen(port,()=>{
console.log(`Server is listening on port ${port}`);
});