var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var sequelize = require('sequelize');
var exphbs = require('express-handlebars');

var SeqBurgers = require('./models').SeqBurgers;
SeqBurgers.sync();

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


app.get('/', function(req,res){
	myConnection.query('SELECT * FROM burgers', function(err, data){
		if(err) throw error
			console.log(data);
			res.render('index', {
				burgers:data
		})
	})
});

app.post('/create', function(req,res){
	myConnection.query('INSERT INTO burgers SET ?', {
		burger_name: req.body.burger_name,
		devoured: false
	}, function(err, response){
		if(err) throw err;
		res.redirect('/')
	})
	});



app.put('/update', function(req,res){
	myConnection.query('UPDATE burgers SET ? WHERE ?', [{devoured:true}, {id:req.body.id}], function(err, response){
		if(err)throw err;
		res.redirect('/');

	});
});

app.delete('/delete', function(req,res){
	myConnection.query('DELETE FROM burgers WHERE devoured = 1', [{devoured:true}, {id:req.body.id}], function(err, response){
		if(err)throw err;
		res.redirect('/');

	});
});


app.listen(PORT, function () {
	console.log('Listening on port: ' + PORT);
});
