const express = require('express'); 
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");
const productsController = require("../controllers/productsController");


router.get('/', categoriesController.list);      

router.get('/categories', categoriesController.list); 
router.post('/category/add', categoriesController.add);  
router.patch('/category/update/:id',categoriesController.update);

router.get('/products', productsController.list);  
router.post('/product/add', productsController.add);  
router.patch('/product/update/:id',productsController.update);

router.get('/categories/view', categoriesController.loadview);  //load in pug template  

module.exports = router;                                