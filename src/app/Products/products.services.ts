import ProductModel from "./products.model"



const createProducts = async (data: object) => {
    const result = await ProductModel.create(data)
    return result;
}


const getProducts = async () => {
    const result = await ProductModel.find()
    return result;
}




export const productServices = {
    createProducts,
    getProducts

}

