import { CardBuyerGuide } from "../models/CardBuyerGuideModel.js"

export const createCardBuyerGuideService = async(data) =>{
    return await CardBuyerGuide.create(data)
}

export const getAllCardBuyerGuideService = () =>{
    return new Promise(async (resolve, reject) => {
        try{
            const allCardBuyerGuide = await CardBuyerGuide.find()
            resolve({
                status: 'OK',
                data: allCardBuyerGuide
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


export const deleteCardBuyerGuideByIdService = async(id) => {
    return await CardBuyerGuide.findByIdAndDelete(id)
}