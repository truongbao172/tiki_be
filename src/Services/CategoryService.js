import { Category } from "../models/CategoryModel.js"

export const createCategoryService = async(data) =>{
    return await Category.create(data)
}

export const getAllCategoryService = () =>{
    return new Promise(async (resolve, reject) => {
        try{
            const allCategory = await Category.find()
            resolve({
                status: 'OK',
                data: allCategory
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


export const updateCategoryByIdService = async(id, data)=>{
    return await Category.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
export const deleteCategoryByIdService = async(id) => {
    return await Category.findByIdAndDelete(id)
}