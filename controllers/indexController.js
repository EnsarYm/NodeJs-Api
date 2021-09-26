const POST = require('../models/postModel');

// Getting All POSTS
exports.getHomePage = async (req , res , next) => {
    try{
        const AllPosts = await POST.find({});
        res.json(AllPosts);
    }catch(err){
        console.log(err);
    }
    
    
}

// Get POST ID
exports.getPage = async (req , res , next) => {
    try{
        const result = await POST.findById({_id:req.params.id});
        if(result){
            return res.json({
                message: 'That Post Here ' + result.title
            })
        }
    }catch(err){
        console.log(err);
    }
}


