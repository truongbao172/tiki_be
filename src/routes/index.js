import userRouter from "./user.js"
import productRouter from "./product.js"
const routes = (app) =>{
        app.get('/demo', function (req, res) {
            res.send('DAY LA PROJECT BE TIKI WEB APP e');
        });

        app.use('/user', userRouter)
        app.use('/product', productRouter)

}
export default routes