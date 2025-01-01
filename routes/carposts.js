import express from 'express';

const router = express.Router();


let carlist =[];
let id =1;


router.get('/',(req,res)=>{
    res.status(200).send(carlist);
})


router.post('/',(req,res,next)=>{
    const {name,price} = req.body
    if(!name || !price) {
        const error = new Error('Name and price of car is required');
        error.status = 404;
        return next(error);
    }

    const car = {"id":id++,name,price};
    console.log(car);

    carlist.push(car);
    res.status(200).send('post the data');
})


router.get('/:ID',(req,res,next)=>{
    const reqCar = carlist.find((t)=>t.id === parseInt(req.params.ID));
    if(!reqCar){
        const error = new Error('ID not found');
        error.status = 404;
        return next(error);
    }

    res.status(200).send(reqCar);
})


router.put('/:ID',(req,res,next)=>{
    const reqCar = carlist.find((t)=>t.id === parseInt(req.params.ID));
    if(!reqCar) {
        const error = new Error('ID not found');
        error.status = 404;
        return next(error);
    }
    reqCar.name = req.body.name;
    reqCar.price = req.body.price;
    
    res.status(200).send(reqCar);
})


router.delete('/:ID',(req,res,next)=>{
    carlist = carlist.filter((t)=> t.id !== parseInt(req.params.ID));
    res.status(200).send('OK');
})

export default router;
