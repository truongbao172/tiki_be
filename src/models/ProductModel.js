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
        type : Array,
        require: true,
        default: ['http://d38pfw3nc1vjg3.cloudfront.net/picture/undefined/1649667845682_1134204.png','http://d38pfw3nc1vjg3.cloudfront.net/picture/undefined/1649667845682_1134204.png'],
    },
    rating:{
        type : Number,
        require: true,
    },
    countReview:{
        type : Number,
        require: true,
    },
    description: {
        type: Array,
        required: true,
        trim: true,
    },
    code:{
        type: String,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min: 0
    },
    quatity: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        Ids:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
            trim: true,
        }
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