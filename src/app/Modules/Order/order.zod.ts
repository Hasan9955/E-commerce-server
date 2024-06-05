import z from 'zod'

const orderZodSchema = z.object({
    email: z.string().email('Email is not valid.'),
    productId: z.string(),
    price: z.number(),
    quantity: z.number().min(1, 'Minimum quantity should be 1.')
})

export default orderZodSchema;