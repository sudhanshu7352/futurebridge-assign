const express =require("express")

const Movies =require("../model/movies.model");

const router =express.Router()

router.post("",async (req,res)=>{
    try{
        const movies =await Movies.create(req.body);
        return res.status(200).send(movies)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})

router.get("",async (req,res)=>{
    try{
        const movies =await Movies.find().lean().exec()

        return res.status(200).send(movies)
    }
    catch(error){
        return res.status(500).send(error.message)
    }
})
module.exports =router