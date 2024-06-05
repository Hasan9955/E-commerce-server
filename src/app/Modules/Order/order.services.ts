import OrderModel from "./order.model"

const createOrder = async (data: object) =>{
    const result = await OrderModel.create(data)
    return result;
}

const getAllOrders = async () =>{
    const result = await OrderModel.find()
    return result;
}

const searchOrder = async (email: string) =>{
    const result = await OrderModel.find({email})
    return result;
}

export const orderServices = {
    createOrder,
    getAllOrders,
    searchOrder
}