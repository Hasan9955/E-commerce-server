import { orderServices } from './order.service';
import { Response } from 'express';
import { Request } from 'express';

const createOrder = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await orderServices.createOrder(data)
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'An error is going on orderController',
            error
        })
    }


}

const getOrders = async (req: Request, res: Response) => {
    try {
        const { email } = req.query;
        if (!email) {
            const result = await orderServices.getAllOrders()
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully!',
                data: result
            })
        }
        else {
            const result = await orderServices.searchOrder(email as string)
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully for user email!',
                data: result
            })
        }

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'An error is going on orderController',
            error
        })
    }
}

 
 



export const orderController = {
    createOrder,
    getOrders,  
}