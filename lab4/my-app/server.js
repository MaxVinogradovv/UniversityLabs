var express=require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/dist/my-app'));
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.sendFile(__dirname+'/dist/my-app/index.html');
})
app.listen(process.env.PORT || 8080);

var Product = require('./ProductModel');
const User = require('./UsersModel');
const Bucket = require('./BucketModel');

app.post('/login', async(req ,res) => {
  const { email, password } = req.query;
  User.find({email, password}, function (err, data) {
    res.send(data);
  });
})

app.get('/getproducts', async(req, res) => {
  Product.find(function (err, data) {
    res.send(data);
  });
})

app.post('/addproduct', async(req, res) => {
  var product = new Product(req.body);
  product.save(function (err, data) {
    if (err) {
      console.log(err.message);
      return res.status(400).send({message: err.message});
    }
    console.log(data);
    res.status(200).send({message: 'product added!'});
  });
})

app.post('/removeproduct', async(req, res) => {
  Product.remove({_id: req.body.id}, function (err, data) {
    res.status(200).send({message: 'remove product'});
  })
});

  app.get('/bucket/items', async (req, res) => {
    const {clientId} = req.query;
    Bucket.find({clientId}, function (err, data) {
      res.send(data);
    });
  })

  app.post('/bucket/items', async (req, res) => {
    var bucketRecord = new Bucket(req.body);
    bucketRecord.save(function (err, data) {
      if (err) {
        console.log(err.message);
        return res.status(400).send({message: err.message});
      }
      console.log(data);
      res.status(200).send({message: 'product added!'});
    });
  })

  app.delete('/bucket/items/:_id', async (req, res) => {
    Bucket.remove({_id: req.params._id}, function (err, data) {
      res.status(200).send({message: 'remove bucket record'});
    })
  })


  console.log('server is run!');
