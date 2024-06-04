import express from 'express' 
import { productController } from './products.controller';

const router = express.Router();

// create products
router.post('/products', productController.createProducts)

router.get('/products', productController.getAllProducts)

router.get('/products/:id', productController.getAProduct)

router.put('/products/:id', productController.updateAProduct)

router.delete('/products/:id', productController.productDelete)


export const productsRoutes = router

