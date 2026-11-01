const jwt=require('jsonwebtoken'); const User=require('../models/User');
async function auth(req,res,next){try{const h=req.headers.authorization||'';const token=h.startsWith('Bearer ')?h.slice(7):null;if(!token)return res.status(401).json({message:'Login required.'});const p=jwt.verify(token,process.env.JWT_SECRET);const user=await User.findById(p.id).select('-passwordHash');if(!user)return res.status(401).json({message:'Account not found.'});req.user=user;next();}catch(e){res.status(401).json({message:'Invalid or expired session.'});}}
const role=r=>(req,res,next)=>req.user?.role===r?next():res.status(403).json({message:'Access denied.'});
module.exports={auth,role};
