const mongoose = require("mongoose")
require('dotenv').config()

async function dbConnect() {
    mongoose.connect(process.env.DB_URL)
    .then(() => {
      console.log("Successfully connected to MongoDB")
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB")
      console.error(error)
    })
}

module.exports = dbConnect
