

const mongoose = require("mongoose")
const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/authenticationn-assignment")
}

module.exports=connect