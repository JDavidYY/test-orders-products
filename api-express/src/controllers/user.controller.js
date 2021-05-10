const userController = {}

const user = require('../models/user');

userController.saveClient = async (req,res) => {
    const newUser = new user(req.body);
    res.json({ok:true, result:1});
    await newUser.save();
}

userController.getClients = async (req, res) => {
    const users = await user.find();
    res.json(users);
}

module.exports = userController;