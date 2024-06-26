"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const products_services_1 = require("./products.services");
//create products
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield products_services_1.productServices.createProducts(data);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const searchValue = query.searchTerm;
        if (!searchValue) {
            const result = yield products_services_1.productServices.getProducts();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result
            });
        }
        else {
            const result = yield products_services_1.productServices.searchProduct(searchValue);
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchValue}' fetched successfully!`,
                data: result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        });
    }
});
const getAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield products_services_1.productServices.getAProduct(id);
        if (result === null) {
            throw new Error("No product found with this ID.");
        }
        else {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        });
    }
});
const updateAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = yield products_services_1.productServices.updateAProduct(id, data);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        });
    }
});
const productDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield products_services_1.productServices.productDelete(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "An error is going on controller",
            error
        });
    }
});
exports.productController = {
    createProducts,
    getAllProducts,
    getAProduct,
    updateAProduct,
    productDelete,
};
