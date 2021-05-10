const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost/test-orders-products-DB", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.error(err));