const mongoose=require('mongoose')

//format database
const covidSchema=new mongoose.Schema({
    fname:{type:String},
    add:{type:String},
    phNo:{type:String},
    state:{type:String},
    phNo:{type:String},
    country:{type:String},
    amount:{type:String}
   
})

module.exports=mongoose.model('Covid',covidSchema)
