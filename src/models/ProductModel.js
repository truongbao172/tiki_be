import mongoose from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type : String,
        require: true,
    },
    image:{
        type : String,
        require: true,
        default: 'http://d38pfw3nc1vjg3.cloudfront.net/picture/undefined/1649667845682_1134204.png',
    },
    rating:{
        type : String,
        require: true,
        unique:true,
    },
    price:{
        type : Number,
        require: true,
        unique:true,
    },
    description  :{
        type : String,
        require: true,
    },
    reviewRating:{
        type : String,
        require: true,
    },
    categories: {
        type: String,
        required: [true, '404'],
    },

});
export const Product = mongoose.model('Product', productSchema);