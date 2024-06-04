import { zodTypes } from './product.zod';
import { z } from "zod";


type ProductTypes = z.infer<typeof zodTypes.productZodSchema>
export type variantTypes = z.infer<typeof zodTypes.variantZodSchema>
export type inventoryTypes = z.infer<typeof zodTypes.inventoryZodSchema>

export default ProductTypes;

