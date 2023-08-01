var mongoose = require('mongoose');

// create an schema
var productSchema = new mongoose.Schema({
    productid:Number,
    title:String,
    size:String,
    price:Number,
    discounterprice:Number
});


module.exports = mongoose.model("Product", productSchema);
