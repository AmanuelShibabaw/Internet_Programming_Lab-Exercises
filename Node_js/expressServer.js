const express = require('express')
const fs= require('fs')
const fileReader = require('./reader')
const app= express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcome to School of Computing")
})
app.get('/osinfo',(req,res)=>{
    res.sendFile(__dirname + '/osinfo.txt')
})
app.post('/appendinfo/:id',(req,res)=>{
    const {info} = req.body
    const id = req.params.id
    if(!info){
        return res.status(400).send("info is empty")
    }
    fs.appendFile('osinfo.txt',`${info}\n`,(err)=>{
        if(err){
            return res.status(500).send("error during appending info and your id is :"+ id || '')
        }
        res.send("info appended succesfully and your id is :"+ id || '')
    })
})
app.listen(3000,()=>{
    console.log("Express server running at port 3000")
})