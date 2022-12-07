import { Product } from "../models/ProductModel.js"

export const createProductService = async(data) =>{
    return await Product.create(data)
}

export const getAllProductService = () =>{
    return new Promise(async (resolve, reject) => {
        try{
            const allProduct = await Product.find()
            resolve({
                status: 'OK',
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

export const getDetailsProductService = (id) => {
    return new Promise(async (resolve, reject) => {
        try{
            const findProduct = await Product.findById({_id: id})
            if(findProduct){
                resolve({
                    status: 'OK', 
                    data: findProduct
                })
            }
            resolve({
                status: 'OK',
                message: 'the product is not defined'
            })
        }catch(err){
            reject({
                message: err,
                status: 'err'
            })
        }
    }).catch(e => e)
}

export const updateProductByIdService = async(id, data)=>{
    return await Product.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
export const deleteProductByIdService = async(id) => {
    return await Product.findByIdAndDelete(id)
}