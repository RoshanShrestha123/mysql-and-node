const express = require('express');
const app = express();
const cors = require('cors');
const API_ROUTE = require('./routes/api.routes');

app.use(cors());

app.use(express.urlencoded({
    extended:true //-> allows to send nested object
}));

app.use(express.json()); //-> display the data in json [imp];


app.use('/api',API_ROUTE);
//error handling middleware
app.use((err,req,res,next) => {
    if(err){
        console.log(" error in the middleware section");
        res.status(403).json({
            mes: "error catched "
        })
    }
    
    
})

app.listen(4000,(err,res)=>{
    console.log("server started");
})