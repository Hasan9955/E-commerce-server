"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_routes_1 = require("./app/Modules/Order/order.routes");
const products_routes_1 = require("./app/Modules/Products/products.routes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// product routes
app.use('/api', products_routes_1.productsRoutes);
//order routes
app.use('/api', order_routes_1.orderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World.');
});
app.all('*', (req, res, next) => {
    const url = req.url;
    const error = new Error(`Route not found: ${url}`);
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    });
});
exports.default = app;
