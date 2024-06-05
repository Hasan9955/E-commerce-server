import { model } from 'mongoose';
import { Schema } from 'mongoose';
import orderTypes from './order.interface';


const orderSchema = new Schema<orderTypes>({
    email: {type: String, required: true},
    productId: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true, min: [1, 'Quantity should be minimum 1.']}
})


const OrderModel = model('order', orderSchema)
export default OrderModel;