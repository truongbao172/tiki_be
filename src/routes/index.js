import userRouter from "./user.js"
import productRouter from "./product.js"
import categoryRouter from "./category.js"
const routes = (app) =>{
        app.get('/demo', function (req, res) {
            res.send('DAY LA PROJECT BE TIKI WEB APP e');
        });

        app.use('/user', userRouter)
        app.use('/product', productRouter)
        app.use('/category', categoryRouter)
}
export default routes