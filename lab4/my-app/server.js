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

app.get('/getproducts', async(req, res) => {
  return res.status(200).send([{name: 1, description: 2, price: 3}])
})

app.post('/addproduct', async(req, res) => {

  return res.status(200).send([{name: 1, description: 2, price: 3}])
})

app.post('/removeproduct', async(req, res) => {
  return res.status(200).send({message: 'ok'})
})

console.log('server is run!');
