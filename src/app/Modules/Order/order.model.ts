import { model } from 'mongoose';
import { Schema } from 'mongoose';
import orderTypes, { OrderModelType } from './order.interface';
import ProductTypes from '../Products/product.interface';
import ProductModel from '../Products/products.model';


const orderSchema = new Schema<orderTypes>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: [1, 'Quantity should be minimum 1.'] }
})

//create a static method
orderSchema.statics.isProductExists = async function (id: string){
    const product = await ProductModel.findById(id) 
    if(!product){
        throw new Error('Product ID is not exists.')
    }else{
        return product.inventory.inStock
    }
} 

orderSchema.pre('save', async function(next){
    
    try {
        const product: (ProductTypes | null) = await ProductModel.findById(this.productId) 
    if(product){
        const quantity: number = product.inventory.quantity - this.quantity
        if(quantity < 0){
            throw new Error(`Insufficient quantity available in inventory. We have ${product.inventory.quantity} items in stock.`)
        }
        await ProductModel.findByIdAndUpdate(this.productId, {
            $set: {
                "inventory.quantity": quantity,
                "inventory.inStock": quantity <= 0 ? false : true
            }
        }) 
    }
    else{
        throw new Error (`Product with ID ${this.productId} not found.`)
    }
    next();
    } catch (error: any) {
        next(error)
    }
})

const OrderModel = model<orderTypes, OrderModelType>('order', orderSchema)
export default OrderModel;