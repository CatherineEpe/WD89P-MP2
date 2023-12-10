// const express = require('express')
import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();

//auto convert text to json if possible
app.use(express.json());
//alow other origin to access our backend
app.use(cors());





// For Student Login and Register

app.post('/login', function (request, response) {
    //request is the data from the frontend
    //response is the function or data from the server or backend
    const lrnFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;

    console.log('lrnFromFrontEnd: ', lrnFromFrontEnd);
    console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


    //mysql query to fetch the username and password from the database using the payload from
    //the front end.
    const myQuery = `SELECT * FROM vnhs.student
    where lrn = "${lrnFromFrontEnd}" and password = "${passwordFromFrontEnd}"`;
    //in short select user from database where username = payload.username and password = payload.password
  

    //mysql package function that we will call to establish or create connection to our database
    //create connection to our mysql database
    const connection = mysql.createConnection({
        host: "localhost", // ip or hostname
        port: 3306,        // port if not using default port which is 3306
        user: "catherine8",      //database username 
        password: "Cath@102820",      //database password
        database: "vnhs" // our database name
      });
      
      //once a connection is created, connect.
      connection.connect(function(err) {
        if (err) throw err; // nagka error, mag crash yung server
        //once successfully connected to the database, run our query
        connection.query(myQuery, function (err, result) {
          if (err) throw err; //pagnagka error, mag crash
          //check result from our query to the database
          console.log("id result from database: ", result);
        });
      });
    
    response.send({"success": true})
})

app.post('/register', function (request, response) {
    const lrnFromFrontEnd = request.body.username;
    const passwordFromFrontEnd = request.body.password;

    console.log('lrnFromFrontEnd: ', lrnFromFrontEnd);
    console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


    //mysql query to fetch the username and password from the database using the payload from
    //the front end.
    const myQuery = `INSERT INTO vnhs.student (lrn, password) VALUES ("${lrnFromFrontEnd}", "${passwordFromFrontEnd}")`;
    //in short select user from database where username = payload.username and password = payload.password
  

    //mysql package function that we will call to establish or create connection to our database
    //create connection to our mysql database
    const connection = mysql.createConnection({
        host: "localhost", // ip or hostname
        port: 3306,        // port if not using default port which is 3306
        user: "catherine8",      //database username 
        password: "Cath@102820",      //database password
        database: "vnhs" // our database name
      });
      
      //once a connection is created, connect.
      connection.connect(function(err) {
        if (err) throw err; // nagka error, mag crash yung server
        //once successfully connected to the database, run our query
        connection.query(myQuery, function (err, result) {
          if (err) throw err; //pagnagka error, mag crash
          //check result from our query to the database
          console.log("id result from database: ", result);
        });
      });
    
    response.send({"success": true})
})



//For teacher Login and Register

app.post('/login2', function (request, response) {
  //request is the data from the frontend
  //response is the function or data from the server or backend
  const userNameFromFrontEnd = request.body.userName;
  const passwordFromFrontEnd = request.body.password;

  console.log('userNameFromFrontEnd: ', userNameFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


  //mysql query to fetch the username and password from the database using the payload from
  //the front end.
  const myQuery = `SELECT * FROM vnhs.teacher
  where userName = "${userNameFromFrontEnd}" and password = "${passwordFromFrontEnd}"`;
  //in short select user from database where username = payload.username and password = payload.password


  //mysql package function that we will call to establish or create connection to our database
  //create connection to our mysql database
  const connection = mysql.createConnection({
      host: "localhost", // ip or hostname
      port: 3306,        // port if not using default port which is 3306
      user: "catherine8",      //database username 
      password: "Cath@102820",      //database password
      database: "vnhs" // our database name
    });
    
    //once a connection is created, connect.
    connection.connect(function(err) {
      if (err) throw err; // nagka error, mag crash yung server
      //once successfully connected to the database, run our query
      connection.query(myQuery, function (err, result) {
        if (err) throw err; //pagnagka error, mag crash
        //check result from our query to the database
        console.log("id result from database: ", result);
      });
    });
  
  response.send({"success": true})
})

app.post('/register2', function (request, response) {
  const userNameFromFrontEnd = request.body.userName;
  const passwordFromFrontEnd = request.body.password;

  console.log('userNameFromFrontEnd: ', userNameFromFrontEnd);
  console.log('passwordFromFrontEnd: ', passwordFromFrontEnd);


  //mysql query to fetch the username and password from the database using the payload from
  //the front end.
  const myQuery = `INSERT INTO vnhs.teacher (userName, password) VALUES ("${userNameFromFrontEnd}","${passwordFromFrontEnd}" )`;
  //in short select user from database where username = payload.username and password = payload.password


  //mysql package function that we will call to establish or create connection to our database
  //create connection to our mysql database
  const connection = mysql.createConnection({
      host: "localhost", // ip or hostname
      port: 3306,        // port if not using default port which is 3306
      user: "catherine8",      //database username 
      password: "Cath@102820",      //database password
      database: "vnhs" // our database name
    });
    
    //once a connection is created, connect.
    connection.connect(function(err) {
      if (err) throw err; // nagka error, mag crash yung server
      //once successfully connected to the database, run our query
      connection.query(myQuery, function (err, result) {
        if (err) throw err; //pagnagka error, mag crash
        //check result from our query to the database
        console.log("id result from database: ", result);
      });
    });
  
  response.send({"success": true})
})
app.listen(3000)