import { merge } from "lodash";
import ProductModel from "./products.model"
import ProductTypes from "./product.interface";


const createProducts = async (data: object) => {
    const result = await ProductModel.create(data)
    return result;
}


const getProducts = async () => {
    const result = await ProductModel.find()
    return result;
}

const getAProduct = async (id: string) => {

    // const objectId = new mongoose.Types.ObjectId(id)
    const result = await ProductModel.findById(id)
    return result;
}

const updateAProduct = async (id: string, data: ProductTypes) => {
    const product = await ProductModel.findById(id)

    if (!product) {
        throw new Error('Invalid id given.')
    }
    data.inventory.quantity > 0 ? product.inventory.inStock = true : product.inventory.inStock = false
   
    const mergeProduct = merge(product, data)
    const result = await ProductModel.findByIdAndUpdate(id, mergeProduct, {
        new: true,
        runValidators: true
    })
    return result;
}

const productDelete = async (id: string) => {
    const result = await ProductModel.findByIdAndDelete(id)
    return result;
}

const searchProduct = async (searchValue: string) => {
    
    const result = await ProductModel.find({
        name: { $regex: new RegExp(searchValue, 'i') }
    })
    return result;
}


export const productServices = {
    createProducts,
    getProducts,
    getAProduct,
    updateAProduct,
    productDelete,
    searchProduct

}

