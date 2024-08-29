import express from "express"
import listProductController from "../controllers/product/listProductController.js"
import createProductController from "../controllers/product/createProductController.js"
import editProductController from "../controllers/product/editProductController.js"
import photoEditProductController from "../controllers/product/photoEditProductController.js"
import deleteProductController from "../controllers/product/deleteProductController.js"
const product = express.Router()

product.get('/', listProductController)
product.post('/', createProductController)
product.put('/', editProductController)
product.patch('/', photoEditProductController)
product.delete('/', deleteProductController)

export default product