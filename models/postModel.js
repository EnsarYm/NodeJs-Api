// CALL MONGOOSE SCHEMA
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// CREATE POST SCHEMA
const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    isActive:{
        type:Number,
        default: 1
    },
    date:{
        type: Date,
        default: Date.now
    }
}, {collection: 'posts', timestamps: true});
// SAVE DB
const Post = mongoose.model('Post', postSchema);
// EXPORT POST
module.exports = Post;