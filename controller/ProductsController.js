const ProductsModel = require('../model/ProductsModel');

// C===Create 

exports.CreateProduct = async (req, res) => {
    try {
        let reqBody = req.body;
        const createdProducts = await ProductsModel.create(reqBody); // Use create() method to insert a document
        
        res.status(200).json({ status: "Success", data: createdProducts });
    } catch (error) {
        res.status(400).json({ status: "Fail", data: error.message });
    }
};

// R = Read 
exports.ReadProduct = async (req, res) => {
    let Query = {}
    let Projection = "ProductsName ProductsCode Img unitPrice Qty TotalPrice";
    await ProductsModel.find(Query, Projection,(err, data) => {
        if(err){
            res.status(400).json({status : "Fail", data : err})
        }
        else{
            res.status(200).json({status: "Success",data : data})
        }
    })
}

// U = Update ==========

exports.UpdateProduct = async (req, res) => {
    let id = req.params.id;
    let Query = {_id : id}
    let reqBody = req.body;
    const updateProducts = await ProductsModel.updateOne(Query,reqBody)
    if(updateProducts){
        res.status(200).json({
            status : "success",
            message : "Product Update is Successfully"
        })
    }
    else{
        res.status(400).json({
            status : "Failed",
            message : "Product Update is Not Successfully"
        })
    }
}

// D = Delete ======

exports.DeleteProduct = async (req, res) => {
    let id = req.params.id;
    let Query = {_id : id};

    const deleteProduct = await ProductsModel.deleteOne(Query)
    if(deleteProduct){
        res.status(200).json({
            status : "Success",
            message : "Product Delete is Successfully"
        })
    }
    else{
        res.status(400).json({
            status : "Failed",
            message : "Product Delete is Not Successfully"
        })
    }
}