const express = require('express');
const app = express();
const API_ROUTE = require('./routes/api.routes');

app.use(express.urlencoded({
    extended:true //-> allows to send nested object
}));

app.use(express.json()); //-> display the data in json [imp];

//error handling middleware
app.use((err,rep,res,next) => {

})
app.use('/api',API_ROUTE);


app.listen(3000,(err,res)=>{
    console.log("server started");
})