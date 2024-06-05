import { z } from "zod";
import orderZodSchema from "./order.zod";
import { Model } from "mongoose";


type orderTypes = z.infer<typeof orderZodSchema>

export interface OrderModelType extends Model<orderTypes>{
    isProductExists(id: string) : Promise<orderTypes | null>
}
export default orderTypes;