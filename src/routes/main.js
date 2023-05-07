const express=require('express')

const routes=express.Router()



routes.get('/getMessage', (req,res)=>{
    res.render('index')
})

routes.get('/getGallery',(req,res)=>{

    res.render('gallery')
})

module.exports=routes
