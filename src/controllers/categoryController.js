import { createCategoryService, deleteCategoryByIdService, getAllCategoryService, updateCategoryByIdService } from "../Services/CategoryService.js";


export const createCategoryController = async (req, res) => {

    try {
        const data = req.body;
        const newCategory = await createCategoryService(data)
        res.send({
            success: true,
            message: "Saved Category",
            data: newCategory
        })
    } catch (e) {
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}

export const getCategoryController = async(req, res)=>{
    try {
        const Category = await getAllCategoryService();
        res.send({
            success: true,
            message: "Category",
            data: Category
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const updateCategoryController = async(req, res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const Category = await updateCategoryByIdService(id, data);
        res.send({
            success: true,
            message: "Updated Category",
            data: Category
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const deleteCategoryController = async(req, res, next) => {
    try {
        const id = req.params.id;
        const Category = await deleteCategoryByIdService(id);
        res.send({
            success: true,
            message: "Deleted Category",
            data: Category
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}