import { Product } from "../models/ProductModel.js"

export const createProductService = async(data) =>{
    return await Product.create(data)
}

export const getAllProductService = () =>{
    return new Promise(async (resolve, reject) => {
        try{
            const allProduct = await Product.find()
            resolve({
                status: 'Ok',
                data: allProduct
            })
        }catch(e){
            console.log(e)
            reject({
                status:'err',
                message:e
            })
        }
    })
}

export const updateProductByIdService = async(id, data)=>{
    return await Product.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
export const deleteProductByIdService = async(id) => {
    return await Product.findByIdAndDelete(id)
}