const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "farm"
    }
);

connection.connect ( error => {
    if(!!error){
        console.log("error");
    }
    else{
        console.log("connected");
    }
})

app.get("/cattle", (req,res) => {
    connection.query ("SELECT * FROM cow", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/goat", (req,res) => {
    connection.query ("SELECT * FROM goat", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get("/chicken", (req,res) => {
    connection.query ("SELECT * FROM chicken", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get("/duck", (req,res) => {
    connection.query ("SELECT * FROM duck", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/fish", (req,res) => {
    connection.query ("SELECT * FROM fishery", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/equipment", (req,res) => {
    connection.query ("SELECT * FROM equipment", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/employee", (req,res) => {
    connection.query ("SELECT * FROM employee", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/monitoring", (req,res) => {
    connection.query ("SELECT * FROM monitoring", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/admin", (req,res) => {
    connection.query ("SELECT * FROM admin inner join a_email using (A_ID) inner join a_phone using (A_ID)", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
app.get("/buyer", (req,res) => {
    connection.query ("SELECT * FROM buyer inner join b_email using (B_ID) inner join b_phone using (B_ID)", (error, rows,fields)=> {
        if(!!error) {
            console.log("error in query");
        }
        else{
            console.log("successful query");
            console.log(rows);
            res.send(rows);
        }
    })
})
// app.get("/equipment", (req,res) => {
//     connection.query ("SELECT * FROM equipment", (error, rows,fields)=> {
//         if(!!error) {
//             console.log("error in query");
//         }
//         else{
//             console.log("successful query");
//             console.log(rows);
//             res.send(rows);
//         }
//     })
// })
app.listen(2800, () => console.log("listening to port 2800"));