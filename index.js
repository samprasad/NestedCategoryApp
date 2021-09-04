const express = require('express');
const cors    = require('cors');

//Configs
require('./config/connection');

//Routes
const router  = require('./routes/routes');
const app     = express();

app.use(cors());   // use cors package    

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));  

app.engine('pug', require('pug').__express); 
app.set("view engine","pug");     //set template engine to pug
app.set("views","./views"); 
  
app.use('/', router);        

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '5000';
app.set('port', port);

app.listen(port, () => console.log(`Node Server running on localhost:${port}`));

module.exports = app;   