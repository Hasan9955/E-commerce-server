"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
// create products
router.post('/products', products_controller_1.productController.createProducts);
router.get('/products', products_controller_1.productController.getAllProducts);
router.get('/products/:id', products_controller_1.productController.getAProduct);
router.put('/products/:id', products_controller_1.productController.updateAProduct);
router.delete('/products/:id', products_controller_1.productController.productDelete);
exports.productsRoutes = router;
