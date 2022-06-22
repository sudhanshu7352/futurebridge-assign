const express =require("express")
const cors =require("cors")
const connect =require("./configs/db")

const app =express()
app.use(cors())
app.use(express.json())
const movieController =require("./controllers/movies.controller")

app.use("/movies",movieController)



const port =process.env.PORT || 3011

app.listen(port,async()=>{
    try{
       await connect()
       console.log(`running on port ${port}`)
    }
    catch(e){
      console.log(e.message)
    }
})