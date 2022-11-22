
export const createProductController = async (req, res) => {

    try {
        console.log("req.body",req.body)
    } catch (e) {
        console.log(e)
        return res.json({
            status: 'err',
        })
    }
}
// {
//     "name":"ISLAND KING LARGE FLAME TORCH WITH EASY INSTALL IN BLACK",
//     "image":"http://d38pfw3nc1vjg3.cloudfront.net/picture/undefined/1649667845682_1134204.png",
//     "rating": 4,
//     "description":["5x larger flame than traditional torches","Easy install lever provides one-step installation","For proven mosquito repellency*, use with BiteFighter® Torch Fuel"],
//     "price": 20000,
//     "quantity": 78,
//     "category":"TORCHES & TABLETOP",
//     "status":"in-stock"
//   }