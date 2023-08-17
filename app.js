const express=require('express')
const app=express();


app.get('/books',(req,res)=>{
    res.json({message:"nodeAPI with mongoDB"})
})

//routes
app.listen(3000,()=>{
    console.log("app listening on port 3000")
})