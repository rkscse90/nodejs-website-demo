const mongoose=require('mongoose')
const Contact=mongoose.Schema({
    email:String,
    mobile:String,
    query:String
 
})

 module.exports=mongoose.model('contactTable',Contact) 