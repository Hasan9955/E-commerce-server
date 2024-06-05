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
app.use('/', (req, res) => {
    res.send('Hello World.');
});
exports.default = app;
