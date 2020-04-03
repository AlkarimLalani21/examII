const product = require("../controllers/products.js")


module.exports = function(app){
    app.get('/api/products',(req,res)=>{
        product.index(req,res);
    })
    app.post('/api/products/new',(req,res)=>{
        product.create(req,res);
    })
    // app.get('/api/products/:id/update',(req,res)=>{
    //     product.editProduct(req,res);
    // })
    app.get('/api/products/:id/update', (req, res)=>{
        console.log("show")
        product.getProduct(req,res);
    })
    app.put('/api/products/:id',(req,res)=>{
        console.log(req.body)
        product.update(req,res);
    })

    app.delete('/api/products/:id',(req,res)=>{
        product.delete(req,res);
    })
}