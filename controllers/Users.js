const User = require("../models/Users");



const getAllUsers = async (req, res)=>{
    const Users =  await User.find();
    res.status(200).json({
        status:"ok",
        data: Users,
    })
};

const addUser = async (req,res) => {
    let newUser = new User();
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.age = req.body.age;
    newUser.ci = req.body.ci;
    newUser.email = req.body.email;
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
    const userUpdate = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age,
        ci : req.body.ci,
        email : req.body.email,
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