import { orderRoutes } from './app/Modules/Order/order.routes';
import { productsRoutes } from './app/Modules/Products/products.routes';
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'


const app = express()


//parsers
app.use(express.json());
app.use(cors());


// product routes
app.use('/api', productsRoutes)
//order routes
app.use('/api', orderRoutes)

app.get('/', (req, res) => {
    res.send('Hello World.')
})

app.all('*', (req, res, next) => {
    const url = req.url;
    const error: any = new Error(`Route not found: ${url}`)
    error.status = 404
    next(error)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) =>{
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})




export default app;