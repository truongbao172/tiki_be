
import { DemoCategory } from "../models/DemoCategoryModel.js"
export const createDemoCategoryService = async(data) =>{
    return await DemoCategory.create(data)
}

export const getAllDemoCategoryService = () =>{
    return new Promise(async (resolve, reject) => {
        try{
            const allCategory = await DemoCategory.find()
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


export const updateDemoCategoryByIdService = async(id, data)=>{
    return await DemoCategory.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
export const deleteDemoCategoryByIdService = async(id) => {
    return await DemoCategory.findByIdAndDelete(id)
}