const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY
exports.signToken=async (user)=>{
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    };
    const token = await jwt.sign(payload,secretKey, { expiresIn: '1h' });
    return token;
}