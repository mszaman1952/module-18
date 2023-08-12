const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
    {
    ProductsName : {type :String},
    ProductsCode : {type : String},
    Img : {type : String},
    unitPrice : {type :String},
    Qty : {type : String},
    TotalPrice : {type : String},
    CreatedDate : {type : Date, default:Date.now()}
},
{versionKey : false, timestamps : true}
)

const ProductsModel = mongoose.model("products", DataSchema);
module.exports = ProductsModel;
