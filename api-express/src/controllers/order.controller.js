const orderController = {};

const order = require('../models/order');

orderController.getOrder = async (req,res) => {
    const selectedOrder = await order.findById(req.params.id);
    res.json({ok: true, result: selectedOrder});
};

orderController.getOrders = async (req,res) => {
    const selectedOrders = await order.find({state: req.params.state});
    res.json({ok: true, result: selectedOrders})
};

orderController.generateOrder = async (req,res) => {
    const newOrder = new order(req.body);
    await newOrder.save();
    res.json({ok: true, result: 1});
};

orderController.changeOrderState = async (req,res) => {
    await order.updateOne({_id:req.params.id},{state: req.params.newState});
    res.json({ok:true, result: 1});
};

orderController.updateOrder = async (req,res) => {
    const newOrder = new order(req.body);
    //delete newOrder.id;
    await order.updateOne({_id:req.params.id}, {clientId:newOrder.clientId, productId:newOrder.productId, quantity:newOrder.quantity, orderNumber:newOrder.orderNumber, state:newOrder.state} );
    res.json({ok: true, result:1})
}

module.exports = orderController;