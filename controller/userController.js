'use strict';
const jwt = require('jsonwebtoken');
const User = require('../models').User;
const { ReE, ReS } = require('../services/util.service');

const signUp = async function (req, res) {

    let userInfo = req.body;

    console.log(userInfo);
    if (!req.body.full_name || !req.body.email || !req.body.password) {
        res.status(400).send({ msg: 'Please pass username and password.' })
    }
    else {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((user) => {

                if (!user) {
                    User.create(userInfo)
                        .then((user) => {
                            return ReS(res, { user: user });
                        }
                        )
                        .catch((error) => {
                            console.log(error);
                            return ReE(res, error);
                        });
                }
                else {
                    return ReE(res, { message: 'User already exist.' });
                }

            })
            .catch((error) => {
                return ReE(res, error);
            });
    }
}
module.exports.signUp = signUp;

const signIn = async function (req, res) {

    User
        .findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user) => {
            if (!user) {
                return ReE(res, { message: 'This user is not registered.' });
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', { expiresIn: 86400 * 30 });
                    jwt.verify(token, 'nodeauthsecret', function (err, data) {
                        console.log(err, data);
                    })

                    return ReS(res, { user: user, token: 'JWT ' + token });

                } else {
                    return ReE(res, { message: 'Authentication failed. Wrong password.' });
                }
            })
        })
        .catch((error) => {
            return ReE(res, { message: error });
        });
}
module.exports.signIn = signIn;


