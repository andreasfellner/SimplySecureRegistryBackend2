'use strict';
module.exports = (sequelize, DataTypes) => {
    
    const Info = sequelize.define('Info', {
        email                              :       DataTypes.STRING,
        contact_id                         :       DataTypes.FLOAT,
        street1                            :       DataTypes.STRING,
        street2                            :       DataTypes.STRING,
        city                               :       DataTypes.STRING,
        zip_code                           :       DataTypes.STRING,
        phone_number                       :       DataTypes.STRING,
        address_type                       :       DataTypes.STRING,
        label_type                         :       DataTypes.STRING,
        sensitivity                        :       DataTypes.STRING,
        country                            :       DataTypes.STRING
    }, {});

    Info.associate = function(models) {
        // associations can be defined here
    };

    return Info;
};