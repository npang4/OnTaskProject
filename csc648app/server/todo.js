// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// start of the todo backend
client.connect(err => {
    // determines which collection to read out of
    const db = client.db('todo-list')

    // const port = process.env.PORT || 4001;

    // all of the required things 
    var bcrypt = require('bcrypt');
    const express = require('express');

    const app = express();

    // use this instead of body-parser, its easier @RJ 
    app.use(express.json());
    
    // ************************************************
    // ADD SESSION HERE
    const session = require('express-session');
    const oneDay = 1000 * 60 * 60 * 24;
    app.use(session({
        secret: "csc648secretkey",
        saveUninitialized: true,
        cookie: {maxAge: oneDay},
        resave: false
    }))

    // ************************************************
    // START OF THE LOGIN APIS --> RJ PART!
    // ************************************************

    // not sure what this does? -- ignore! was just a test.
    // app.get('/api/login/register', (req, res) => {
    //     db.collection('user-list').find({}, {projection: {_id: 1, name: 1, email: 1, password: 1}}).toArray(function(err, result) {
    //         console.log(result)
    //         res.send(result)
    //     })
    // })

    // API call for registering a user 
    // REQUIRED QUERIES: name, email, password
    // Recieving: Boolean (whether it worked or not) 
    // Backend todo: replace body w/ query, error check to make sure it works, send back a boolean
    app.post('/api/register', (req, res) => {
        bcrypt.hash(req.query.password, 10, function(err, hashedPass) {
            if (err) {
                console.log("error")
                // res.json({
                //     error: err
                // })
                res.send(false);
            } 
            const user = db.collection('user-list').insertOne({
                name: req.query.name,
                email: req.query.email,
                password: hashedPass,
                userid: Math.floor(Math.random() * 100) + 1,
            });
            user.then(data=>{
                // res.json({message:'successful'})
                console.log(user);
                console.log("success");
                res.send(true);
            })
            .catch(err=>{
                // res.json({message: err}) //send message if data is not saved
                console.log("error");
            })
        })

    })

    // API call for logging in                     
    // REQUIRED QUERIES: email, password
    // Recieving: userid   
    // Backend todo: re-add bcrypt, send back userid (change from the boolean), create session variable         
    app.get('/api/login', (req, res, next) => {
        let email = req.query.email;
        let password = req.query.password;
        console.log("email: " +  req.query.email);
        console.log("password: " + password);
        var sessions; //var to save session
        db.collection('user-list')
        .findOne({$or: [{email: email}]})
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (!result) {
                        console.log("passwords don't match");
                        // res.json({message: "password doesn't match"})
                        res.send(false);
                    } else {
                        console.log("LOGIN WORKS");
                        // res.json({message: "you're logged in!"})
                        sessions = req.session;
                        sessions.userid = req.query.userid;
                        console.log(req.session);
                        res.send(true);
                    }
                 })
            } else {
                console.log(("Not a user"));
            }
        })
    })

    // API call for logging out
    // REQUIRED QUERIES: NONE
    // Recieving: NONE   
    // Backend todo: implement, destory session variable
    app.get('/api/logout',(req,res) => {
        // implement
        req.session.destroy((err) => {
            if (err) {
                console.log("session couldn't be destroyed");
            } else {
                console.log("session was destroyed");
            }
        })
    })

    // ************************************************
    // START OF THE TODO APIS --> Chris PART!
    // ************************************************

    // API call for getting ALL user tasks
    // REQUIRED QUERIES: NONE (should only be called if user is logged in!!!! or will cause error)
    // Recieving: Array of ALL tasks that belong to the user
    // Backend todo: implement usage of session variable!
    app.get('/api/getAllTasks', (req, res) => {
        console.log("BACKEND getAllTasks: ")

        // currently the search is hardcoded to match id 0, but should later be changed get the userid session variable
        // should also just send back ALL tasks matching user id
        db.collection('todolist').aggregate([{ $match: { "id": 0 }}]).toArray(function (err, result) {
            // get the todolist id, then search the tasks for the todolist
            db.collection('tasks').aggregate([{ $match: { "todolistId": result[0].id }}]).toArray(function (err, result) {
                // send back to the frontend
                console.log(result)
                res.send(result)
            })
        })
    })

    // API call for getting specific user todolist
    // REQUIRED QUERIES: NONE (should only be called if user is logged in!!!! or will cause error)
    // Recieving: Array of ALL todolist ids belonging to users, (you should then use this to filter through the tasks (from getalltasks) for the specific tasks per todolist)
    // Backend todo: implement
    app.get('/api/getUserTodo', (req,res) => {
        // return ALL todolists belonging to the user, use session variable to query the todolist in mongodb for user id
    })

    // API call for adding person to todolist
    // REQUIRED QUERIES: email
    // Recieving: Boolean (Whether it worked or not)
    // Backend todo: implement
    app.post('/api/addUser',(req,res) => {
        // implement by verifying user input, then adding the id to the todolist
        
    })

    // ************************************************
    // START OF THE TASK APIS --> KIMS PART!
    // ************************************************

    // API call for adding task
    // REQUIRED QUERIES: title, priority, todolistId (if it belongs to a specific todolist)
    // Recieving: Boolean (Whether it worked or not)
    // Backend todo: implement
    app.post('/api/addTask', (req,res) => {
        // add task
        // if todolistId is not null, make sure you also add a task for everyone that is included on the todolist => viewers array in db 
        // make sure you include when pushing to the db: date, userid (u get this from session variable), completed (set as false)   

    })

    // API call for deleting a task
    // REQUIRED QUERIES: title
    // Recieving: Boolean (Whether it worked or not)
    // Backend todo: implement
    app.post('/api/deleteTask', (req,res) => {
        // delete task by title
        
    })

    // API call for adding person to todolist
    // REQUIRED QUERIES: title
    // Recieving: Boolean (Whether it worked or not)
    // Backend todo: implement
    app.post('/api/completeTask', (req,res) => {
        // change complete status of the task!
        // basically just change true or false
    })

    app.listen(4001);
    console.log(`Listening on port ${4001}`);
})

