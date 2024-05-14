const bcrypt = require("bcryptjs");
const dbConnect = require("./models/db.connect");
const UserModel = require("./models/user.model");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//connection to db
dbConnect();

// Cors headers
app.use(cors());
app.use(express.json());

//regiser endpoint
app.post("/api/signup", (request, response) => {
  userExists(request.body.email)
    .then((userExists) => {
      if (userExists) {
        return response.status(404).send({
          message: "You already have an account. Login instead.",
        });
      }
      //hash password
      bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
          const user = new UserModel({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: hashedPassword,
          });

          //save user to db
          user
            .save()
            .then((result) => {
              response.status(201).send({
                message: "Registration successful.",
                result: result,
              });
            })
            .catch((error) => {
              response.status(500).send({
                message: "Error while signing you up. Please try again.",
                error: error,
              });
            });
        })
        .catch((e) => {
          response.status(500).send({
            message: "Something went wrong. Please try again.",
            error: e,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "Something went wrong. Please try again.",
        error: e,
      });
    });
});

// check if user exists
const userExists = (email) => {
  return UserModel.findOne({ email: email })
    .then((user) => {
      return !!user; // Convert to boolean
    })
    .catch((error) => {
      throw error; // Throw error to be caught later
    });
};

//Login endpoint
app.post("/api/login", (request, response) => {
  // Check if user exists
  UserModel.findOne({ email: request.body.email })
    .then((user) => {
      if (!user) {
        return response.status(404).send({
          message: "You do not have an account. Sign up instead.",
        });
      }

      bcrypt
        .compare(request.body.password, user.password)
        .then((passwordCheck) => {
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
        })
        .catch((error) => {
          response.status(400).send({
            message: "Wrong password.",
            error: error,
          });
        });
    })
    .catch((error) => {
      response.status(500).send({
        message: "An error occurred. Please try again.",
        error: error,
      });
    });
});

app.listen(1337, () => {
  console.log("Server running on 1337");
});
