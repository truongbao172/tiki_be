import express from 'express'
import  {engine }  from 'express-handlebars';
import routes from './routes/index.js';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
import cors from "cors";
var app = express();
app.use(cors())
dotenv.config()
app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = process.env.PORT
console.log("port", process.env.PORT)

app.get('/', (req, res) => {
   res.render('new',{isShow:true});
});

routes(app)
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
   console.log('connect DB success')
})
.catch((err)=>{
   console.log(err)
})

app.listen(port, ()=>{
   console.log("server is running:",port )
})