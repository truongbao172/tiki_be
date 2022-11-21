
export const createProductController = async (req, res) => {
    const { name, image, rating, price, description, reviewRating, categories } = req.body
    console.log("req.body",req.body)
    // if () {
    //     // const response = await createUserService({ email, password, name })
    //     // return res.json(response)
    // } else {
    //     return res.json({
    //         status: 'err',
    //         messgae: "Infomation is required"
    //     })
    // }
}