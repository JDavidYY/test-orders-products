const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    clientId: {type: String, required: true},
    productId: {type: String, required: true},
    quantity: {type: Number, required: true},
    orderNumber: {type: String, required: true},
    state: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports = orderSchema;

