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
        const query = req.query;
        const searchValue = query.searchTerm;
        if (!searchValue) {
            const result = await productServices.getProducts()
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            })
        }
        else {
            const result = await productServices.searchProduct(searchValue as string)
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchValue}' fetched successfully!`,
                data: result
            })
        }
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
        const result = await productServices.getAProduct(id)
        if(result === null){
            throw new Error ("No product found with this ID.")
        }
        else{
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        })
    }
}


const updateAProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const result = await productServices.updateAProduct(id, data)
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
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


const productDelete = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await productServices.productDelete(id)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
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


export const productController = {
    createProducts,
    getAllProducts,
    getAProduct,
    updateAProduct,
    productDelete,

}