const model = require('../model/productModel');
const { findById } = require('../model/userModel');


module.exports ={
  product : async (req , res)=>{
        try {
            const { name, description, price,discount, category, images, stock, rating ,reviews , tags } = req.body;
            const newProduct = new model({
                name,
                description,
                price,discount,
                category,
                images,
                stock, rating , reviews , tags
              });
              const saveProduct = await newProduct.save();
             res.status(201).json({
                message :'Product created successfully!',
                product : saveProduct
             })
   
        } catch (error) {
            res.status(500).json({ message: 'Error occurred while creating product', error: error.message }); 
        }
      },

      getAllProducts : async (req, res) => {
        try {
            const products = await model.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error occurred while fetching products', error: error.message }); 
        }
      },

        getProductById : async (req, res) => {
            try {
                const product = await findById(req.params.productId);
                if(!product){
                    res.status(404).send({message: 'Product not found'})
                }
                res.status(200).json(product)
                
            } catch (error) {
                res.status(500).json({ message: 'Error occurred while fetching products', error: error.message });  
            }
        },

        updateProduct : async (req , res)=>{
            try {
                const updatedProduct = await model.findByIdAndUpdate(
                    req.params.productId,
                    req.body,
                    {new : true}
                );

                if(!updatedProduct) {
                    return res.status(404).json({ message: 'Product not found' });
                }
                res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
                
            } catch (error) {
                res.status(500).json({ message: 'Error occurred while updating product', error: error.message });  
            }
        },

        deleteProduct : async (req , res)=>{
            try {
             const deletedProduct = await model.findByIdAndDelete(req.params.productId);
              if(!deletedProduct){
                return res.status(404).json({message : 'Product not found'  })
              } 
              res.status(200).json({ message: 'Product deleted successfully' }) 
            } catch (error) {
                res.status(500).json({ message: 'Error occurred while deleting product', error: error.message });  
            }
        }

}