import { z } from "zod";
import orderZodSchema from "./order.zod";


type orderTypes = z.infer<typeof orderZodSchema>

export default orderTypes;