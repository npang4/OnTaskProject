// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const express = require("express");

const app = express();
const sessions = require("express-session");
var session
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "csc648secretkey",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.use(express.json());

// start of the todo backend
client.connect((err) => {
  // determines which collection to read out of
  const db = client.db("todo-list");

  // const port = process.env.PORT || 4001;

  // all of the required things
  var bcrypt = require("bcrypt");

  // use this instead of body-parser, its easier @RJ


  // ************************************************
  // ADD SESSION HERE
  // var session = require('express-session');
  // app.use(session({secret: 'your secret', saveUninitialized: true, resave: false}))



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
  app.post("/api/register", (req, res) => {
    bcrypt.hash(req.query.password, 10, function (err, hashedPass) {
      if (err) {
        console.log("error");
        res.send(false);
      }
      const user = db.collection("user-list").insertOne({
        name: req.query.name,
        email: req.query.email,
        password: hashedPass,
        userid: Math.floor(Math.random() * 100) + 1,
        todolistId: []
      });
      user
        .then((data) => {
          console.log("success");
          res.send(true);
        })
        .catch((err) => {
          console.log("error");
        });
    });
  });

  // API call for logging in
  // REQUIRED QUERIES: email, password
  // Recieving: userid
  // Backend todo: re-add bcrypt, send back userid (change from the boolean), create session variable
  app.get("/api/login", (req, res, next) => {
    let email = req.query.email;
    let password = req.query.password;
    console.log("email: " + req.query.email);
    console.log("password: " + password);
    var sessions; //var to save session
    db.collection("user-list")
      .findOne({ $or: [{ email: email }] })
      .then((user) => {
        if (user) {
          bcrypt.compare(password, user.password, function (err, result) {
            if (!result) {
              console.log("passwords don't match");
              // res.json({message: "password doesn't match"})
              res.send(false);
            } else {
              console.log(user.userid)
              console.log("LOGIN WORKS");
              console.log(result)
              // res.json({message: "you're logged in!"})
              session = req.session;
              session.userid = user.userid;
              // console.log(req.session);
              res.send(true);
            }
          });
        } else {
          console.log("Not a user");
        }
      });
  });

  // API call for logging out
  // REQUIRED QUERIES: NONE
  // Recieving: NONE
  // Backend todo: implement, destory session variable
  app.get("/api/logout", (req, res) => {
    // implement
    req.session.destroy((err) => {
      if (err) {
        console.log("session couldn't be destroyed");
      } else {
        console.log("session was destroyed");
      }
    });
  });

  // ************************************************
  // START OF THE TODO APIS --> Chris PART!
  // ************************************************

  // API call for getting ALL user tasks
  // REQUIRED QUERIES: NONE (should only be called if user is logged in!!!! or will cause error)
  // Recieving: Array of ALL tasks that belong to the user
  // Backend todo: implement usage of session variable!
  app.get("/api/getAllTasks", (req, res) => {
    console.log("BACKEND getAllTasks: ");

    // currently the search is hardcoded to match id 0, but should later be changed get the userid session variable
    // should also just send back ALL tasks matching user id
    // db.collection('todolist').aggregate([{ $match: { "id": 0 }}]).toArray(function (err, result) {
    //     // get the todolist id, then search the tasks for the todolist
    db.collection("tasks")
      .aggregate([{ $match: { userId: session.userid } }])
      .toArray(function (err, result) {
        // send back to the frontend
        console.log(result);
        res.send(result);
      });
    // })
  });

  // API call for getting specific user todolist
  // REQUIRED QUERIES: NONE (should only be called if user is logged in!!!! or will cause error)
  // Recieving: Array of ALL todolist ids belonging to users, (you should then use this to filter through the tasks (from getalltasks) for the specific tasks per todolist)
  // Backend todo: implement
  app.get("/api/getUserTodo", (req, res) => {
    // return ALL todolists belonging to the user, use session variable to query the todolist in mongodb for user id
    console.log("BACKEND getUserTodoId: " + req.session.userid);
    session=req.session;
    // CHANGE 0 TO SESSION VARIABLE
    db.collection("user-list")
      .aggregate([{ $match: { userid: session.userid } }])
      .toArray(function (err, result) {
        if (result.length > 0) {
          console.log(result[0]);

          // send back the arraylist of ids
          res.send(result[0].todolistId);
        } else {
          res.send(false);
        }
      });
  });

  // get the todolist titles
  app.get("/api/getTodoTitle", (req, res) => {
    // return ALL todolists belonging to the user, use session variable to query the todolist in mongodb for user id
    console.log("BACKEND getUserTodoTitle: " + req.session.userid);
    session=req.session;
    // CHANGE 0 TO SESSION VARIABLE
    db.collection("todolist")
      .aggregate([{ $match: { userId: session.userid } }])
      .toArray(function (err, result) {
        // send back to the frontend
        console.log(result);
        res.send(result);
      });
  });

  // add a todolist
app.post("/api/addTodolist", (req, res) => {
    // return ALL todolists belonging to the user, use session variable to query the todolist in mongodb for user id
    console.log("BACKEND addtodolist: ");
    const id = Math.floor(Math.random() * 100) + 1;
    // adding the todolist
    db.collection("todolist")
      .insertOne({ id: id, title: req.query.title, userId: req.session.userid })
      .then((result) => {
        // adding the todolist id to the user
        db.collection("user-list")
          .aggregate([{ $match: { userid:  req.session.userid } }])
          .toArray(function (err, result) {
            // send back to the frontend
            console.log(result[0]);
            const temp = result[0].todolistId;
            temp.push(id);
            console.log(temp);
            db.collection("user-list")
              .updateOne({ userid:  req.session.userid }, { $set: { todolistId: temp } })
              .then((result) => {
                // send back to the frontend

                res.send(result);
              });
          });
      });
  });

  // API call for adding person to todolist
  // REQUIRED QUERIES: email, todolistId
  // Recieving: Boolean (Whether it worked or not)
  // Backend todo: implement
  app.get("/api/addUser", (req, res) => {
    // implement by verifying user input, then adding the id to the todolist
    console.log("BACKEND addUser: ");

    // confirm user input
    console.log(req.query.email);
    console.log(req.query.todolistId);
    // find the email match to id
    db.collection("user-list")
      .aggregate([{ $match: { email: req.query.email } }])
      .toArray(function (err, result) {
        // check if email exists is correct
        if (result.length > 0) {
          const newState = result[0].todolistId;

          // checking if email is already in the todolist
          let found = false;
          newState.forEach((x) => {
            if (x == req.query.todolistId) {
              found = true;
            }
          });

          if (found) {
            console.log("ALREADY FOUND");
          } else {
            newState.push(req.query.todolistId);
          }

          // add it to the list
          db.collection("user-list")
            .updateOne(
              { email: req.query.email },
              { $set: { todolistId: newState } }
            )
            .then((response) => {
              console.log("Done");
            });
          res.send(true);
        } else {
          console.log(result);
          res.send(false);
        }
      });
  });

  // ************************************************
  // START OF THE TASK APIS --> KIMS PART!
  // ************************************************

  // API call for adding task
  // REQUIRED QUERIES: title, priority, todolistId (if it belongs to a specific todolist)
  // Recieving: Boolean (Whether it worked or not)
  // Backend todo: implement
  app.post("/api/addTask", (req, res) => {
    // add task
    // if todolistId is not null, make sure you also add a task for everyone that is included on the todolist => viewers array in db
    // make sure you include when pushing to the db: date, userid (u get this from session variable), completed (set as false)
    console.log(req.query.title);
    console.log(req.query.todolistId);
    console.log(req.query.date);
    const todolistId = parseInt(req.query.todolistId);
    session=req.session;
    //check todolist id
    console.log(session.userid)
    db.collection("todolist")
      .aggregate([{ $match: { userId: session.userid } }])
      .toArray(function (err, result) {
        // if todolist id is not null, add task on the todolist
        console.log("RESULT: ")
        console.log(result)
        if (result.length > 0) {
          console.log("Adding Works")
          db.collection("tasks")
            .aggregate([{ $match: { todolistId: result[0].id } }])
            .toArray(function (err, result) {
              const post = db.collection("tasks").insertOne({
                title: req.query.title,
                complete: false,
                todolistId: todolistId,
                userId: session.userid,
                date: req.query.date,
                priority: req.query.priority,
              });
              post
                .then((data) => {
                  res.json(data.insertedId + " is created");
                  console.log(data.insertedId + " data is created");
                })
                .catch((err) => {
                  res.json({ message: err }); //send message if data is not saved
                  res.send(false);
                });
            });
        }
      });
  });

  // API call for deleting a task
  // REQUIRED QUERIES: title
  // Recieving: Boolean (Whether it worked or not)
  // Backend todo: implement
  app.get("/api/deleteTask", (req, res) => {
    // delete task by title
    console.log(req.query.id);
    var ObjectId = require("mongodb").ObjectId;
    var id = req.query.id;
    var o_id = new ObjectId(id);

    db.collection("tasks")
      .aggregate([{ $match: { _id: o_id } }])
      .toArray(function (err, result) {
        console.log(result);
        if (result.length > 0) {
          const deleteTask = db.collection("tasks").deleteOne({ _id: o_id });
          deleteTask.then((data) => {
            console.log(data);
            console.log("delete task successfully");
            res.json({ message: "successful" });
          });
        } else {
          console.log(result);
          res.send(false);
        }
      });
  });

  // API call for adding person to todolist
  // REQUIRED QUERIES: title
  // Recieving: Boolean (Whether it worked or not)
  // Backend todo: implement
  app.post("/api/markComplete", (req, res) => {
    // change complete status of the task!
    // basically just change true or false
    var ObjectId = require("mongodb").ObjectId;
    var id = req.query.id;
    var o_id = new ObjectId(id);

    db.collection("tasks")
      .aggregate([{ $match: { _id: o_id } }])
      .toArray(function (err, result) {
        if (result.length > 0) {
          var bool = false;
          if (result[0].complete) {
            bool = false
          } else {
            bool = true
          }

          console.log(result[0])
          db.collection("tasks")
            .updateOne(
              { _id: o_id },
              { $set: { complete: bool } }
            )
            .then(() => {
              console.log(" uncompleted task to completed task");
              res.send(true);
            })
            .catch((err) => {
              console.log(err);
              res.send(false);
            });
        }
      });
  });
  app.post("/api/unCompleteTask", (req, res) => {
    // change complete status of the task!
    // basically just change true to false
    db.collection("tasks")
      .aggregate([{ $match: { id: req.query.id } }])
      .toArray(function (err, result) {
        if (result.length > 0) {
          db.collection("tasks")
            .updateOne(
              { id: req.query.id, complete: true },
              { $set: { complete: false } }
            )
            .then(() => {
              console.log(" completed task to uncompleted task");
              res.send(true);
            })
            .catch((err) => {
              console.log(err);
              res.send(false);
            });
        }
      });
  });


});

app.listen(4001);
console.log(`Listening on port ${4001}`);
