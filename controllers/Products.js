const Product = require("../models/Products");



const getAllProducts = async (req, res)=>{
    const products =  await Product.find();
    res.status(200).json({
        status:"ok",
        data: products,
    })
};

const addProduct = async (req,res) => {
    let newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.unit = req.body.unit;
    newProduct.inventory = req.body.inventory;
    newProduct = await newProduct.save();
    console.log(newProduct)
    res.status(200).json({
        status: 'ok',
        dataInserted: newProduct
    })
};

const getByProduct =  async(req, res) =>{
      const product = await Product.findById(req.params.id)
    console.log('ProductJona',product) 
     res.status(200).json({
         status:`Success`,
         data: product
     })

}
const editProduct =  async(req, res) =>{
    const productUpdate = {
        inventory: req.body.inventory,
        name: req.body.name,
        price: req.body.price,
        unit: req.body.unit,
    }

    console.log('productUpdate',productUpdate)
    const product = await Product.findByIdAndUpdate(req.params.id, productUpdate)


    console.log('ProductJona',product) 
     res.status(200).json({
         status:`Success`,
         data: product
     })
 
}


const deleteProduct =  async(req, res, next) =>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)    
        if(!product){
            throw new Error("No existe el ID")
        }
         res.status(200).json({
             status:`Success`,
             data: product
         })
    } catch(e){
        console.log('error',e)
        next(e)
    }
}



module.exports = {
    getAllProducts,
    addProduct,
    getByProduct,
    editProduct,
    deleteProduct
}