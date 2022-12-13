import { createCardIdeasService, deleteCardIdeasByIdService, getAllCardIdeasService, updateCardIdeasByIdService } from "../Services/CardIdeasService.js";


export const createCardIdeasController = async (req, res) => {

    try {
        const data = req.body;
        const newCardIdeas = await createCardIdeasService(data)
        res.send({
            success: true,
            message: "Saved CardIdeas",
            data: newCardIdeas
        })
    } catch (e) {
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}

export const getCardIdeasController = async(req, res)=>{
    try {
        const CardIdeas = await getAllCardIdeasService();
        res.send({
            success: true,
            message: "CardIdeas",
            data: CardIdeas
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const updateCardIdeasController = async(req, res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const CardIdeas = await updateCardIdeasByIdService(id, data);
        res.send({
            success: true,
            message: "Updated CardIdeas",
            data: CardIdeas
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const deleteCardIdeasController = async(req, res, next) => {
    try {
        const id = req.params.id;
        const CardIdeas = await deleteCardIdeasByIdService(id);
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