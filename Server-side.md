# Node module
- 3 categories:
    - File-based module: Define the node module within a file -> Make use of it in the application
    - Core modules: Already part of Node -> Provide functionality for external designers to add their own module
    - External Node module: Developed by third-party
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
