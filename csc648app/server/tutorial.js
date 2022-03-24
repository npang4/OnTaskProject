// This is the mongodb connection for atlas database
// just copy and paste these three lines of code
// Any questions just ask me!!! - Chris

// npm i mongodb

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chris:hello123@cluster0.t2ipb.mongodb.net/todo-list?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    // boiler plate
    // could change this
    const db = client.db('<CAN CHANGE THIS>')

    // change port number
    const port = process.env.PORT || 4002;
    const express = require('express');
    const app = express();

    app.use(express.json());

    // api call to get the todolist
    app.get('/api/tasks/getTodoList', (req, res) => {
        console.log("BACKEND getTodoList: ")

        // currently the search is hardcoded to match id 0, but should later be changed to match the specific todolist
        db.collection('todolist').aggregate([{ $match: { "id": 0 }}]).toArray(function (err, result) {
            // .find()
            // .insertOne()
            // .delete()
            // // send

            console.log(result);
            res.send(result);
        })
    })



    app.listen(port);
    console.log(`Listening on port ${port}`);
})
