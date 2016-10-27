var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var bookRouter = require('./routes/bookRoutes')(Book);
app.use('/api/Books', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to the learning API');
});

app.listen(port, function(){
    console.log('Gulp is running my app in PORT '+ port);
});
