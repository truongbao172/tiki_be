import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        require : true,
        unique: true,
    },
    password: {
        type: String,
        require : true,
    },
    access_token: {
        type: String,
        unique: true,
        index: true,
    },
    refresh_token: {
        type: String,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        unique: true,
        default: false
    },
    desDetail: {
        firtName: {
            type: String,
           
        },
        lastName: {
            type: String,
         
        },
        birthDay: {
            type: String,
          
        },
        gender: {
            type: String,
        
        },
        householdSize: {
            type: String,
          
        },
        whichOfHousehold: {
            type: Array,
        
        },
        rentOrOwn:{
            type: String,
          
        },
        interests:{
            type: Array,
        
        },
        yourStyle:{
            type: Array,
        
        },
        torchesOnYear:{
            type: String,
            
        },
        useTheTorchesOnYear: {
            type: String,
         
        },
        youRelate : {
            type: Array,
          
        },
        infoOutdoor : {
            type: Array,
         
        },
        listSomeOfYourFavorite:{
            type: String,

        }
        
    }
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema)