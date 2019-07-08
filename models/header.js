'use strict';
module.exports = (sequelize, DataTypes) => {
  const Header = sequelize.define('Header', {
    first_name                  :   DataTypes.STRING,
    middle_name                 :   DataTypes.STRING,
    last_name                   :   DataTypes.STRING,
    company                     :   DataTypes.STRING,
    connection                  :   DataTypes.STRING,
    birthday                    :   DataTypes.DATE,
    user_id                     :   DataTypes.FLOAT,
    simple_secure_active        :   DataTypes.STRING
    
  }, {});
  Header.associate = function(models) {
    // associations can be defined here
  };
  return Header;
};