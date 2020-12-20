var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://organizationAdmin:YLTC4F0dShkoIJbI@cluster0.vlxjq.mongodb.net/mydb');
console.log("mongodb connect...")
module.exports=mongoose;
