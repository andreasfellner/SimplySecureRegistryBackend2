const express = require('express');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);

const SourceKeyController = require('../controller/sourceKeyController');
const DataObjectController = require('../controller/dataObjectController');
const UserController = require('../controller/userController');

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);

router.get('/getSourceKeys', passport.authenticate('jwt', { session: false}), SourceKeyController.getSourceKeys);
router.post('/addSourceKey', passport.authenticate('jwt', { session: false}), SourceKeyController.addSourceKey);

router.get('/getDataObjects', passport.authenticate('jwt', { session: false}), DataObjectController.getDataObjects);
router.post('/addDataObject', passport.authenticate('jwt', { session: false}), DataObjectController.addDataObject);

module.exports = router;
