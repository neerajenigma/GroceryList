const express=require("express");
const router=new express.Router();
const textr=require("../models/model");

router.get("/textr/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        // console.log(_id)
        const d=await textr.findById(_id);
        res.send(d);
    }
    catch(err){
        res.status(401).send(err)
    }
})

router.get("/textr",async(req,res)=>{
    try{
        // console.log("full data req")
        const d=await textr.find();
        res.send(d);
    }
    catch(err){
        res.status(401).send(err)
    }
})

router.delete("/textr/all",async(req,res)=>{
    try{
        // console.log("clear all");
        const d=await textr.remove({});
        res.send(d);
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.delete("/textr/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        // console.log(_id);
        const d=await textr.findByIdAndDelete(_id);
        res.send(d);
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.patch("/textr/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const d=await textr.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(d);
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.post("/textr",async (req,res)=>{
    try{
        // console.log(req.body)
        const user= await new textr(req.body);
        const ress=await user.save();
        res.send(ress)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports=router;