const express=require('express')
const routes=express.Router()

const Detail=require('../models/Detail')
const Slider=require('../models/Slider')
const Serevice=require('../models/Service')
const Contact=require('../models/Contact')

routes.get('/getMessage', async (req,res)=>{

    const details=await Detail.findOne({'_id':'645869421adaaf87b71950b4'})
    const slider=await Slider.find()
    const service=await Serevice.find()
    //console.log(details)
    res.render('index',{
    detailsView:details,
    sliderView:slider,
    sereviceView:service
})
})

routes.get('/getGallery',async (req,res)=>{

    const details=await Detail.findOne({'_id':'645869421adaaf87b71950b4'})
    const slider=await Slider.find()
    res.render('gallery',{
        detailsView:details,
        sliderView:slider
    })
})

routes.get('/getServices', async (req,res)=>{

    const details=await Detail.findOne({'_id':'645869421adaaf87b71950b4'})
    const slider=await Slider.find()
    const service=await Serevice.find()
    //console.log(details)
    res.render('services',{
    detailsView:details,
    sliderView:slider,
    sereviceView:service
})
})

routes.get('/contactus', async (req,res)=>{

    const details=await Detail.findOne({'_id':'645869421adaaf87b71950b4'})
    const slider=await Slider.find()
    const service=await Serevice.find()
    //console.log(details)
    res.render('contactus',{
    detailsView:details,
    sliderView:slider,
    sereviceView:service
})
})

routes.post('/process-contact-form', async (req,res)=>{

    console.log("Form Submitted")
   

    try{

        const data= await Contact.create(req.body)
        console.log('Body :',req.body)
        
        res.redirect("/app/getMessage")

    }catch(e){

        console.log('Excepotion'+e)

        res.redirect("/app/getMessage")

    }
})


module.exports=routes
