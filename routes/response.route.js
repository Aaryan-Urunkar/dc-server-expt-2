const express = require('express')
const router = express.Router()
const Response = require("../models/response.model.js")

router.post("/post-response", async (req , res) => {
    try{
        const {firstName , lastName , age, email, phoneNo, gender, responses} = req.body;
        
        const duplicate = Response.find({email : email, phoneNo : phoneNo})
        if(duplicate.size() > 0){
            res.status(400).json({msg : "Duplicate email or phone number was found"})
            return;
        }
        
        const new_response = await Response.create(req.body)
        return res.status(200).json({msg : "Response created" , new_response})
    } catch(e){
        return res.status(500).json("Internal server error");
    }
});

module.exports = router