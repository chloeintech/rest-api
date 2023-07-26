require("dotenv").config(); // can use this to bring in the information from .env

const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

const User = require("./users/model") 
const userRouter = require("./users/routes")

app.use(express.json());

const syncTables = () => {
    User.sync()
};

app.use(userRouter)

app.get("/health", (req, res) => {
    res.status(200).json({ message: "API is working" })
}); // This checks the health of the api and that it is working


app.listen(port, () => {
    syncTables()// runs when the port runs.
    console.log(`Server is running on port ${port}.`)
});

