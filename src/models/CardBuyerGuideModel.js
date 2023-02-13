import mongoose from "mongoose";
const { Schema } = mongoose

const cardBuyerGuide = new Schema({
    title: {
        type: String,
        trim: true,
    },
    subTitle: {
        type : String,
        unique: false,
    },
    image:{
        type : String,
        require: true,
        default: 'https://www.tikibrand.com/media/buyersguide/article/image/v/s/vsthumb.jpg',
    },
}, {
    timestamps: true
})

export const CardBuyerGuide = mongoose.model('CardBuyerGuide', cardBuyerGuide)