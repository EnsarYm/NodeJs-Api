const POST = require('../models/postModel');
const {body , validationResult} = require('express-validator');


// Add Post
exports.addPost = async (req , res , next) => {
    try{
        const post = new POST(req.body);

        const result = await post.save();
        if(result){
            res.json({
                message: 'Post Add Success',
                info: result
            });
        }
        
        
        
    }catch(err){
        console.log('add Post Error ' + err);
    }
}