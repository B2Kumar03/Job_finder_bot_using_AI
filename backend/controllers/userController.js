import User from "../models/User.js";
import tokenGenerator from "../utils/generateToken.js";
export const register = async (req, res) => {
const {googleId}=req.body
console.log(googleId);

if(googleId){
    const user = await User.findOne({googleId})
    if(user){ 
        return res.status(200).json({message:"user logged in successfully",data:{user}})
    }
    else{
        
        const newUser = await User.create(req.body)
        // const token=tokenGenerator(newUser._id)
        // newUser.token=token
        // await newUser.save()
        res.json({message:"user registered successfully",data:newUser})
        return
    }
}

  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User already exist" });
  }
  const user = await User.create({ name, email, password })

  return res.json({ message: "user registered successfully",data:req.body });
};
