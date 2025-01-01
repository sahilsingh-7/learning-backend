const errorHandler = (err,req,res,next)=>{
    if(err.status){
        res.status(err.status).send({msg:err.message})
    }
    else{
        res.status(500).send({msg:err.message})
    }
};
export default errorHandler;