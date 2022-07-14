- [Node module](#node-module)
- [Callback function](#callback-function)
- [Important Node module to create a server](#important-node-module-to-create-a-server)
  - [HTTP module](#http-module)
  - [Path module](#path-module)
  - [File system module](#file-system-module)
- [Express](#express)
  - [REST end point](#rest-end-point)
  - [Route](#route)
- [MongoDB](#mongodb)
# Node module
- 3 categories:
    - File-based module: Define the node module within a file -> Make use of it in the application
    - Core modules: Already part of Node -> Provide functionality for external designers to add their own module
    - External Node module: Developed by third-party. When installed will be specified by 3 number (Major version).(Minor Version).(Patch) in the package.json file
      - Major version: Can introduce breaking changes `npm install express@4.0.0`
      - Minor version: Introduce minor changes -> Won't break code `npm install express@"~4.0.0"`
      - Patch: A bug fixed version when a small bug is discovered `npm install express@"^4.0.0"`
- Use node module within another Node file using `require()` function 
  - File-based Node module: `require(./module_name)`
  - Core and external module: `require('module_name')`
- Create a new node application
``` 
npm init
```
- In the package.json file, add a script to start the index.js file on command npm start
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
```

# Callback function
- Callback function: A function that is passed into another function as an argument
- Node.js is organized into single thread event loop: Pick up requests as they come in -> Execute one at a time -> When the long running computation is done -> The callback request will be push in the queue of requests
> Functions are not executed in order, but in when they make the requests 
- On asynchronous computer -> When a computation takes time to return results -> The function is paaed into it as a callback function after the computation is done 

# Important Node module to create a server
## HTTP module
- Using the http module
``` Javascript
const fs = require('http')
```
- `createServer()` function take a callback function as a parameter. The callbac function has 2 parameter req and res 
  - Req: Contain information about the request made by the client -> Use it to construct the responding message
  - Res: The response message is constructed using the res 
``` Javascript
const server = http.createServer(function(req,res){...});
```
- Start the server using 
``` Javascript
server.listen(port,...);
```

## Path module
- Using the path module
``` Javascript
const fs = require('path')
```
- The `resolve()` method convert a relative path to an absolute path (the entire path for the file)
``` Javascript
path.resolve('./public' + fileURL);
``` 

## File system module
- Allow read and write of files in the local file system
- Using the file system module
``` Javascript
const fs = require('fs')
```
- Check if a file exist
``` Javascript
fs.exists(filePath,function(exists){...})
```
- Read from a file: Read from a file at filePath -> The read stream is piped into the response message
``` Javascript
fs.createReadStream(filePath).pipe(res)
```

# Express
- A framework for Node.js to build server-side application
- Middleware: Plug-in functionality that enhance Express application
- Using the express module
``` Javascript
const express = require('express');
// Create an express application
const app = express();

// Set up the server
app.use((req, res, next) => {...});
```
- To use a middleware
``` Javascript
const bosyParser = require('body-parser');
// Parse the body in json format
app.use(bodyParser.json());
```
## REST end point
- Create an end point for all request to the `/dishes`
``` Javascript
app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send req and res params to specific request (get, post, put, delete) to /dishes 
  next();
});
```
- Create a get end point for all the dishes
``` Javascript
app.get('/dishes', (req,res,next) => {
    res.end('Will send all the dishes to you!');
});
```
- Create a get end point for a specific dish
``` Javascript
app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});
```

## Route
- If write all the end points in the index.js file -> Too messy -> Separate into a folder called routes. Each end point is exported from a file.
- Use `Express.Route()`
``` Javascript
const dishRouter = express.Router();
```
- Each request method only take a callback function as a parameter -> Chain together
``` Javascript
dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

// Export the routes
module.exports = promoRouter;
```
- Import the routes into the index.js file to handle request to end point `/dishes`
``` Javascript
const dishRouter = require('./routes/dishRouter')
app.use('/dishes', dishRouter);
```

# MongoDB
- After installing MongoDB, add the the file path of the MongoDB application to the `Path` variable in System Enviroment Variable
- Start the server
```
mongod
```
- Can change the directory to store data by specifying the full path to the directory
```
mongod --dbpath=data --bind_ip 127.0.0.1
```
- Install the mongodb Node module to connect the Node application with MongoDB database
```
npm install mongodb --save
```
- Install the assert module to check on value
```
npm install assert --save
```
