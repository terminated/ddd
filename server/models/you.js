'use strict';
module.exports = (sequelize, DataTypes) => {
  var You = sequelize.define('You', {
    title: DataTypes.STRING
  }, {});
  You.associate = function(models) {
    // associations can be defined here
    You.hasMany(models.TodoItem, {
      foreignKey: 'youId',
      as: 'youItems',
    });
  };
  return You;
};