const express=require('express')
const hbs=require('hbs')
const mongoose=require('mongoose')
const dotenv=require("dotenv");
const bodyParser=require('body-parser')

const app=express()
dotenv.config();

const routes=require('./routes/main')
const Detail=require('./models/Detail')
const Slider=require('./models/Slider')
const Service=require('./models/Service')

//static/css/style.css
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static',express.static('public'))

app.use('/app',routes)

//(template engine)
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials('views/partials')

//DB Connection
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true }
  ).then(()=>{
    console.log('DB Successfully Connected')

    /*
    Service.create([
      {
        icon:'fas fa-won-sign',
        title:'Provide best Courses',
        description:'We offer best courses in market for learning and placements..!',
        linkText:'Check',
        link:'#1!'
      },
      {
        icon:'fas fa-wifi',
        title:'Website Design',
        description:'Website Design with cost effective price',
        linkText:'Check',
        link:'#2!'
      },
      {
        icon:'fas fa-won-sign',
        title:'Provide best Courses',
        description:'We offer best courses in market for learning and placements..!',
        linkText:'Check',
        link:'#3!'
      },
    ])

    */

/*
    Slider.create([
      {
        title:'What is java ?',
        subTitle:'Java is the most popular lanmguage',
        imageUrl:'/static/images/pic1.jpg',
        class:'active'
      },
      {
        title:'What is Nodejs ?',
        subTitle:'Nodejs  is the awesome lanmguage',
        imageUrl:'/static/images/pic2.jpg',
        class:''
      },
      {
        title:'What is Python ?',
        subTitle:'Python is future',
        imageUrl:'/static/images/pic3.jpg',
        class:''
      }
  
  ])
*/

  /*  Detail.create({
      brandName:'Arth Tech Solution',
      brandIconUrl:'http://localhost:4567/static/images/Logo.jpg',
      links: [
        {
          label:"Home",
          url:"/"
        },
        {
          label:"Serevices",
          url:"/services"
        },
        {
          label:"Gallery",
          url:"/gallery"
        },
        {
          label:"About",
          url:"/about"
        },
        {
          label:"Contact Us",
          url:"/contactus"
        },
      ]
    })*/
  })
  .catch((err)=>{
    console.error('Failed to connect->'+err)
  });
  

app.listen(process.env.PORT | 4567,()=>{
    console.log("Server started at PORT: 4567")
})