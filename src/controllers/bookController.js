const BookModel= require("../models/bookModel")
const UserModel= require("../models/userModel")


const createCard= async function (req, res) {
    let data = req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const getCardData= async function (req, res) {
    let allBooks= await BookModel.find() 
    res.send({msg: allBooks})
    
}



 
/*----------------------------------------------------------------------------------------------*/

module.exports.createCard= createCard
module.exports.getCardData= getCardData
 