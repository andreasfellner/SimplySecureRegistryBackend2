'use strict';

module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    ssra                : DataTypes.STRING,
    ssra_name           : DataTypes.STRING,
    ssru                : DataTypes.STRING
  }, {});

  Application.associate = function (models) {
    // associations can be defined here
  };
  return Application;
};
