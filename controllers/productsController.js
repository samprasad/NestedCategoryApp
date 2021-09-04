const Category = require('../models/Category');  
const Product  = require('../models/Product');  
module.exports.list = async (request,response)=> {
    try {
        const products = await Product.findAll({});
        response.send({data:products}); 
    }  catch (error) {
        response.send({error:error}); 
    }   
}
    
module.exports.add = async (request,response)=> {  
      
    try { 
        const productAdded = await Product.create({ productName: request.body.productName, category_id: request.body.category, price:request.body.price, productUrl:request.body.productUrl });         
        response.send({message:'product added',data:productAdded});           
    }  catch (error) {
        response.send({error:error});         
    }    
} 

module.exports.update = async (request,response)=> { 
    try { 
        const productUpdated = await Product.update({ productName: request.body.productName,category_id: request.body.category, price:request.body.price, productUrl:request.body.productUrl }, {
            where: {
              id: request.params.id   
            }
        });                          
        response.send({message:'product updated',data:productUpdated});  
    }  catch (error) {
        response.send({error:error});            
    }      
}           