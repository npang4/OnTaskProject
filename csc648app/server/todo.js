// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// start of the todo backend
client.connect(err => {
    const db = client.db('todo-list')

    const port = process.env.PORT || 4001;
    const express = require('express');
    // const path = require('path');
    

    const app = express();
    // express is not good for production static files, use cdn, or dedicated file server like ngnix, appache
    // app.use(express.static(path.join(__dirname, '..', 'build')));


    app.use(express.json());
    
    // api call to get the todolist
    app.get('/api/todo/getTodoList', (req, res) => {
        console.log("BACKEND getTodoList: ")

        // currently the search is hardcoded to match id 0, but should later be changed to match the specific todolist
        db.collection('todolist').aggregate([{ $match: { "id": 0 }}]).toArray(function (err, result) {
            // get the todolist id, then search the tasks for the todolist
            db.collection('tasks').aggregate([{ $match: { "todolistId": result[0].id }}]).toArray(function (err, result) {

                // send back to the frontend
                console.log(result)
                res.send(result)
            })
        })
    })

    // app.use((req, res, next) => {
    //     res.status(404).json({ message: "Route not found" });
    //   })


    app.listen(port);
    console.log(`Listening on port ${port}`);
})
