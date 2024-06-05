"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const orderSchema = new mongoose_2.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: [1, 'Quantity should be minimum 1.'] }
});
const OrderModel = (0, mongoose_1.model)('order', orderSchema);
exports.default = OrderModel;
