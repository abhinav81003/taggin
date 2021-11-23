const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
    },
    description: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    likes: {
        type: Number
    },
    radius: {
        type: Number
    },
    time:{
        type: time
    },
    uploadDate: {
        type: Date, default: Date.now
    }
})


const Posts = mongoose.model("Posts",PostSchema);
module.exports = Posts