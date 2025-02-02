import User from "./../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup =  async (req,res,next)=>{
    const newUser = await User.create(req.body);
    
const token  =  jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
  expiresIn: process.env.JWT_EXPIRES_IN,
})

res.status(201).json({
        token:token,
        status:"Success",
        data:{
            user:newUser
        }
    })
}

export const login  =async (req,res,next)=>{
  const {email,password } =req.body;
  console.log(email,password)
  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password!',
    });
  }
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid email or password!',
      });
    }
    const token = user.generateAuthToken();
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }

}