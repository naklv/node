// require('dotenv').config()
// const express = require('express')
// const app = express()
// const port = process.env.PORT||3000;
// app.use(express.json());
// // const nav=require('./firstimprot')
// // console.log(nav.x);
// import Y from './firstimprot.js';
// console.log(Y);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post('/user',(req,res)=>{
//     const {mobile,password} = req.body;
//     res.json( {mobile, password });

// });
// console.log("naveen");
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// import mysql from 'mysql2';
import dotenv from 'dotenv';
import express from 'express';
import Y from './firstimprot.js';
import database from './database.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
 //console.log(database);
// console.log(Y);
// console.log(process);
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.post('/pankaj', (req, res) => {
  const  Name  = req.body.Name;
  // console.log(Name);
  if (Name == 'pankaj') {
    const query = "SELECT name FROM users";

    database.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error executing query', details: err });
      }
      res.json({
        message: 'Query executed successfully',
        data: results
      });
    });
  } else {
    res.status(400).json({ error: 'Invalid name' });
  }
});

app.post('/user', (req, res) => {
  const { mobile, password } = req.body;
  res.json({ mobile, password });
});

console.log("naveen");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
