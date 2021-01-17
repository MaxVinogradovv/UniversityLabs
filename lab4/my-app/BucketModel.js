var mongoose=require('./mongoose');
var schemaBucket=new mongoose.Schema({
  clientId:{
    type: String,
    require:true,
    unique:true
  },
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
var BucketModel = mongoose.model("bucket",schemaBucket);
module.exports=BucketModel;
