const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")
const uuid= require("uuid")
const moment= require("moment")
 
const createCustomer= async function (req, res) {
    let data = req.body
    data.customerID = uuid.v4()
    let lengths = data.MobileNo.length

    if(lengths > 10 || lengths < 10){
        res.send({msg: "mobile no is Invalid"})
    }
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
 

const getData= async function (req, res) {
    let savedData= await UserModel.find({status:"InActive"})
    res.send({msg: savedData})
}
 
 
const getDetails = async  function(req,res){
    let data = await UserModel.find({status:"Active"})
    res.send({msg: data})
} 

 
module.exports.createCustomer = createCustomer
module.exports.getDetails = getDetails
module.exports.getData= getData
 