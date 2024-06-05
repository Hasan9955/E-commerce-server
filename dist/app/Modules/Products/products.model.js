"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
}, { _id: false });
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, min: [1, "The minimum value of quantity should be 1."], required: true },
    inStock: { type: Boolean, default: true }
}, { _id: false });
const productSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: {
        type: [variantsSchema], required: true
    },
    inventory: inventorySchema
});
const ProductModel = (0, mongoose_1.model)("products", productSchema);
exports.default = ProductModel;
