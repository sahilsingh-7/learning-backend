import http from 'http';
import url from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises';

const port = process.env.PORT;
const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);

const server = http.createServer(async (req,res)=>{
    try{
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname,'public','home.html');
            }
            else if(req.url ==='/about'){
                filepath = path.join(__dirname,'public','about.html');
            }
            else throw new Error('Not found');

            const data = await fs.readFile(filepath);
            res.writeHead(200,{'content-type':'text/html'});
            res.end(data);
        }
        else throw new Error('invalid request');

    }
    catch(e){
        res.writeHead(404,{'content-type':'text/plain'});
        res.end('Bad request');
    }
});

server.listen(port,()=>{
    console.log(`server started at port ${port}`);
});