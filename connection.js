const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser =require('body-parser');
//const JSAlert = require('js-alert');
//const dateFormat = require('dateformat');

const app = express();

var  urlencodedParser = bodyParser.urlencoded({extended : true});

//const now = new Date();
//dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

const timesheetSql = "SELECT * FROM timesheet ORDER BY StartDate DESC";
const clientSql = "SELECT * FROM client";
const empSql = "SELECT * FROM employee";


app.use(cors());
 
    //creates database connection
    const connection = mysql.createConnection
    ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'react_sql'
    });

    //connects to database
    connection.connect(err =>
        {
            if(err)
            {
                return console.log(err);
            }
            else
            {
                console.log('connection successful');
            }
        });


    //root
    app.get('/', (req, res) =>
    {
        res.send('go to /timesheet to see timesheet')
    });

    //gets info from timesheet table
    app.get('/timesheet', (req, res) =>
    {
        connection.query(timesheetSql, (err,results) =>
        {
            if(err)
            {
                return res.send(err)
            }
            else
            {
                return res.json({
                    data: results
                })
            }
        });
    });

    //gets info from client table
    app.get('/client', (req, res) =>
    {
        connection.query(clientSql, (err,results) =>
        {
            if(err)
            {
                return res.send(err)
            }
            else
            {
                return res.json({
                    data: results
                })
            }
        });
    });

    
    //gets info from employee table
    app.get('/employee', (req, res) =>
    {
        connection.query(empSql, (err,results) =>
        {
            if(err)
            {
                return res.send(err)
            }
            else
            {
                return res.json({
                    data: results
                })
            }
        });
    });

    //adds to client
    app.post('/addClient', urlencodedParser, function(req, res)
    {
        var insertSql = "INSERT INTO `client`(name, position) VALUES('"+req.body.name+"', '"+req.body.position+"')";

        //console.log(req.body);

        connection.query(insertSql, function(err, rows)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.redirect("http://localhost:3000/client");
            }
        });
    });

//insert to timesheet table
app.post('/addTimesheet', urlencodedParser, function(req, res)
{
    
    var insertSql = "INSERT INTO `timesheet`(Title, Client, StartDate, EndDate, Comments) VALUES('"+req.body.title+"', '"+req.body.client+"', '"+req.body.sDate+"', '"+req.body.eDate+"','"+req.body.comment+"')";

    connection.query(insertSql, function(err,rows)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect("http://localhost:3000/home");
        }
    });
});

//insert to employee table
app.post('/addEmployee', urlencodedParser, function(req, res)
{
    
    var insertSql = "INSERT INTO `employee`(firstName, lastName, address, phoneNumber, email, password) VALUES('"+req.body.firstName+"', '"+req.body.lastName+"', '"+req.body.address+"', '"+req.body.phoneNumber+"','"+req.body.emailAddr+"', '"+req.body.password+"')";

    connection.query(insertSql, function(err,rows)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            
            res.redirect("http://localhost:3000/addEmployee");
        }
    });
});
 

 
    //test if listening on server
app.listen(4000, () =>
{
    console.log('Listening on port 4000')
});