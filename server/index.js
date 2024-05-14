const bcrypt = require("bcryptjs");
const dbConnect = require("./models/db.connect");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();

//connection to db
dbConnect();

// Cors headers
app.use(cors());
app.use(express.json());

//regiser endpoint
app.post("/api/signup", (request, response) => {
    //hash password
    bcrypt.hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new UserModel({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: hashedPassword,
      })

      //save user to db
      user.save().then((result) => {
        response.status(201).send({
          message: "User Created Successfully",
          result: result,
        });
      })
      .catch((error) => {
        response.status(500).send({
          message: "Error creating user",
          error: error,
        });
      });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        error: e,
      });
    });
});


//Login endpoint
app.post("/api/login", (request, response) => {
   UserModel.findOne({ email: request.body.email })
   .then((user) => {
      if (!user) {
         return response.status(400).send({
            message: "You do not have an account. Sign up instead.",
         });
      }

      bcrypt.compare(request.body.password, user.password)
      .then((passwordCheck) => {
          // check if password matches
          if(!passwordCheck) {
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
              userName: user.firstName+' '+user.lastName,
            },
            process.env.SECRET,
            { expiresIn: "24h" }
          );

          // return success response
          response.status(200).send({
            message: "Login Successful",
            user: token,
          });
        })
      .catch((error) => {
        response.status(400).send({
          message: "Wrong Password.",
          error: error,
        });
      });
   })
   .catch((e) => {
      response.status(404).send({
        message: "An error occurred. Please try again.",
        error: e,
      });
   });
});


app.listen(1337, () => {
  console.log('Server running on 1337');
});
