const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

app.use(express.json()); // Middleware - Accept JSON body
app.use(express.urlencoded({extended:false})); // Middleware - Accept FormURL encode body

app.get('/',(req,res)=>{
    res.send("Hello...");
});

app.get('/blog',(req,res)=>{
    res.send("Hello Blog, My name is Shiran");
});

app.get('/products',async (req,res)=>{

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

app.get('/products/:id', async(req,res)=>{

    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

app.post('/products',async(req,res)=>{

    // console.log("Body",req.body);
    // res.send(req.body);

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});
    }

});

// Update Product - When you update, you have to use PUT or PATCH method.
app.put('/products/:id',async (req,res)=>{

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product)
        {
            return res.status(404).json({message:`Cannot find any product with ID ${id}`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error.message});
    }

});

app.delete('/products/:id', async(req,res)=>{

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            res.status(404).json({message: `Cannot find any product with ID ${id}`});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
});

mongoose.set("strictQuery",false);
mongoose.
    connect('mongodb+srv://admin:admin123@cluster0.fu1t09t.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Connected to MongoDB...");
        app.listen(5000,()=>{
            console.log("Server started on port 5000");
        });
    })
    .catch((error)=>{
        console.log(error);
    });