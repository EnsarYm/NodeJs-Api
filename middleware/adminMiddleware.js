const {body , validationResult} = require('express-validator');

// const adminHunter = (
//     body('title').isLength({min: 5}),
//     (req,res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//     }
// );

const adminHunter = (req , res , next) => {
    body('title').isLength({min:5});
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
}

module.exports = adminHunter;