import { createCardBuyerGuideService, deleteCardBuyerGuideByIdService, getAllCardBuyerGuideService } from "../Services/CardBuyerGuideService.js";

export const createCardBuyerGuideController = async (req, res) => {

    try {
        const data = req.body;
        const newCardIdeas = await createCardBuyerGuideService(data)
        res.send({
            success: true,
            message: "Saved Buyer Guide",
            data: newCardIdeas
        })
    } catch (e) {
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}

export const getCardBuyerGuideController = async(req, res)=>{
    try {
        const CardIdeas = await getAllCardBuyerGuideService();
        res.send({
            success: true,
            message: "Buyer Guide",
            data: CardIdeas
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const deleteCardBuyerGuideController = async(req, res, next) => {
    try {
        const id = req.params.id;
        const CardIdeas = await deleteCardBuyerGuideByIdService(id);
        res.send({
            success: true,
            message: "Deleted CardIdeas",
            data: CardIdeas
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}