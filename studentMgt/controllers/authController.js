const authService = require('../services/authServices')
const bcrypt=require('bcrypt')
exports.Register= async(req,res)=>{
    try {
        const {username,email,password,role}=req.body;
        const result=await authService.Register(username,email,password,role)
        res.status(201).json(result);
    } catch (error) {
        console.log("error occured:",error)
    }
}
exports.Login= async(req,res)=>{
    try {
        const {email,password}=req.body;
        const result=await authService.Login(email,password)
        res.status(200).json(result);
    } catch (error) {
        
    }
}