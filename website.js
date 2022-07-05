const http=require('http');
const fs=require('fs');
const { callbackify } = require('util');


const port =process.env.PORT||3000;



const server=http.createServer((req,res)=>{
    res.statusCode=200;
    
    res.setHeader('Content-Type','text/html' )

// console.log(req)
// console.log(req.url)



 
 if(req.url=='/') //type :localhost:3000/ so you will see index.html text
{
    res.statusCode=200;
    const data=fs.readFileSync('index.html');

res.end(data.toString());

}



else if(req.url=='/about') //type :localhost:3000/ so you will see about me
{
    res.statusCode=200;
res.end('<h1>About Me</h1> <p> This is me kashaf</p>');

}

else if(req.url=='/'){  //type :localhost:3000/ so you will see This is kashaf
    res.statusCode=200;
    res.end('<h1> This is Kashaf</h1> <p>Helloo</>')
}
 






else{   //type :localhost:3000/dsjds(random text) so you will see Not found 
    res.statusCode=200;
    res.end('<h1>Not Found</h1> ');
}
}

)

server.listen(port,()=>{
console.log(`Server is listening on port ${port}`);
});
//nodemon package
// npm install -g nodemon

// node .\website.jd
// after this installation of package ..if you will type any random text so you will found  app crash error message