// CALL POST MODEL
const Post = require('../models/postModel');

exports.addPost = async (req , res , next) => {
    try {
        const addPost = new Post(req.body);
        const result = await addPost.save();
        res.json(result);
    }catch(err){
        console.log(err);
    }
}