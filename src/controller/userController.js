const model = require('../model/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = {

    register : async  (req , res) =>{
        try {
         const { firstName, lastName, email, password, phone , address , role } = req.body;
         const existingUser = await model.findOne({email});
         if(existingUser){
            return res.status(400).json({message : 'Email Already in Use'})
         }
         const hashedPassword = await bcrypt.hash(password , 10);
          // Create a new user instance
          const newUser = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword ,
            phone , address , role
        });

        const saveUser = await newUser.save();
        res.status(201).json({
            message : "User Registerd successfully", 
            user :saveUser
        });
    
        } catch (error) {
           res.status(500).send({message: 'Error occurred while registering user', error: error.message }) 
        }
    },

    loginUser : async(req, res) => {
        try{
            const{ email , password} = req.body;

            const user = await model.findOne({email});
            if(!user){
              return  res.status(404).send({message : "Invalid Credientials"})
            }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(404).send({message: "Invalid Credientials" })
        }
        const token = jwt.sign({userId : user._id , role:user.role} , "SushSecretKeyGift" , {expiresIn :'1h'})
          res.status(200).json({
            message : 'Login Successful',
            token
          })


        } catch(error){
            res.status(500).send({message: "Error Ocuured While login" , error : error.message})
        }
    },

    getUserProfile : async (req, res)=>{
        try {
            const user = await model.findById(req.userId)
            if(!user){
                return  res.status(404).json({message : 'User Not found'})
             }
            res.status(200).json(user);
            
        } catch (error) {
            res.status(500).send({message: "Error Ocuured While login" , error : error.message})
        }
    },

    getAllUserProfile : async (req, res)=>{
        try {
            const user = await model.find()
            if(!user){
                return  res.status(404).json({message : 'User Not found'})
             }
            res.status(200).json(user);
            
        } catch (error) {
            res.status(500).send({message: "Error Ocuured While login" , error : error.message})
        }
    },

    updateUserProfile :async(req , res)=>{
        try {
            const { firstName, lastName, phone, address } = req.body;
            const updatedUser = await model.findByIdAndUpdate(
               req.userId,
               { firstName, lastName, phone, address },   { new: true }
            )
            if(!updatedUser){
                return res.status(404).send({message : 'User Not Found'})
            }
            res.status(200).json({message : 'User profile updated successfully' , user: updatedUser})
        } catch (error) {
            res.status(500).send({message: "Error Ocuured While login" , error : error.message}) 
        }
    }
  
}