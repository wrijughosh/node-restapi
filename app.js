var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 5000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res){
        var query = req.query;
        Book.find(query, function(err, books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });

});

bookRouter.route ('/Books/:bookId')
    .get(function(req, res){
        var id = req.params.bookId;

        Book.findById(id, function(err, books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });

});
app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to the learning API');
});

app.listen(port, function(){
    console.log('Gulp is running my app in PORT '+ port);
});
