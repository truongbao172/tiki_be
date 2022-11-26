import mongoose from "mongoose";
const { Schema } = mongoose

const categorySchema = new Schema({
    ids: {
        type: Number,
    },
    name: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true
})

export const Category = mongoose.model('Category', categorySchema)