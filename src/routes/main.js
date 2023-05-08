const express=require('express')
const routes=express.Router()

const Detail=require('../models/Detail')

const details=Detail.findOne({'_id':'645869421adaaf87b71950b4'})

routes.get('/getMessage', (req,res)=>{
    res.render('index')
})

routes.get('/getGallery',(req,res)=>{

    res.render('gallery')
})

module.exports=routes
