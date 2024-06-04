import z from 'zod'


const variantZodSchema = z.object({
    type: z.string(),
    value: z.string()
})

const inventoryZodSchema = z.object({
    quantity: z.number().min(1, "The minimum value of quantity should be 1."),
    inStock: z.boolean()
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