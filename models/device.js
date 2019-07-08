'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    ssrd:                         DataTypes.STRING,
    ssrd_name:                    DataTypes.STRING,
    ssru:                         DataTypes.STRING
  }, {});
  Device.associate = function (models) {
    // associations can be defined here
  };
  return Device;
};