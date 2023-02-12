const express=require("express")
const app=express()
const cors=require('cors')
const path=require('path');
require("./conn/conn")
const port=process.env.PORT || 8000
const router=require("./routes/ro");

const staticpath=path.join(__dirname,"/grocery/build")

app.use(express.static(staticpath));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server on ${port} has been started.`)
})