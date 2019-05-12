const path=require('path');
const express= require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
var bodyParser = require('body-parser');
require('./models/User');


console.log(pulicPath);
mongoose.connect(encodeURI(keys.mongoURI), {
  auth: {
    "user": 'lukeliu',
    "password": encodeURI(keys.mongoUserPassWord),
  },
  useNewUrlParser: true
}).then(() => console.log("DB Connected"))
.catch(e => console.log(e));

const app=express();

app.use(bodyParser.json());

require('./routes/Route')(app);

if(process.env.NODE_ENV==="production"){
  const build=path.join(__dirname,'client','build')
  app.use(express.static(build));
  app.get('*'),(req,res)=>{
    res.sendFile(path.join(build,"index.html"))        
  };
}



const PORT=process.env.PORT || 3000;
app.listen(PORT);

