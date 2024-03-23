const UserSignup = require("../Models/TeacherModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const LoginCont =async (req, res) => {
    
    const {email, password}= req.body;

    try {
        const existinguser = await UserSignup.findOne({ email: email });
        if (!existinguser) {
            return res.status(404).json({ message: "user not exist" });
        }

        const matchPassword = await bcrypt.compare(password, existinguser.password);
        if(!matchPassword)
        {
            return res.status(400).json({message:"Invlaid password"});
        }

        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, SECRET_KEY);
        res.status(200).json({ user: existinguser, token: token });
        
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({ message: "Something went wrog" });
    }


}
module.exports =  LoginCont;