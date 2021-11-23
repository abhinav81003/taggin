const mongoose = require('mongoose')

const WaitlistSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true,
    }
})

const PostSchema = new mongoose.Schema({
    
})

const Waitlist = mongoose.model("Waitlist",WaitlistSchema);
module.exports = Waitlist