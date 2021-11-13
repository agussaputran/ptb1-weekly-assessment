module.exports={
    parseDataFromBody(req,res){
         if(req.body){
            return req.body;
        }else{
            return res.status(400).send({
                message: 'No Key found'
            });
        }
        }
}