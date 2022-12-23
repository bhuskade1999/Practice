const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    firstName : String,
    lastName : String,
    MobileNo :String,
    DOB : Date,
    emailid : String,
    address : String,
    customerID : String,
    status: String,
    isDeleted: { 
        type :Boolean,
        default :false
    }

     
}, 
{ timestamps: true });

module.exports = mongoose.model('Customer', authorSchema)  



 