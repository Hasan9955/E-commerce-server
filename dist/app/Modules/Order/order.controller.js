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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield order_service_1.orderServices.createOrder(data);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'An error is going on orderController',
            error
        });
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (!email) {
            const result = yield order_service_1.orderServices.getAllOrders();
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully!',
                data: result
            });
        }
        else {
            const result = yield order_service_1.orderServices.searchOrder(email);
            res.status(200).json({
                success: true,
                message: 'Orders fetched successfully for user email!',
                data: result
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'An error is going on orderController',
            error
        });
    }
});
exports.orderController = {
    createOrder,
    getOrders,
};
