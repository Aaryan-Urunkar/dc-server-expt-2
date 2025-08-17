const express = require('express');
const cors = require('cors'); 
const app = express();
const connectDB = require('./db/connect.js');
const reponseRouter = require("./routes/response.route.js")
require("dotenv").config()

app.use(cors()); 
app.use(express.json());

app.use("/api/v1" , reponseRouter)

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();