import { error } from 'console';
import http from 'http';
const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    if(req.method === 'GET'){
        try{
            if(req.url === '/'){
                res.writeHead(200,{'content-type':'text/html'});
                res.end('<h1>homepage</h1>');
            }
            else if(req.url === '/about'){
                res.writeHead(200,{'content-type':'text/html'});
                res.end('<h1>About Page</h1>');
            }
            else{
                throw new Error('not found');
            }
            
        }
        catch(e){
            res.writeHead(404,{'content-type':'text/plain'});
            res.end('not found');
        }
    }
    else{
        res.writeHead(500,{'content-type':'text/plain'});
        res.end('server error');     
    }
});

server.listen(port,()=>{
    console.log(`server listen at port ${port}`);
})