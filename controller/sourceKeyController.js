'use strict';

const { ReE, ReS } = require('../services/util.service');
const SourceKey = require('../models').SourceKey;

const getSourceKeys = async function (req, res) {

    let user = req.user;
    console.log("user", user.email);
  
    if (user) {
        SourceKey.findAll({
                where: {
                    ssru: user.email
                }
            })
            .then(
                (result) => {
                    //console.log("SourceKeys", result);
                    return ReS(res, { result: result });
                }
            )
            .catch(
                (error) => {
                    //console.log("SourceKeys Error", error);
                    return ReE(res, error);
                }
            );
    }
    else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
}
module.exports.getSourceKeys = getSourceKeys;


const addSourceKey = async function (req, res) {
    let user, data
    user = req.user;
    data = req.body;

    if (user) {
        SourceKey
            .create(data)
            .then(
                (sourceKey) => {
                    return ReS(res, { result: sourceKey });
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                    return ReE(res, error);
                }
            );
    } else {
        return ReE(res, { message: 'Unauthorized.' });
    }
}

module.exports.addSourceKey = addSourceKey;
