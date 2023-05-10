const express=require('express')
const routes=express.Router()

const Detail=require('../models/Detail')

routes.get('/getMessage', async (req,res)=>{

    const details=await Detail.findOne({'_id':'645869421adaaf87b71950b4'})
    console.log(details)
    res.render('index',{detailsView:details})
})

routes.get('/getGallery',async (req,res)=>{

    const details=await Detail.findOne({'_id':'645869421adaaf87b71950b4'})
    res.render('gallery',{detailsView:details})
})

module.exports=routes
