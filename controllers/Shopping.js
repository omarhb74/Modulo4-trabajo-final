const Shopping = require("../models/ShoppingCart");

const getShoppingByUser = async (req, res) => {
    // const product = await Product.findById(req.params.id)
    console.log("parametros",req.params.user);
    const shopping = await Shopping.findOne({user:req.params.user, status:"PENDING"})
    console.log('ProductShopping',shopping) 
     res.status(200).json({
         status:`Success`,
         data: shopping
     })
}

const addShopping = async (req,res) => {
    let { user, products } = req.body;
    if (!user || !products) {
        throw new Error("Please provide complete information");
    }
    //verifica si el usuario tiene existe un carrito de compras
    const shopping = await Shopping.findOne({user, status:"PENDING"});
    console.log("shopping retorno",shopping);
    if(shopping!=null){
        products.forEach(element => {
            shopping.products.push(element)
        });
        shopping.totalAmount=shopping.products.length;
        const updateShopping = await Shopping.findByIdAndUpdate(shopping.id, shopping)
        console.log('Shopping',updateShopping) 
        res.status(200).json({
            status:`Success`,
            data: updateShopping
        })
    }else{
        let newShopping = new Shopping();
        newShopping.invoiceNumber = Math.floor(Math.random() * 100) + 1;
        newShopping.status = "PENDING";
        newShopping.totalAmount = products.length;
        newShopping.user = user;
        newShopping.products = products;
        newShopping = await newShopping.save();
        console.log(newShopping)
        res.status(200).json({
            status: 'ok',
            dataInserted: newShopping
        })
    }
};

const payShoppingcart = async (req,res) => {
    const payshoppingcart = await Shoppingcart.findById(req.params.id)
    let invoiceNumber = payshoppingcart.invoiceNumber;
    let status=payshoppingcart.status;
    let totalAmount=payshoppingcart.totalAmount;
    let user=payshoppingcart.user;
    const products = payshoppingcart.products;
    let  shoppingUpdate

    if (products.length>0 && status==="PENDING")
    {
        status="PAID";
    
       
    }
    else
    {
        console.log("ERROR el carrito no tiene productos");

    }

    shoppingUpdate = {
        invoiceNumber,status,totalAmount,user,products
    }
    const shoppingcartUpdate = await Shoppingcart.findByIdAndUpdate(req.params.id,shoppingUpdate)


    console.log('ProductJona',shoppingcartUpdate); 
     res.status(200).json({
         status:`Success`,
         data: shoppingcartUpdate
     })
    } 


module.exports = {
    addShopping,
    getShoppingByUser
    payShoppingcart
}
