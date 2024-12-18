import http from 'http'
const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.end('<h2>sahil server</h2>');
});
server.listen(port,()=>{
    console.log(`server started at sport ${port}`);
})