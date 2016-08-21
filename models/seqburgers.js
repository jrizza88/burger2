'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeqBurgers = sequelize.define('SeqBurgers', {
    name: DataTypes.STRING,
    devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SeqBurgers;
};
//Don't forget to edit the model and initial migration file to make the burger's
//devoured field carry a default value of false
//-- otherwise you might encounter bugs.


//burger_name: DataTypes.STRING,
//devoured: DataTypes.BOOLEAN,
//dt: DataTypes.DATE,
//createdAt: DataTypes.DATE,
//updatedAt: DataTypes.DATE
//}, {
//classMethods: {
//  associate: function(models) {
//    // associations can be defined here
//  }
//}
//});
//return SeqBurgers;
//};
