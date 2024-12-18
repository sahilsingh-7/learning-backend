import http from 'http'

const PORT = 8000;
const server = http.createServer((req,res)=>{
    // res.setHeader('content-type','text/html');
    // res.statusCode = 404;
    // res.write('<h1>thsi jssj</h1>');
    // res.end();
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h1>hello their </h1> <h6>jddhhd</h6>');
});
server.listen(PORT,()=>{
    console.log(`server listened at port ${PORT}`);
})