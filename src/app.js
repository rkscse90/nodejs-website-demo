const express=require('express')
const hbs=require('hbs')
const mongoose=require('mongoose')
const dotenv=require("dotenv");

const app=express()
dotenv.config();

const routes=require('./routes/main')
const Detail=require('./models/Detail')

//static/css/style.css
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