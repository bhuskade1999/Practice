const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors")

app.use(cors())


mongoose.connect("mongodb+srv://nishant55:1234@nishant99.et97kst.mongodb.net/Social_Media_App?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb connected successfully")
  })
  .catch((err) => console.log(err))

 
const UserSchema = new mongoose.Schema({
  name:{
      type:String,
      required:[true, "Please Enter Name"]
  },

  avatar:{
      public_id:String,
      url:String
  },

  email:{
      type:String,
      unique:[true,"Email Already Exists"],
      required:[true, "Please Enter Email"]
  },

  password:{
      type:String,
      required:[true, "Please Enter Password"],
      minlength:[6, "Password must be atleast 6 characters"],
      select:false
  },

  posts:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Post'
      }
  ],
  followers:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
      }
  ],

  following:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
      }
  ],

  resetPasswordToken :String,
  resetPasswordExpires: Date,
  
  
})

const UserModel = mongoose.model('User', UserSchema);


const postSchema = new mongoose.Schema({
  caption:String,
  image:{
      public_Id:String,
      url:String
  },
  
  owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  },
  createdAt:{
      type:Date,
      default:Date.now()
  },
  likes:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
      }
  ],
  comments:[
      {
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
      },
      comment:{
          type:String,
          required:true
      }
  }
  ],
  
  
  })
  
  PostModel = mongoose.model('Post', postSchema);








app.get("/", (req, res) => {
  console.log("working fine");
  res.send("yes! it's working!")
});


app.get("/me", async(req,res)=>{
  try{
  let id ="6436d18a194abc287ca675c0"
    const user = await UserModel.findById(id).populate("posts followers following")

    res.status(200).json({success:true, user})

}catch(err){
    res.status(500).send({success :false, message:err.message});
}

})

 
  


app.listen(4000, () => {
  console.log("listening on port",4000)
})