exports.getHomePage = (req , res , next) => {
    res.json({
        message: 'Welcome To Homepage'
    })
}

exports.getPage = (req , res , next) => {
    id = req.params.id;
    res.json({
        message: 'u looking ' + id + ' POST'
    })
}

