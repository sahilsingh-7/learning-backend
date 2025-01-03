import express from 'express';
import carposts from './routes/carposts.js';
import errorHandler from './middleware/error.js'
import logger from './middleware/logger.js';

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(logger);
app.use('',carposts);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server listen at port ${port}...`)
});