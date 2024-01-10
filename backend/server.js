const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")
dotenv.config();

connectDB();
const app = express();

app.use(express.json())// to accept json files
app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/api/user",userRoutes);




const port = process.env.PORT || 5000
app.listen(port, console.log(`THe server is running on port ${port}`));
