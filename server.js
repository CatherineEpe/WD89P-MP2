// const express = require('express')
import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
const app = express();

//auto convert text to json if possible
app.use(express.json());
//alow other origin to access our backend
app.use(cors());


  //Before app start, create connection to our mysql database
  const connection = mysql.createConnection({
    host: "localhost", // ip or hostname
    port: 3306,        // port if not using default port which is 3306
    user: "catherine8",      //database username 
    password: "Cath@102820",      //database password
    database: "vnhs_onlineenrollment" // our database name
  });


// For Login and Register

app.post('/login', function (request, response) {
    //request is the data from the frontend
    //response is the function or data from the server or backend
    const usernameFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;

    console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
    console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


    //mysql query to fetch the username and password from the database using the payload from
    //the front end.
    const myQuery = `SELECT * FROM vnhs_onlineenrollment.login_register where username = "${usernameFromFrontEnd}"`;
    //in short select user from database where username = payload.username and password = payload.password
  
      
    connection.query(myQuery, function (err, result) {
      if (err) throw err; 
      console.log("id result from database: ", result);
      if (result && result[0] && result[0].id) {
        const hashedPassword = result[0].password;
        // password          , $2b$10etc......
        console.log('password from frontend: ', passwordFromFrontEnd);
        console.log('hashedPassword: ', hashedPassword);
  
        const checkIfPasswordCorrect = bcrypt.compareSync(passwordFromFrontEnd, hashedPassword);
  
        response.send({ "success": checkIfPasswordCorrect })
      } else {
        response.send({ "success": false, "error": "invalid credentials" })
      }
    });
  
    
})

app.post('/register', function (request, response) {
    const usernameFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;

    console.log('usernameFromFrontEnd: ', usernameFromFrontEnd);
    console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);

   //convert normal string to an encrypted string or hash
   const hash = bcrypt.hashSync(passwordFromFrontEnd, 10);

   //instead of saving normal password string, save hash as password
  
   const myQuery = `INSERT INTO vnhs_onlineenrollment.login_register (username, password) VALUES 
       ("${usernameFromFrontEnd}", "${hash}")`;
   connection.query(myQuery, function (err, result) {
     if (err) throw err; //pagnagka error, mag crash
     //check result from our query to the database
     console.log("id result from database: ", result);
   });
   response.send({ "success": true })
    })



console.log('STARTING EXPRESS SERVER')
connection.connect(function(err) {
  if (err) throw err; // nagka error, mag crash yung server
  //once successfully connected to the database, run our query
  console.log('MYSQL DB CONNECTION SUCCESS')
  app.listen(3000)
  console.log('App is now running on port: ', 3000)
});
