import { createDemoCategoryService, getAllDemoCategoryService } from "../Services/DemoCategoryService.js";

export const createDemoCategoryController = async (req, res) => {

    try {
        const data = req.body;
        const newCategory = await createDemoCategoryService(data)
        res.send({
            success: true,
            message: "Saved demo category",
            data: newCategory
        })
    } catch (e) {
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}

export const getAllDemoCategoryController = async(req, res)=>{
    try {
        const DemoCategory = await getAllDemoCategoryService();
        res.send({
            success: true,
            message: "DemoCategory",
            data: DemoCategory
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}