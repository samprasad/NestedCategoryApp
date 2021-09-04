const Category = require('../models/Category');  
module.exports.list = async (request,response)=> {
    try {
        const categories = await Category.findAll({});
        response.send({data:categories}); 
    }  catch (error) {
        response.send({error:error}); 
    }   
}

module.exports.add = async (request,response)=> {    
    try { 
        const categoryAdded = await Category.create({ categoryName: request.body.categoryName, parentCategory: request.body.parentCategory, categoryUrl:request.body.categoryUrl });
        response.send({message:'category added',data:categoryAdded});  
    }  catch (error) {
        response.send({error:error});         
    }    
} 

module.exports.update = async (request,response)=> { 
    try { 
        const categoryUpdated = await Category.update({ categoryName: request.body.categoryName ,parentCategory: request.body.parentCategory, categoryUrl:request.body.categoryUrl }, {
            where: {
              id: request.params.id   
            }
        });           
        response.send({message:'category updated',data:categoryUpdated});  
    }  catch (error) {
        response.send({error:error});          
    }      
} 

module.exports.loadview = async (request,response)=> {
    const categories = await Category.findAll({});
    response.render('home',{categories:categories});     
}
