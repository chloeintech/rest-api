const { tokenCheck } = require("../middleware")
const User = require("./model")
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    console.log("Next called and inside the controller")
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).json({
            message: "sucessfully registered",
            user: { username: req.user.username, email: req.user.email }
        })

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })

    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({})
        for (let user of users) {
            user.password = "";
        }
        res.status(201).json({
            message: "Found all users",
            user: users
        })


    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }
}

const login = async (req, res) => {
    try {
        console.log("******* saying hi from the controller")
        const token = await jwt.sign({ id: req.user.id }, process.env.SECRET)
        console.log("******* Token = ", token)

        const decodedToken = await jwt.verify( token, process.env.SECRET);
        
        res.status(200).json({
            message: "success",
            user: {
                username: req.user.username,
                email: req.user.email,
                token:token
            } // user
        }) // json

        // res.status(200).json({ message: "sucess", login: login});

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }

    console.log("Hi from the login controller")

}


module.exports = {
    registerUser,
    getUsers,
    login,
}