const mongoose = require('mongoose');
const moduleState = new mongoose.Schema({moduleId:mongoose.Schema.Types.ObjectId,completedLessons:[mongoose.Schema.Types.ObjectId],quizAttempts:{type:Number,default:0},completed:{type:Boolean,default:false},bestScore:{type:Number,default:0}},{_id:false});
const schema = new mongoose.Schema({student:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},course:{type:mongoose.Schema.Types.ObjectId,ref:'Course',required:true},saved:{type:Boolean,default:false},modules:[moduleState],finalAttempts:{type:Number,default:0},finalPassed:{type:Boolean,default:false},finalScore:{type:Number,default:0},completedAt:Date},{timestamps:true});
schema.index({student:1,course:1},{unique:true});
module.exports = mongoose.model('Enrollment',schema);
