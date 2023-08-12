const express =require('express');
const ProductController = require('../controller/ProductsController');
const router = express.Router();

// API Routing End point ======

// C = Create 
router.post('/CreateProduct', ProductController.CreateProduct)

// R = Read 

router.get('/ReadProduct', ProductController.ReadProduct)

// U = Update 

router.put('/UpdateProduct/:id', ProductController.UpdateProduct)

// D = Delete 

router.delete('/DeleteProduct/:id', ProductController.DeleteProduct)

module.exports =router;