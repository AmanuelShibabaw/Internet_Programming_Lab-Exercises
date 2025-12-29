const db = require("../config/db_config")
const bcrypt=require('bcrypt')
exports.Register=async(username, email, password, role)=>{
if (!username || !email || !password || !role) {
throw { status: 400, message: 'username, email, password, and role are required.'} ;
}
const [existingUsers] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
if (existingUsers.length > 0)
return { status: 409, message: 'Email already registered.' };
const hashedPassword = await bcrypt.hash (password, 10);

const [result] = await db.query(
    'INSERT INTO users (username, email, password, role, status) VALUES (?, ?, ?, ?, ?)',
     [username, email, hashedPassword, role || "student",role==="admin" ? "active" : "pending",]);
     console.log("user registered")
     return({message:"user registered",username,email,role,status:role==="admin" ? "active" : "pending"});
} 

exports.Login=async(email,password)=>{
    try {
        
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (user.length === 0) {
        return { status: 404, message: 'User not found.' };
    }
    const isPasswordMatch = await bcrypt.compare(password,user[0].password)
    if (!isPasswordMatch) {
        return { status: 401, message: 'Invalid password.' };
    }
    return {message:"Login successful",user:{id:user[0].id,username:user[0].username,email:user[0].email,role:user[0].role,status:user[0].status}};

    } catch (error) {
     console.log("error :",error)   
    }}