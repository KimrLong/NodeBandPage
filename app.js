const express = require('express');
const app = express();
//ejs
app.set( "view engine", "ejs");
//public
app.use(express.static('public'));



//route ref
app.use(require('./routes/index'))
app.use(require('./routes/album'))




app.listen(3000, ()=>{

    console.log('server is running on port 3000');
})