const mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema(
    {
        firstName : {
            type: String,
            required : true
        }, lastName : {
            type: String,
            required : true
        }, email :{
            type: String,
            required : true
        }, phoneNo :{
            type: Number,
        }, age :{
            type:Number
        }, gender : {
            type : String
        },
        responses : {
            type : [String],
            default : [],
        }
    }
);

module.exports = mongoose.model('Response' , ResponseSchema);