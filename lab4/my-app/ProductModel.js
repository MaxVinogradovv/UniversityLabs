var mongoose=require('./mongoose');
var schemaProduct=new mongoose.Schema({
  name:{
    type: String,
    require:true,
    unique:true
  },
  description:{
    type: String,
    require:true,
  },
  price: {
    type: Number,
    require:true,
  }
})
var ProductModel = mongoose.model("products",schemaProduct);
module.exports=ProductModel;
