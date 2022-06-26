- [Overview](#overview)
  - [Framework vs library](#framework-vs-library)
- [Getting started with Angular](#getting-started-with-angular)
  - [Install Angular-CLI](#install-angular-cli)
  - [Generate and Serve an Angular Project using Angular-CLI](#generate-and-serve-an-angular-project-using-angular-cli)
  - [Component](#component)
    - [**Undestanding component**](#undestanding-component)
    - [**Working with component in Angular**](#working-with-component-in-angular)
  - [Structural directive](#structural-directive)
    - [Common structural directives:](#common-structural-directives)
- [Data binding](#data-binding)
  - [Bind 2 components](#bind-2-components)
- [Design pattern](#design-pattern)
  - [Model View Controller](#model-view-controller)
  - [Model View View-Model](#model-view-view-model)
- [Angular service](#angular-service)
- [Dependency injection](#dependency-injection)
  - [Create a service in Angular](#create-a-service-in-angular)
- [Angular routing](#angular-routing)
  - [Using Angular router](#using-angular-router)
  - [Router parameter](#router-parameter)
    - [**RouterLink with parameter**](#routerlink-with-parameter)
    - [**Retrieving router parameter from router link**](#retrieving-router-parameter-from-router-link)
- [Single page application](#single-page-application)
- [Dialogue component](#dialogue-component)
  - [Template driven form](#template-driven-form)
  - [Form validation](#form-validation)
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
- Mechanism for coordinating between the 
  - Template: Rendering into the DOM + Event capture by the DOM
  - Component: A property or method that supply to the DOM + Handle event captured from the DOM
- 4 kinds of flows in Angular
  - One way binding: 
    - Data flows from the DOM to the Component: Event from the DOM are sent to the handler in the Component  
    - Data from the Component flows to the DOM: Details and property from the Component are render into the DOM
  - Two way binding
## Bind 2 components
- Retrieve information into a component from another component   
  
Eg: component dishdetail retrieves selectedDish from coponent menu    
In app-detail tag, assign dish property (of the dishdetail) to selectedDish (of the menu)
``` HTML 
<app-dishdetail [dish]="selectedDish"></app-dishdetail>
```
In dishdetail typescript file, add 
``` Typescript
import { Component, OnInit, Input } from '@angular/core';

// Specify the input selectedDish will do into the dish property
@Input()
dish!: Dish;
```

# Design pattern
- Design pattern: A well-documented solution to a recuring problem -> Don't have to reinvent the wheel every time
- Software engineering pattern: Isolation of domain logic from user interface -> Independent development, testing, and maintenance. Divide application into 3 parts
  - View: Presenting information to the user
  - Model: Store domain state and domain logic
  - Controller: Mediate between the view and the model
## Model View Controller
- Model
  - Manage the behaviour and data of the app
  - Respond to requests about its current state and instructions to change its state
  - In event-driven systems: Changes to the model will be updated to viewer
- View: 
  - Present the information 
  - Let user interact with it -> May represent 1 representation of the model state
  - Different viewport correspond to different display surface -> Information are render differently on different viewport
- Controller:
  - Receive information from the view -> Instruct the model to change its state
## Model View View-Model
- Model: Business logic and data
- View-model: Derive from the model. Contain information required to render the view
  
# Angular service
- Why need to use Angular service
  - Keep component lean: Fetching data from server, input validation, logging -> Delegated to a service
- Create a new service named dish in the services folder
```
ng generate service services/dish
```
- Add the service to the app module for the whole application
``` Typescript
providers: [DishService]
```

# Dependency injection
- Dependency injection: A software design pattern for implementing app where there is an object that depend on another object
  - Dependency: The object is dependent on another object
  - Injection: Passing of a dependency to a dependent object so that it can use it
- Three way for a component to access another object
  - Create the dependent object by the new operator (Eg: Create an object of a specific type)
  - Look up dependency using global variable
  - Have the dependency passed into where it's needed -> Most flexible 
- Roles of dependency injection:
  - The service: Services that are used
  - The client: Depend on the service (Eg: The component)
  - The interface: How to make use of the service
  - The injector: Responsible for injecting the dependent object into your object
- Angular and Dependency Injection: Can write the business logic into the dependent object -> Inject it where needed
  - Injection is taken care of by Angular injection subsystem
## Create a service in Angular
Add the service names DishService into the app.module -> The service will be availble to the whole app
``` Typescript
providers: [DishService],
```
Use the injected object in the menu component.    
Create one single dishService object that is available for the menu coponent to use   
Everything in the ngOnInit method will be execute when the menu component is instantiated
``` Typescript
constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }
```

# Angular routing
- Enable navigation among views -> Can add to link or button -> Trigger navigation from one view to another by clicking
- Uses a browser URL as an instruction to navigate -> Take advantage of HTML5 History API
- History API: Allowed developers to modify a website's URL without refreshing the page
  - `pushState()`: Add a history entry into the browser history with refreshing the page
  - `replaceState()`: Modify the existing history in the browser's history
## Using Angular router
- Angular Route is a separate library from the Angular/core -> Have to import Angular/router
- Import the routes -> Define various routes that the app uses (Eg: route /home for the home page) + The component that the path is being mapped to
``` Typescript
// create a constant named routes of type Routes to hold all the routes
const routes: Routes = [
    {path:"/home,componnt:HomeComponent"}
    // Default route -> If no route is specify then redirect to home
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]
```

- **routerOutlet:** Where the component would be render. When Angular router navigate to different views of different components, the corresponding view of the component will be specify in the app in the routerOutlet
``` HTML
<router-outlet></router-outlet>
```
- **routerLink:** Specify the path link 
``` HTML
<a routerLink="/home">Home</a>
```
- Create a AppRouting module to control all the route -> Export the module so other component can use
``` 
ng generate module app-routing
```
- The RouterModule's function forRoot takes an argument to specify all the routes
``` Typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Import all the routes from a different file to the module
import { routes } from './routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
```

## Router parameter
- Pass value from one component to another using route
- **Why use router parameter instead of data binding?** When a component that receive data from another component is being route to, the data binding between 2 componet doesn;t exist anymore -> Need to use router parameter.
- Specify the parameter as a token
``` Typescript
{ path: dishdetail/:id}
```
### **RouterLink with parameter**
- The URL link will be constructed into `/dishdetail/id`
``` Typescript
<a [routerLink]="['/dishdetail',dish.id]">
```
- Use a method
``` Typescript
this.router.navigate(['dishdetail',dish.id]);
```
### **Retrieving router parameter from router link**
- Angular uses a service called ActivatedRoute service
- The service provide information about the route
  - URL: a string representation of each part of the route
  - params: Contains the required and optional parameters of the route
  - queryParams: Contains the query parameters of the route

# Single page application
- A web application that fits in a single page -> At the start, only need to download the page from the server onces
- Subsequent request to the server only to get data in JSON or XML -> Don't have to download the whole page again
- Allows pre-render: Render part of the information fetched while the rest is still being downloaded -> Load the page faster for user

# Dialogue component
- Use Angular Dialog to display a component ontop of another component
``` Typescript
import { MatDialog } from '@angular/material/dialog';
```
- Open a login component to show a login form using the `open()` function. Can specify the size of the login form, otherwise will be set to default size
``` Typescript
constructor(public dialog: MatDialog) { }

openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
```
- There are 2 kind of forms: Template-driven form and reactive form
## Template driven form
``` Typescript
import { MatFormFieldModule} from '@angular/material/form-field';
// Support getting input
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Support form in Angular
import { Form, FormsModule } from '@angular/forms';
```
- Take use input and bind to username property using 2 way binding
``` Typescript
<input matInput placeholder="Username" type="text" [(ngModel)]="user.username" name="username">
```
## Form validation
- Turn off the HTML5 validation so Angular can do the validation
``` HTML
<form novalidate>
```
- **Template reference variable:** Enable you to track the state of the field 
  - `ngForm` to specify form
  - `ngModel` to specify input field
``` HTML
<form novalidate #loginForm="ngForm">
<!-- Specify username as required field -->
<input matInput placeholder="Username" type="text" 
 [(ngModel)]="user.username" name="username"
 #username="ngModel" required>
```
- **Control state**

| State | Description |
|-------|-------------|
|`.['pristine']` | True if field has not been changed |
|`.['dirty']` | True if field has been changed |
|`.['valid']`| True if field/whole form is valid |
|`.['invalid']`| Reverse of valid |
- Prevent submiting the form when the form entry is invalid or empty
``` HTML
<button type="submit" mat-button 
 [disabled]="loginForm.form.invalid">Login</button>
```
- Display error if required field is invalid
``` HTML
<mat-error *ngIf="username.errors?.['required']">Username is required</mat-error>
```