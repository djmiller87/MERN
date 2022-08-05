const Product = require('../models/product.model');
const productRoutes = require('../routes/product.routes');

module.exports = {
    findAllProducts: (req, res)=>{
        Product.find()
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err)=>{
                console.log("Find all Products failed");
                res.json({message:"Something went wrong with findAllProducts", error: err})
            })
    },

    createNewProduct: (req,res) =>{
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => {
                console.log("Something went wrong in createNewProduct");
                res.status(400).json(err);
            })
    },

    findOneGame: (req, res)=> {
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => {
                console.log("Find one Product failed!");
                res.json({message:"Something went wrong in findOneProduct", error: err});
            })
    },

    deleteProduct: (req, res) =>{
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct)=>{
                console.log("Delete one Product failed");
                res.json(deletedProduct);
            })
            .catch((err) => {
                console.log("Delete one Product failed");
                res.json({message:"Something went wrong in deleteProduct", error: err})
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true})
            .then((updatedProduct) =>{
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) => {
                console.log("Something went wrong in updateProduct");
                res.status(400).json(err);
            })
    }
}
