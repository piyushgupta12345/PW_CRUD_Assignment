// import model
const User = require("../models/userModel");

// import bcrypt
const bcrypt = require("bcrypt")


exports.signUp = async (req, res) =>{
    try {
        // extract the value from model
        const{name, email, password} = req.body;

        // check already existuser or not
        const existUser = User.findOne({email});

        if(existUser){
            return res.status(200).json(
                {
                    success:false,
                    msg:"User already exist"
                }
            )
        }

        // secure password
        let hashpassword;
        try {
        hashpassword = await bcrypt.hash(password,10)

        } catch (error) {
            console.error(error);
            res.status(500).json(
                {
                    success:false,
                    msg:"error hashing password"
                }
            )
        }

        // create user in db
        const user = await User.create({name, email, password:hashpassword});
        

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
                msg:"User not create beacuse server issus"
            }
        )
    }
}