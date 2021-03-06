'use strict';

var bcrypt = require('bcrypt-nodejs');
const { TE, to } = require('../services/util.service');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.beforeSave((user, options) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  
  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
