const dbConnect = require("./models/db.connect");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")

//connection to db
dbConnect();

// Cors headers
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use("/", require("./routes/authRoutes"))

app.listen(1337, () => {
  console.log("Server running on 1337");
});
