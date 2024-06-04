import { Request, Response } from "express";
import { productServices } from "./products.services";


//create products
const createProducts = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await productServices.createProducts(data)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        })

    }
}


const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getProducts()
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        })

    }
}


const getAProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await productServices.
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        })
    }
}


    export const productController = {
        createProducts,
        getAllProducts

    }