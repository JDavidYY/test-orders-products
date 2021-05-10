const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    category: {type: String, required: true},
    Description: {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', productSchema);