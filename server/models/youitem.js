'use strict';
module.exports = (sequelize, DataTypes) => {
  var YouItem = sequelize.define('YouItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  YouItem.associate = function(models) {
    // associations can be defined here
    YouItem.belongsTo(models.You, {
      foreignKey: 'youId',
      onDelete: 'CASCADE',
    });
  };
  return YouItem;
};