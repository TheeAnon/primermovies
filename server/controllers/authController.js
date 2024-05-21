const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//regiser function
const signup = async (request, response) => {
  try{
      const { firstName, lastName, email, password } = request.body

      if(!firstName || !lastName){
         response.status(500).send({
            message: "Please enter both first name and last name."
         })
      }

      if(!password || password.length < 6){
         response.status(500).send({
            message: "Please enter a valid password. Atleast 6 characters long."
         })
      }

      if(!email){
         response.status(500).send({
            message: "Please enter a valid email."
         })
      }

      //check if email exists
      const userExists = await UserModel.findOne({email: email})
        if(userExists){
         return response.status(400).send({
           message: "You already have an account. Login instead.",
        });
      }

      //hash password
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new UserModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
          });

      //save user to db
      const register = user.save()
      if(register){
         response.status(201).send({
            message: "Registration successful.",
            result: register,
         })
      }else{
         response.status(500).send({
           message: "Something went wrong while saving your data. Please try again.",
        })
      }
  }catch(e) {
     response.status(500).send({
        message: "Something went wrong. Please try again.",
        error: e,
     })
  }
}


//Login function
const login = async (request, response) => {
  try{
      const { email, password } = request.body

      // Check if user exists
      const user = await UserModel.findOne({email: email})
        if(!user){
         return response.status(400).send({
           message: "You do not have an account. Signup instead.",
        });
      }

      //match password
      const passwordCheck = bcrypt
        .compare(password, user.password)

      // check if password matches
      if (!passwordCheck) {
          return response.status(400).send({
            message: "Wrong Password.",
            error: error,
          });
       }

       // create JWT token
       const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
              userName: user.firstName + " " + user.lastName,
            },
            process.env.SECRET,
            { expiresIn: "24h" }
          );

       // return success response
       response.status(200).send({
          message: "Login successful",
          user: token,
       });
  }catch(e){
      response.status(500).send({
        message: "An error occurred. Please try again."+e,
        error: e,
      });
  }
}

//getProfile function
const getProfile = async (request, response) => {
  const {token} = request.cookies
  if(token){
    jwt.verify(token,process.env.SECRET,{},(error, user)=>{
      if(error) throw error;
      response.json(user);
    });
  }else{
    response.json(null);
  }
}

module.exports = {
    signup,
    login,
    getProfile
}

