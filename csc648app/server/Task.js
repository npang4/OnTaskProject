// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// start of the task backend
client.connect(err => {
    const db = client.db('todo-list')

    const port = process.env.PORT || 4002;
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');

    app.use(express.json());
    app.use(bodyParser.json());
    //import routes
    // const postTaskRoutes = require('../models/AddTask');
    // app.use('/api/tasks',postTaskRoutes)
    // api call to get the task

    
    app.get('/api/getTask/return', (req, res) => {
        console.log("BACKEND getTodoList: ")

            // get the todolist id, then search the tasks for the todolist
            db.collection('tasks').aggregate([{ $match: { "todolistId": 0 }}]).toArray(function (err, result) {

                // send back to the frontend
                console.log(result)
                res.send(result)
            })

    });

    //create data and store into our database
app.post('/api/getTask/add',(req,res)=>{
    const post = db.collection('tasks').insertOne({
        title: req.body.title,
        complete: req.body.complete,
        todolistId: req.body.todolistId,
        date: req.body.date,
        userId: req.body.userId,
        priority: req.body.priority
    });
    post.then(data=>{
        res.json(data.insertedId)
        console.log(data.insertedId+" data is created")
    })
    .catch(err=>{
        res.json({message: err}) //send message if data is not saved

    })
})
//delete task by priority ( only priority 1 can remain)
app.get('/api/getTask/delete/priority', (req, res)=> {


         db.collection('tasks').deleteOne({priority: {$gt:1}})
        .then(()=>{
            
            console.log("deleted task successfully");
            res.redirect('/api/getTask')
        }).catch((err)=>console.log(err));
    
});
//delete task by id
app.get('/api/getTask/delete/:_id', (req, res)=> {

    db.collection('tasks').deleteOne({_id: new ObjectId(req.params._id)})
   .then(()=>{
       console.log("deleted task successfully");
       res.redirect('/api/getTask')
   }).catch((err)=>console.log(err));

});
    app.listen(port);
    console.log(`Listening on port ${port}`);
})