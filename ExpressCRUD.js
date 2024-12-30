import express from 'express';
const app = express();
app.use(express.json());

let carlist =[];
let id =1;
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.status(200).send(carlist);
})


app.post('/',(req,res)=>{
    const {name,price} = req.body
    if(!name || !price) return res.status(404).send('name and price is required');

    const car = {"id":id++,name,price};
    console.log(car);

    if(!car) return res.status(404).send('404 not found');
    carlist.push(car);
    res.status(200).send('post the data');
})


app.get('/:ID',(req,res)=>{
    const reqCar = carlist.find((t)=>t.id === parseInt(req.params.ID));
    if(!reqCar) return res.status(404).send("404 Can't find that car");
    console.log(typeof reqCar);
    res.status(200).send(reqCar);
})


app.put('/:ID',(req,res)=>{
    const reqCar = carlist.find((t)=>t.id === parseInt(req.params.ID));
    if(!reqCar) return res.status(404).send("404 Can't find that car");
    reqCar.name = req.body.name;
    reqCar.price = req.body.price;
    
    res.status(200).send(reqCar);
})


app.delete('/:ID',(req,res)=>{
    carlist = carlist.filter((t)=> t.id !== parseInt(req.params.ID));
    res.status(200).send('OK');
})

app.listen(port,()=>{
    console.log(`server listen at port ${port}...`)
});