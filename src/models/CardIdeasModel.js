import mongoose from "mongoose";
const { Schema } = mongoose

const cardIdeasSchema = new Schema({
    id: {
        type: String,
    },
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
        default: 'https://www.tikibrand.com/media/ideas/IGNORE_BEDTIMES.jpg',
    },
    topic:{
        type : Array,
        unique: false,
    },
    button:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const CardIdeas = mongoose.model('CardIdeas', cardIdeasSchema)