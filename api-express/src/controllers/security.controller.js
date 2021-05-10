const securityController = {}

const { restart } = require('nodemon');

const security = require('../models/security');
const user = require('../models/user');

securityController.login = async (req, res) => {
    //console.log(req.body);
    let result = await user.find({email: req.body.email, password: req.body.password});
    //console.log(result);
    if (result.length!=0){
        result = 1;
    } else {
        result = 0;
    }
    res.json({ok:200, result: result});
}

module.exports = securityController;