const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 

/*------------------------------------------------------------------------*/
 


router.post("/createCard", BookController.createCard  )
router.post("/createCustomer", UserController.createCustomer  )
 router.get("/getCardData",BookController.getCardData)
 router.get("/getDetails",UserController.getDetails)






module.exports = router;