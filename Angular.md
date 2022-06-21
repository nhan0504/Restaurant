# Overview
## Framework vs library
- Framework: 
    - Provide generic functionality that can be changed by additional user code to accomplice user need
    - Universal, reusable environment that provides particular functionality as part of a larger program
    
| Library | Framework |
|---------|-----------|
| A collection of functions that are useful for writing app | A particular implementation of a web app where your coce fill in the detail|
| Your code is in charge and calls the functions in the library | The framework is in charge and calls your code when needs something app specific|

# Getting started with Angular
## Install Angular-CLI
Install Angular-cli globally: The command line tool for scaffolding Angular application
```
npm install -g @angular/cli
```
Learn about other command that CLI provides
```
ng help
```
## Generate and Serve an Angular Project using Angular-CLI
Create a new project folder using scss as the css styling framework
```
ng new [folder_name] --style=scss
```
Go into project folder to start serving the project. Install all the node modules then open the project. The project will open at the default localhost:4200
```
npm install
ng serve --open
```
