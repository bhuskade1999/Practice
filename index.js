const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());


mongoose.connect("mongodb+srv://nishant55:1234@nishant99.et97kst.mongodb.net/FeedBack", { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected successfully")
  })
  .catch((err) => console.log(err))

const commentSchema = new mongoose.Schema({
  name:String,
  email:String,
  feedback:String
});

const Feedback = mongoose.model("Comment", commentSchema);

app.get("/", (req, res) => {
  console.log("working fine");
  res.send("yes! it's working!")
});


app.post("/feedback", async (req,res)=>{
  try{
    let data = req.body
    let create = await Feedback.create(data) 
    res.status(200).json({
        success: true,
        message :"Feedback submitted Successfully",
      });
  }
  catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    
})  


app.get("/getFeedback", async (req,res)=>{
  try{
     let user = await Feedback.find().select({name:1,feedback:1})
      res.status(200).json({
        success: true,
        user,
      });  
  } 
  catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    

})

app.listen(4000, () => {
  console.log("listening on port",4000)
})