const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
  firstName: {
    type: String,
    required: [true, "Please provide your first name"],
  },

  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
  },
  },
  { collection: 'users', },
)

module.exports = mongoose.model.Users || mongoose.model("users", UserSchema);
