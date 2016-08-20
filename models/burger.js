//import orm.js into burger.js
var orm = require('./../config/orm');

//Also inside burger.js, create the code that will call the ORM functions using
//burger specific input for the ORM.

var burger = {
  all: orm.selectAll,
  create: orm.insertOne,
  update: orm.updateOne

};

module.exports = burger;

//var burger = {
//  selectAll: function (showBurger){
//      orm.selectAll(function(res){
//        showBurger(res);
//      });
//  },
//  insertBurger: function (burger){
//    orm.insertOne(burger);
//  },
//  updateBurger: function(burger){
//    orm.updateOne(burger);
//  }
//};
//  module.exports = burger;



// formally (theBurger)
// SIDES = {
//all: ORM.selectAll("sides"),
//create: ORM.insertOne,
//update: ORM.updateOne
//}

// BURGER = {
//all: ORM.selectAll("burger"),
//create: ORM.insertOne,
//update: ORM.updateOne
//}

//Export at the end of the burger.js file.
