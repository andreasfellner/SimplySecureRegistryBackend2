'use strict';
module.exports = (sequelize, DataTypes) => {
  const SourceKey = sequelize.define('SourceKey', {
    
    ssra                    :   DataTypes.STRING,
    ssra_name               :   DataTypes.STRING,
    ssrd                    :   DataTypes.STRING,
    ssrd_name               :   DataTypes.STRING,
    ssru                    :   DataTypes.STRING,
    sssk                    :   DataTypes.STRING
    
  }, {});

  SourceKey.associate = function(models) {
    // associations can be defined here
  };
  return SourceKey;
};