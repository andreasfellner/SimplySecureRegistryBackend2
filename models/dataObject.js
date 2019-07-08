'use strict';
module.exports = (sequelize, DataTypes) => {
    
    const DataObject = sequelize.define('DataObject', {
        ssro                                        :       DataTypes.STRING,
        ssro_data_object_type                       :       DataTypes.STRING,
        ssro_hash_value                             :       DataTypes.STRING,
        ssro_name                                   :       DataTypes.STRING,
        ssros                                       :       DataTypes.STRING,
        ssru                                        :       DataTypes.STRING
    }, {});

    DataObject.associate = function(models) {
        // associations can be defined here
    };

    return DataObject;
};