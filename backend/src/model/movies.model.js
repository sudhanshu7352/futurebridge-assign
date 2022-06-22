const mongoose =require("mongoose")

const movieSchema = new mongoose.Schema({
   "name":{type:String,required:true},
   "rating":{type:String,required:true},
   "released_date":{type:String,required:true},
},
{
    versionKey:false,
    timestamps:true,
}
)
module.exports =mongoose.model("movies",movieSchema)