import { CardIdeas } from "../models/CardIdeasModel.js"

export const createCardIdeasService = async(data) =>{
    return await CardIdeas.create(data)
}

export const getAllCardIdeasService = () =>{
    return new Promise(async (resolve, reject) => {
        try{
            const allCardIdeas = await CardIdeas.find()
            resolve({
                status: 'OK',
                data: allCardIdeas
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


export const updateCardIdeasByIdService = async(id, data)=>{
    return await CardIdeas.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
export const deleteCardIdeasByIdService = async(id) => {
    return await CardIdeas.findByIdAndDelete(id)
}