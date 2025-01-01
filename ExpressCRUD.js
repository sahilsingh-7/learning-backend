import express from 'express';
import carposts from './routes/carposts.js';
import errorHandler from './middleware/error.js'

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('',carposts);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server listen at port ${port}...`)
});