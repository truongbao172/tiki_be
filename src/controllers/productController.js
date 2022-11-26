import { createProductService,deleteProductByIdService,getAllProductService,getDetailsProductService,updateProductByIdService } from "../Services/ProductService.js";

export const createProductController = async (req, res) => {

    try {
        const data = req.body;
        const newProduct = await createProductService(data)
        if(newProduct.quantity == 0){
            newProduct.status = "out-of-stock"
        }
        res.send({
            success: true,
            message: "Saved Product",
            data: newProduct
        })
    } catch (e) {
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}
export const detailsProductController = async (req, res) => {
    try{
        const { productId } = req.params
        if(productId) {
            const response = await getDetailsProductService(productId)
            return res.json(response)
        }
        return res.json({
            status: 'err',
            message: 'The id is required'
        })
    }catch(e){
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}

export const getProductController = async(req, res)=>{
    try {
        const products = await getAllProductService();
        res.send({
            success: true,
            message: "Products",
            data: products
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const updateProductController = async(req, res)=>{
    try {
        const id = req.params.id;
        const data = req.body;
        const product = await updateProductByIdService(id, data);
        res.send({
            success: true,
            message: "Updated Product",
            data: product
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
export const deleteProductController = async(req, res, next) => {
    try {
        const id = req.params.id;
        const product = await deleteProductByIdService(id);
        res.send({
            success: true,
            message: "Deleted Product",
            data: product
        })
    } catch (error) {
        res.send({
            success: false,
            message: error.message
        })
    }
}
// {
//     "name":"ISLAND KING LARGE FLAME TORCH WITH EASY INSTALL IN BLACK",
//     "image":"http://d38pfw3nc1vjg3.cloudfront.net/picture/undefined/1649667845682_1134204.png",
//     "rating": 4,
//     "description":["5x larger flame than traditional torches","Easy install lever provides one-step installation","For proven mosquito repellency*, use with BiteFighter® Torch Fuel"],
//     "price": 20000,
//     "quatity": 78,
//     "category":{ "cateId": "TORCHES & TABLETOP", "cateName" : "torches"},
//     "status":"in-stock"
//   }