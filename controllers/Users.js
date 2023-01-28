const User = require("../models/Users");
const crypto = require("crypto");


const getAllUsers = async (req, res)=>{
    const Users =  await User.find();
    res.status(200).json({
        status:"ok",
        data: Users,
    })
};

const addUser = async (req,res) => {
    let { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
        throw new Error("Please provide complete information");
    }
    let newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName= lastName;
    newUser.password = crypto.createHash("sha256").update(password).digest("hex"); 
    newUser.email = email;
    newUser = await newUser.save();
    console.log(newUser)
    res.status(200).json({
        status: 'ok',
        dataInserted: newUser
    })
};

const getByUser =  async(req, res) =>{
      const user = await User.findById(req.params.id)
     res.status(200).json({
         status:`Success`,
         data: user
     })

}
const editUser =  async(req, res) =>{
    let { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
        throw new Error("Please provide complete information");
    }
    const userUpdate = {
        firstName : firstName,
        lastName : lastName,
        password : crypto.createHash("sha256").update(password).digest("hex"), 
        email : email,
    }
    const user = await User.findByIdAndUpdate(req.params.id, userUpdate)

     res.status(200).json({
         status:`Success`,
         data: user
     })
 
}


const deleteUser =  async(req, res, next) =>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)    
        if(!user){
            throw new Error("No existe el ID")
        }
         res.status(200).json({
             status:`Success`,
             data: user
         })
    } catch(e){
        console.log('error',e)
        next(e)
    }
}



module.exports = {
            getAllUsers,
            addUser,
            getByUser,
            editUser,
            deleteUser
}