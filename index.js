require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT||3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user',(req,res)=>{
    const {mobile,password} = req.body;
    res.json( {mobile, password });

});
console.log("naveen");
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})