import orderTypes from "./order.interface";
import OrderModel from "./order.model"

const createOrder = async (data: orderTypes) => {
    const id = data.productId
    const product = await OrderModel.isProductExists(id)
    if (product) {
        const result = await OrderModel.create(data)
        return result;
    } else {
        throw new Error('Sorry product is not in stock.')
    }

}

const getAllOrders = async () => {
    const result = await OrderModel.find()
    return result;
}

const searchOrder = async (email: string) => {
    const result = await OrderModel.find({ email })
    return result;
}

export const orderServices = {
    createOrder,
    getAllOrders,
    searchOrder
}