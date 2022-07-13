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
