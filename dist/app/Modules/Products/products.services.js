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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const lodash_1 = require("lodash");
const products_model_1 = __importDefault(require("./products.model"));
const createProducts = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.create(data);
    return result;
});
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.find();
    return result;
});
const getAProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const objectId = new mongoose.Types.ObjectId(id)
    const result = yield products_model_1.default.findById(id);
    return result;
});
const updateAProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.default.findById(id);
    if (!product) {
        throw new Error('Invalid id given.');
    }
    data.inventory.quantity > 0 ? product.inventory.inStock = true : product.inventory.inStock = false;
    const mergeProduct = (0, lodash_1.merge)(product, data);
    const result = yield products_model_1.default.findByIdAndUpdate(id, mergeProduct, {
        new: true,
        runValidators: true
    });
    return result;
});
const productDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.findByIdAndDelete(id);
    return result;
});
const searchProduct = (searchValue) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.find({
        name: { $regex: new RegExp(searchValue, 'i') }
    });
    return result;
});
exports.productServices = {
    createProducts,
    getProducts,
    getAProduct,
    updateAProduct,
    productDelete,
    searchProduct
};
