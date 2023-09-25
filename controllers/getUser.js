// import model
const User = require("../models/userModel");


exports.getUser = async (req, res) =>{
    try {
        // extract the value from model
        // const{name, email} = req.body;
        const id = req.params.user;

        // create user in db
        const user = await User.findById({_id: id});

        res.status(200).json(
            {
                success:true,
                data:user,
                msg:"get user successfully"
            }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json(
            {
                success:false,
                msg:"get user internal server issus"
            }
        )
    }
}