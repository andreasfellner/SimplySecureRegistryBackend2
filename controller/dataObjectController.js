'use strict';

const { ReE, ReS } = require('../services/util.service');
const DataObject = require('../models').DataObject;

const getDataObjects = async function (req, res) {

    let user = req.user;
    console.log("user", user.email);

    if (user) {
        DataObject.findAll({
                where: {
                    ssru: user.email
                }
            })
            .then(
                (result) =>{
                    //console.log("DataObjects", result);
                    return ReS(res, { result: result });
                }
            )
            .catch(
                (error) => {
                    //console.log("DataObjects Error", error);
                    return ReE(res, error);
                }
            );
    }
    else {
        return ReE(res,  {message: 'Unauthorized.'});
    }
}
module.exports.getDataObjects = getDataObjects;

const addDataObject = async function (req, res) {
    let user, data
    user = req.user;
    data = req.body;

    if (user) {
        DataObject
            .create(data)
            .then(
                (dataObject) => {
                    return ReS(res, { result: dataObject });
                }
            )
            .catch(
                (error) => {
                    //console.log(error);
                    return ReE(res, error);
                }
            );
    } else {

        return ReE(res,  {message: 'Unauthorized.'});
    }
}

module.exports.addDataObject = addDataObject;
