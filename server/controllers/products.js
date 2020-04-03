const Product = require("../models/product.js")

module.exports = {
    index: function(req,res){
        Product.find()
            .then(products =>{
                console.log("controller level")
                res.json(products)
            })
            .catch(err => { 
                res.json(err)
            })
    },
    create: function( req,res ){
        let product = new Product()
        product.name = req.body.name;
        product.quantity = req.body.quantity;
        product.price = req.body.price;
        product.save()
            .then( product => {
                res.json(product)
            })
            .catch(error =>{
                res.json(error)
            })
    },
    // editProduct: function(req,res){
    //     Product.findOne({ _id: req.params.id })
    //         .then(result =>{
    //             console.log("this is", _id)
    //             res.json(result)
    //         })
    //         .catch(err =>{
    //             res.json(err)
    //         })
    // },
    update: function(req, res){
        console.log("update product")
        Product.findOne({ _id: req.params.id })
            .then(product => {
                product.name = req.body.name;
                product.quantity = req.body.quantity;
                product.price = req.body.price;
                return product.save()
                    .then(result =>{
                        console.log(result)
                        res.json(result)
                    })
                    .catch(err =>{
                        console.log("else", err)
                        res.json(err)
                    })
            .catch(err =>{
                console.log("HERE ARE THE", err)
                res.json(err)
            })
        })
    },
    getProduct: function(req, res){
        console.log("product shown")
        Product.findOne({ _id: req.params.id })
            .then(product =>{
                console.log("show them")
                res.json(product);
                console.log(product)
            })
        },
    delete: function (req, res) {
        console.log('delete');
        Product.remove({ _id: req.params.id })
            .then(products => {
                res.json(products)
            })
            .catch(err =>{
                res.json(err)
            })
    }
}

