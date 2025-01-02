const logger = (req,res,next)=>{
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}  status: ${res.statusCode} Headers Sent: ${res.headersSent}`
    );
    next();
}
export default logger;
