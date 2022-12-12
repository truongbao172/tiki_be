import mongoose from "mongoose";
const { Schema } = mongoose

const demoCategorySchema = new Schema({
    ids: {
        type: String,
    },
    title: {
        type: String,
        trim: true,
    },
    subTitle: {
        type : String,
        unique: true,
    },
    image:{
        type : String,
        require: true,
        default: 'https://www.tikibrand.com/media/homectablocks/WebsiteupdateAshleyRoseODLPhotosMarch2021-updated.jpg',
    },
    hagTag:{
        type : Array,
        unique: true,
    }
}, {
    timestamps: true
})

export const DemoCategory = mongoose.model('DemoCategory', demoCategorySchema)