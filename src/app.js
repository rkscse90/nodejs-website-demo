const express=require('express')
const hbs=require('hbs')

const app=express()

const routes=require('./routes/main')
app.use('/app',routes)

//(template engine)
app.set('view engine','hbs')
app.set('views','views')

app.listen(process.env.PORT | 4567,()=>{
    console.log("Server started at PORT: 4567")
})