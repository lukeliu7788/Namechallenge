const mongoose=require('mongoose');
const {Schema}=mongoose;


const challengeSchema=new Schema({
    FullName:String,
    FirstName:String,
    LastName:String
});


mongoose.model('challengeUsers',challengeSchema);