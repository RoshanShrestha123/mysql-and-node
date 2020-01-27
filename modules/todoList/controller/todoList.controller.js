const listModel = require('../model/todoList.model');
showList = (req,res,next) => {
    const userId = req.userId;
    const id = req.params.id;
    console.log(" id in the paramerter is: ",id)
    listModel.selectList(userId,id,(err,result)=>{
       if(err!= null || result.length <=0 ){
           next(err);
       }else{
           res.send({
               data:result
           })
           console.log('todo list here>> ');
       }
    })
}
addNewList = (req,res) => {
    const data = req.body;
    const keys = Object.keys(data).join(',');
    const valueArr = Object.values(data).map((value)=>{
        return `'${value}'`;
    });
    const values = valueArr.join(',');
    listModel.insertList(keys,values,(err,result)=>{
        if(err!= null) { next(err); } else{
            console.log("data inserted sucessfully");
        }
    })
    
}

module.exports = {
    showList
}