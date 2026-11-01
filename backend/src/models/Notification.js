const mongoose=require('mongoose');
module.exports=mongoose.model('Notification',new mongoose.Schema({recipient:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},title:String,message:String,link:String,readAt:Date},{timestamps:true}));
