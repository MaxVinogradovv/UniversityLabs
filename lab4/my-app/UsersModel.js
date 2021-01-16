var mongoose=require('./mongoose');
var schemaUser=new mongoose.Schema({
  name:{
    type: String,
    require:true,
    unique:true
  },
  email: {
    type: String,
    require:true,
    unique:true
  },
  password: {
    type: String,
    require:true,
    unique:true
  },
 isAdmin: Boolean
})
var ProductModel = mongoose.model("users",schemaUser);
module.exports=ProductModel;
