'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeqBurger = sequelize.define('SeqBurger', {
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
  return SeqBurger;
};

//Export at the end of the burger.js file.
