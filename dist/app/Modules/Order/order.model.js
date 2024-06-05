"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const products_model_1 = __importDefault(require("../Products/products.model"));
const orderSchema = new mongoose_2.Schema({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: [1, 'Quantity should be minimum 1.'] }
});
//create a static method
orderSchema.statics.isProductExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield products_model_1.default.findById(id);
        if (!product) {
            throw new Error('Product ID is not exists.');
        }
        else {
            return product.inventory.inStock;
        }
    });
};
orderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield products_model_1.default.findById(this.productId);
        if (product) {
            const quantity = product.inventory.quantity - this.quantity;
            if (quantity < 0) {
                throw new Error(`Insufficient quantity available in inventory. We have ${product.inventory.quantity} items in stock.`);
            }
            yield products_model_1.default.findByIdAndUpdate(this.productId, {
                $set: {
                    "inventory.quantity": quantity,
                    "inventory.inStock": quantity <= 0 ? false : true
                }
            });
        }
        else {
            throw new Error(`Product with ID ${this.productId} not found.`);
        }
        next();
    });
});
const OrderModel = (0, mongoose_1.model)('order', orderSchema);
exports.default = OrderModel;
