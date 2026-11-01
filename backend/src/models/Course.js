const mongoose = require('mongoose');
const question = new mongoose.Schema({prompt:{type:String,required:true},options:[{type:String}],correctIndex:{type:Number,required:true},explanation:String});
const lesson = new mongoose.Schema({title:{type:String,required:true},content:String,resourceUrl:String,durationMinutes:{type:Number,default:10}});
const moduleSchema = new mongoose.Schema({title:{type:String,required:true},description:String,lessons:[lesson],quiz:[question]});
module.exports = mongoose.model('Course', new mongoose.Schema({
 title:{type:String,required:true},description:{type:String,required:true},category:{type:String,required:true},
 level:{type:String,enum:['Beginner','Intermediate','Advanced'],default:'Beginner'},duration:String,objectives:[String],
 modules:[moduleSchema],finalQuiz:[question],finalMarks:{type:Number,enum:[30,50],default:30},
 status:{type:String,enum:['draft','published'],default:'draft'},publishedAt:Date,createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{timestamps:true}));
