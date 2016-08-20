
//Inside the burgers_controller.js file, import the following:

//express
//method-override
//body-parser

var express = require('express');
//var methodOverride = require('method-override');
//var bodyParser = require('body-parser');
var router = express.Router();
var burger = require('./../models/burger');
var myConnection = require('../config/connection');


//// create get request to default request from client when page loads
//  router.get('/', function(req, res){
//    	burger.selectAll(function(data){
//      	console.log(data);
//        var readyList = [];
//        var devouredList = [];
//        // push burgers in respective list for ready to be devoured or devoured already
//            for (var i=0; i <data.length; i++) {
//                if (data[i].devoured) {
//                  devouredList.push(data[i]);
//                } else {
//                  readyList.push(data[i]);
//                }
//            };//
//

//        res.render('index', {
//          burgersReady: readyList,
//          burgersGone: devouredList
//        });//

//      });
//  });
//// pulling the insertOne function from ORM and then calling it
//router.post('/add', function(req, res){
//  var eatBurger = request.body.makeBurger;
//    // var eatBurger=request.body.burg  (in case the other one doesn't work)
//    burger.insertOne(eatBurger);
//    console.log('eat burger is working?', eatBurger);
//    res.redirect('/');
//});
  // This wouldn't make sense to use unless I want to put all burger requests in separate pages
//app.get('/burgers/:id', function(req, res){
//  id = req.params.id;
//  connection.query('SELECT * FROM burgers WHERE ?', {id: id}, function (err, data){
//    if (err) {
//      throw err;
//    }
//    console.log('You selected the: ', data);
//  })
//});


  // create put(update) request for updating
//router.put('/burgers/:id/update', function (req, res){
//router.put('/update', function (req, res){
//  var munchedBurger=req.body.burgerUpdate;
//  console.log("munched burger work:", munchedBurger);
//  burger.updateOne(munchedBurger);
//    res.redirect('/');
//  });
//  // create another put(update) request for devouring the burgers..//

////Create the router for the app, and export the router at the end of your file.
//module.exports = router;
