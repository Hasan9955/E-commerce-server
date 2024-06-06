import z from 'zod'


const variantZodSchema = z.object({
    type: z.string(),
    value: z.string()
})

const inventoryZodSchema = z.object({
    quantity: z.number().min(0, "The value of quantity should be a positive number."),
    inStock: z.boolean().default(true)
})

const productZodSchema = z.object({
    name: z.string().trim(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantZodSchema),
    inventory: inventoryZodSchema

})



export const zodTypes = {
    productZodSchema,
    variantZodSchema,
    inventoryZodSchema 
};