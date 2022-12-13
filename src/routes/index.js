import userRouter from "./user.js"
import productRouter from "./product.js"
import categoryRouter from "./category.js"
import cardIdeasRouter from "./cardIdeas.js"
import demoCategoryRouter from "./demoCategory.js"
const routes = (app) =>{
        app.get('/demo', function (req, res) {
            res.send('DAY LA PROJECT BE TIKI WEB APP e');
        });

        app.use('/user', userRouter)
        app.use('/product', productRouter)
        app.use('/category', categoryRouter)
        app.use("/demoCategory", demoCategoryRouter)
        app.use("/card-ideas", cardIdeasRouter)

}
export default routes