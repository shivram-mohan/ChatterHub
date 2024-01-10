const mongoose = require("mongoose");

const chatmodel = mongoose.Schema({
    chatname: {type: String, trim: true},
    isGroupChat: {type: Boolean, default: false},
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"//create a message model
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
    }
    
    
},
{
    timestamps: true,
}

)

const Chat = mongoose.model("Chat", chatmodel);
module.exports = Chat;