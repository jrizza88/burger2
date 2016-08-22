var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');
var exphbs = require('express-handlebars');

var SeqBurger = require('./models').SeqBurger;
SeqBurger.sync();

//var mysql = require('mysql');
var app = express();
app.use('/static', express.static('public/assets'));
var PORT = process.env.PORT || 4040;

//================================================================
//MIDDLEWARE
//================================================================

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// use public folder for all the files that the user can see
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    SeqBurger.findAll({}).then(function(data) {
        // console.log(data);
        res.render('index', {
            burgers: data  //refers to the burgers in index.handlebars
        })
    }).catch(function(err) {
        if (err) {
            throw err;
        }
    })
});

app.post('/create', function(req, res) {
    SeqBurger.create({
        name: req.body.name,
        devoured: false
    }).then(function(sq_response) {
        // console.log(sq_response);
        res.redirect('/')
    }).catch(function(err) {
        throw err;
    })

});

app.put('/update', function(req, res) {
    console.log(req.body.id)

    SeqBurger.findOne({
        where: {
            id: req.body.id,
        }
    }).then(function updateSeqBurger(sq_burger) {
        console.log(sq_burger);
        sq_burger.update({
            devoured: true
        }).then(function(whatever) {
            res.redirect('/');
        });
    });
});

app.delete('/delete', function(req,res){
    SeqBurger.findOne({
        where: {
            id: req.body.id,
        }
    }).then(function deleteBurger(del_burger){
        console.log(del_burger);
        del_burger.destroy({
            devoured:true
        }).then(function(another_arg){
            res.redirect('/');
        });
    });
});

app.listen(PORT, function () {
	console.log('Listening on port: ' + PORT);
});
