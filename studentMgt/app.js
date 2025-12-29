const express = require('express');
const db = require('./config/db_config')
const authRoutes = require('./routes/authRoutes')
const app = express()
const PORT = 3000
app.use(express.json())
app.get('/check',(req,res)=>{
    res.send('Server is on and running..')
})
app.use("/api/auth",authRoutes)
app.listen(PORT,()=>{
    console.log("server running on port :",PORT)
})