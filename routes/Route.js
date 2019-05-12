const {  CaculateJson }=require('../services/Caculater');
const mongoose=require('mongoose');
const challengeUsers=mongoose.model('challengeUsers');


module.exports=(app)=>{  

    app.post('/api/submituser', 
    (req, res)=> {
        const name = req.body.name;
        const resultJson=CaculateJson(name); 
        console.log(resultJson);
        new challengeUsers({
            FullName:name,
            FirstName:name.split(' ')[0],
            LastName:name.split(' ')[1]
        }).save((err)=>{console.log("save with err"+err)});
        res.json(resultJson);
    });

};





