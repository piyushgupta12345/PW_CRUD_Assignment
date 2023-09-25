// import model
const User = require("../models/userModel");


exports.createUser = async (req, res) =>{
    try {
        // extract the value from model
        const{name, email} = req.body;

        // create user in db
        const user = await User.create({name, email});

        res.status(200).json(
            {
                success:true,
                data:user,
                msg:"User create successfully"
            }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success:false,
                msg:"internal server issus"
            }
        )
    }
}