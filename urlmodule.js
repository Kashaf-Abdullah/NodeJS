import url from 'url';// import using ES6 mosule


const myURL=new URL('https://exaample.org');
myURL.pathname='a/b/c';
myURL.search='?d=e';
myURL.hash='#fgh';


console.log(myURL);
//to check final URL
console.log(myURL.href);
