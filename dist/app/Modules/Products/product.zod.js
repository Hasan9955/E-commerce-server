"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodTypes = void 0;
const zod_1 = __importDefault(require("zod"));
const variantZodSchema = zod_1.default.object({
    type: zod_1.default.string(),
    value: zod_1.default.string()
});
const inventoryZodSchema = zod_1.default.object({
    quantity: zod_1.default.number().min(0, "The value of quantity should be a positive number."),
    inStock: zod_1.default.boolean().default(true)
});
const productZodSchema = zod_1.default.object({
    name: zod_1.default.string().trim(),
    description: zod_1.default.string(),
    price: zod_1.default.number(),
    category: zod_1.default.string(),
    tags: zod_1.default.array(zod_1.default.string()),
    variants: zod_1.default.array(variantZodSchema),
    inventory: inventoryZodSchema
});
exports.zodTypes = {
    productZodSchema,
    variantZodSchema,
    inventoryZodSchema
};
