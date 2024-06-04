import { Schema, model } from "mongoose";
import ProductTypes, { inventoryTypes, variantTypes } from "./product.interface";

const variantsSchema = new Schema<variantTypes>({
    type: { type: String, required: true },
    value: { type: String, required: true }
}, { _id: false })

const inventorySchema = new Schema<inventoryTypes>({
    quantity: { type: Number, min: [1, "The minimum value of quantity should be 1."], required: true },
    inStock: { type: Boolean, required: true }
}, { _id: false })


const productSchema = new Schema<ProductTypes>({
    name: { type: String, trim: true, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: {
        type: [variantsSchema], required: true
    },
    inventory: inventorySchema
})


const ProductModel = model("products", productSchema)

export default ProductModel;