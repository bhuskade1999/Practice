const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId
const cardSchema = new mongoose.Schema( {
    
        cardNumber : String,
        cardType : String,  
        customerName : String,
        status : { type :String,
                default :"ACTIVE"  },
        vision : String,
        customerID :{
                type :objectId,
                ref: "Customer"  }

}, 
{ timestamps: true });


module.exports = mongoose.model('Card _ Collection', cardSchema) //users

 