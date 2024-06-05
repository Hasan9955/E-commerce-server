import { orderRoutes } from './app/Modules/Order/order.routes';
import { productsRoutes } from './app/Modules/Products/products.routes';
import express from 'express' 
import cors from 'cors'


const app = express()


//parsers
app.use(express.json());
app.use(cors());


// product routes
app.use('/api', productsRoutes)
//order routes
app.use('/api', orderRoutes)





app.use('/', (req, res) => {
    res.send('Hello World.')
})

export default app;