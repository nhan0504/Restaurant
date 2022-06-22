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
## Component
### **Undestanding component**
Define a component from Angular core library
``` Typescript
import { Component } from '@angular/core';
```

Specify metadata about the component
``` Typescript
@Component({
    selecter: 'app-root', //Name of the component
    templateURL: './app.component.html', //Link to HTML file
  styleUrls: ['./app.component.scss'] //Link to SCSS file 
})
```
- The name of the component will be use as HTML tag to address the component in HTML file (Eg: `<app-root></app-root>`)
- Instead of using a templateURL, can use inline template if ther is only a few line of HTML tag
``` Typescript
@Component({
    selecter: 'app-root',
    template: '<h1>{{ title }}</h1>'
})
```
### **Working with component in Angular**
Create a new component names menu
```
ng generate component menu
```
Add a component (Eg: app-menu) to the .html file
``` HTML
<app-menu></app-menu>
```

## Structural directive
- Directive gives instructions to Angular on how to render the template to the DOM. Encompasses 3 things
    - Component: Define part of the layout for the screen
    - Structural directive
      - Alter layout by adding, removing, and replace elements in DOM
      - Apply to a host element (a div or list item) and its descendents
    - Attribute directive      

### Common structural directives:    
**ngIf:** If the `"selectedDish"` is not NULL -> Render what is inside the div
``` HTML
<div *ngIf="selectedDish">...</div>
```

**ngFor:** Iterate the dishes list with each item as dish
``` HTML
<mat-list-item *ngFor="let dish of dishes">
```

**ngSwitch:** Choose which statement to execute base on the condition

# Data binding