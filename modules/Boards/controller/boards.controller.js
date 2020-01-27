const boardModel = require('../model/boards.model');

showBoards = (req,res,next) => {
    const userId = req.userId;
    boardModel.selectAllBoards(userId,(err,result)=>{
        if(err!= null || result.length <=0){
            next(err);
        }else{  
            res.send({
                data:result
            })
        } 
    })    
}

insertBoards = (req,res,next) => {
    const data = req.body;
    const keys = Object.keys(data).join(',');
    const valueArr = Object.values(data).map((value)=>{
        return `'${value}'`;
    });
    const values = valueArr.join(',');
    boardModel.insertNewBoard(keys,values,(err,result)=>{
        console.log("data inserted",err);
    })
}
module.exports = {
    showBoards,
    insertBoards
}