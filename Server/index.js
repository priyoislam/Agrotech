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

app.get("/avlproduct", (req,res) => {
    connection.query (`SELECT * FROM available_product`, (error, rows,fields)=> {
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

app.get("/supply", (req,res) => {
    connection.query (`SELECT * FROM food`, (error, rows,fields)=> {
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

//CATTLE
app.post ("/updatecattle", (req,res) => {
     connection.query(`UPDATE cow SET ${req.body[1]}= ? WHERE Co_ID = ?`, [req.body[2],req.body[0]], (error, rows,fields)=>{
        if(!!error){
            console.log("error in query");
        }
        else{
            console.log("successfull query");
        }
        console.log(rows)
    });
    console.log(req);
})
app.delete("/deletecattle",(req,res) => {
    const info = req.body;
    connection.query(`DELETE FROM cow WHERE Co_ID = ${info[0]}`, (error, rows, fields) => {
        // connection.query(`INSERT INTO cow SET ?`, info,(error, rows,fields)=>{
            if(!!error){
                console.log("error in query");
            }
            else{
                console.log("successfull query");
            }
            console.log("rows",rows)
            console.log("allinfo",info[0]);
        });

    console.log("info",info[0]);
})
//${info[0]},${info[1]},${info[2]},${info[3]},${info[4]},${info[5]},${info[6]},${info[7]},${info[8]},${info[9]}
app.post ("/insertcattle", (req,res) => {
    const info = req.body;
    const id = info[0];
    const brID = info[1];
    const type = info[2];
    const gender = info[3];
    const color = info[4];
    const weight = info[5];
    const mp = info[6];
    const fi = info[7];
    const sn = info [8];
    const st = info [9];
    const values = [[id,brID,type,gender,color,weight,mp,fi,sn,st]];
    // connection.query(`INSERT INTO cow (Co_ID,Br_ID, Co_Type,Co_Gender, Co_Color, Co_Weight, Co_MilkProduction, Co_FoodIntake, Co_Shed_No, Co_Status) VALUES (1,2,3,4,5,6,7,8,9,10)`, (error, rows, fields) => {
    connection.query(`INSERT INTO cow VALUES ?`, [values],(error, rows,fields)=>{
        if(!!error){
            console.log("error in query");
        }
        else{
            console.log("successfull query");
        }
        console.log(rows)
        console.log(`info${info[0]}`);
    });
   console.log(req);
})

//GOAT
app.post ("/updategoat", (req,res) => {
    connection.query(`UPDATE goat SET ${req.body[1]}= ? WHERE G_ID = ?`, [req.body[2],req.body[0]], (error, rows,fields)=>{
       if(!!error){
           console.log("error in query");
       }
       else{
           console.log("successfull query");
       }
       console.log(rows)
   });
   console.log(req);
})

app.post ("/insertgoat", (req,res) => {
    const info = req.body;
    const id = info[0];
    const brID = info[1];
    const type = info[2];
    const gender = info[3];
    const color = info[4];
    const weight = info[5];
    const mp = info[6];
    const fi = info[7];
    const sn = info [8];
    const st = info [9];
    const values = [[id,brID,type,gender,color,weight,mp,fi,sn,st]];
    // connection.query(`INSERT INTO goat (Co_ID,Br_ID, Co_Type,Co_Gender, Co_Color, Co_Weight, Co_MilkProduction, Co_FoodIntake, Co_Shed_No, Co_Status) VALUES (1,2,3,4,5,6,7,8,9,10)`, (error, rows, fields) => {
    connection.query(`INSERT INTO goat VALUES ?`, [values],(error, rows,fields)=>{
        if(!!error){
            console.log("error in query");
        }
        else{
            console.log("successfull query");
        }
        console.log(rows)
        console.log(`info${info[0]}`);
    });
   console.log(req);
    // const info = req.body;
    // const id = info[0];
    // const brID = info[1];
    // const type = info[2];
    // const gender = info[3];
    // const color = info[4];
    // const weight = info[5];
    // const mp = info[6];
    // const fi = info[7];
    // const sn = info [8];
    // const st = info [9];
    // const values = [[id,brID,type,gender,color,weight,mp,fi,sn,st]];
    // connection.query(`INSERT INTO cow (Co_ID,Br_ID, Co_Type,Co_Gender, Co_Color, Co_Weight, Co_MilkProduction, Co_FoodIntake, Co_Shed_No, Co_Status) VALUES (1,2,3,4,5,6,7,8,9,10)`, (error, rows, fields) => {
//     connection.query(`INSERT INTO goat VALUES ?`, [values],(error, rows,fields)=>{
//         if(!!error){
//             console.log("error in query");
//         }
//         else{
//             console.log("successfull query");
//         }
//         console.log(rows)
//         console.log(`info${info[0]}`);
//     });
//    console.log(req);
})

app.delete("/deletegoat",(req,res) => {
    const info = req.body;
    connection.query(`DELETE FROM goat WHERE G_ID = ${info[0]}`, (error, rows, fields) => {
        // connection.query(`INSERT INTO cow SET ?`, info,(error, rows,fields)=>{
            if(!!error){
                console.log("error in query");
            }
            else{
                console.log("successfull query");
            }
            console.log("rows",rows)
            console.log("allinfo",info[0]);
        });

    console.log("info",info[0]);
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