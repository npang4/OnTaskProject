const express = require('express');
const server = require('http');
const httpProxy = require('http-proxy');

const app = express();
const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});

// for todo!! http://3.17.72.162/process.env.TODO_HOST ||  http://localhost:4001
const todoHost = process.env.TODO_HOST ||  'http://localhost:4001';
console.log(`todo end proxies to: ${todoHost}`);  
app.all('/api/todo*', (req, res) => {         
  apiProxy.web(req, res, { target: todoHost });  
});

// commented for prototype
const usersHost = process.env.USERS_HOST || 'http://localhost:4003';    
console.log(`login end proxies to: ${usersHost}`);  
app.all('/api/login*', (req, res) => {         
  apiProxy.web(req, res, { target: usersHost });  
});

// const taskHost = process.env.TASK_HOST || 'http://localhost:4002';    
// console.log(`task end proxies to: ${taskHost}`);  
// app.all('/api/getTask*', (req, res) => {         
//   apiProxy.web(req, res, { target: taskHost });  
// });

// // front end proxy
// const frontEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';
// console.log(`Front end proxies to: ${frontEndHost}`);
// app.all('/*', (req, res) => {
//   // for frontend
//   apiProxy.web(req, res, { target: frontEndHost });
// });

appServer.listen(4000);
console.log('Gateway started');