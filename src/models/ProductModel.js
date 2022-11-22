import mongoose from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 3
    },
    image:{
        type : String,
        require: true,
        default: 'http://d38pfw3nc1vjg3.cloudfront.net/picture/undefined/1649667845682_1134204.png',
    },
    rating:{
        type : Number,
        require: true,
    },
    description: {
        type: Array,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['in-stock', 'out-of-stock', 'discontinued'],
        required: true,
    },

},{
    timestamps: true
});
export const Product = mongoose.model('Product', productSchema);