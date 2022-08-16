- [Overview](#overview)
  - [Framework vs library](#framework-vs-library)
  - [Design pattern](#design-pattern)
    - [**Model View Controller**](#model-view-controller)
    - [**Model View View-Model**](#model-view-view-model)
  - [Single page application](#single-page-application)
  - [Reactive programming](#reactive-programming)
- [Getting started with Angular](#getting-started-with-angular)
  - [Install Angular-CLI](#install-angular-cli)
  - [Generate and Serve an Angular Project using Angular-CLI](#generate-and-serve-an-angular-project-using-angular-cli)
- [Component](#component)
  - [Undestanding component](#undestanding-component)
  - [Working with component in Angular](#working-with-component-in-angular)
- [Directives](#directives)
  - [Structural directive](#structural-directive)
  - [Attribute directives](#attribute-directives)
  - [Custom directives](#custom-directives)
- [Data binding](#data-binding)
  - [One way data binding](#one-way-data-binding)
  - [Two way data binding](#two-way-data-binding)
  - [Binding declaration](#binding-declaration)
  - [Example of binding 2 components](#example-of-binding-2-components)
- [Angular service](#angular-service)
  - [Dependency injection](#dependency-injection)
  - [Create a service in Angular](#create-a-service-in-angular)
  - [Promises](#promises)
  - [Obsevable](#obsevable)
- [Angular routing](#angular-routing)
  - [Using Angular router](#using-angular-router)
  - [Router parameter](#router-parameter)
    - [**RouterLink with parameter**](#routerlink-with-parameter)
    - [**Retrieving router parameter from router link**](#retrieving-router-parameter-from-router-link)
- [Form](#form)
  - [Dialogue component](#dialogue-component)
  - [Template driven form](#template-driven-form)
    - [**Template-driven form validation**](#template-driven-form-validation)
  - [Reactive form](#reactive-form)
    - [**Create a reactive form**](#create-a-reactive-form)
    - [**Reactive form validation**](#reactive-form-validation)
- [JSON server](#json-server)
  - [Serving up a server](#serving-up-a-server)
  - [Use http module to fetch data from the json-server](#use-http-module-to-fetch-data-from-the-json-server)
  - [Handling error](#handling-error)
- [Animation](#animation)
- [Testing](#testing)
  - [Testing strategies](#testing-strategies)
  - [Unit test](#unit-test)
- [Building and deploy](#building-and-deploy)
# Overview
## Framework vs library
- Framework: 
    - Provide generic functionality that can be changed by additional user code to accomplice user need
    - Universal, reusable environment that provides particular functionality as part of a larger program
    
| Library | Framework |
|---------|-----------|
| A collection of functions that are useful for writing app | A particular implementation of a web app where your coce fill in the detail|
| Your code is in charge and calls the functions in the library | The framework is in charge and calls your code when needs something app specific|

## Design pattern
- Design pattern: A well-documented solution to a recuring problem -> Don't have to reinvent the wheel every time
- Software engineering pattern: Isolation of domain logic from user interface -> Independent development, testing, and maintenance. Divide application into 3 parts
  - View: Presenting information to the user
  - Model: Store domain state and domain logic
  - Controller: Mediate between the view and the model

### **Model View Controller**
- Model
  - Manage the behaviour and data of the app
  - Respond to requests about its current state and instructions to change its state
  - In event-driven systems: Changes to the model will be updated to viewer
- View: 
  - Present the information 
  - Let user interact with it -> May represent 1 representation of the model state
  - Different viewport correspond to different display surface -> Information are render differently on different viewport 
- Controller:
  - Act as a middleman between the model and the view 
  - Receive URL request from user -> Instruct the model to change its state -> Model send the data to the controller -> The controller send the data to the view to render a presentation -> The view send the presentation back to the controller -> The controller send the presentation to the user
### **Model View View-Model**
- Model: Business logic and data
- View-model: Derive from the model. Contain information required to render the view

## Single page application
- A web application that fits in a single page -> At the start, only need to download the page from the server onces
- Subsequent request to the server only to get data in JSON or XML -> Don't have to download the whole page again
- Allows pre-render: Render part of the information fetched while the rest is still being downloaded -> Load the page faster for user
  
## Reactive programming
- **Observable pattern:** A software engineering patter that allows observers to observe an observable object. The observers register with the observable -> The observable will notify the observers of state changes
- Reactive programming is based around observable pattern and iterative programming
- Data flows in to program -> Observe the stream of data -> Propagate change throughout the application
- The observable emits value -> Apply operators on these values 
- Marble diagram: A way of representing reactive programming using observables

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
# Component
## Undestanding component
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
## Working with component in Angular
Create a new component names menu
```
ng generate component menu
```
Add a component (Eg: app-menu) to the .html file
``` HTML
<app-menu></app-menu>
```

# Directives
## Structural directive
- Directive gives instructions to Angular on how to render the template to the DOM. Encompasses 3 things
    - Component: Define part of the layout for the screen
    - Structural directive
      - Alter layout by adding, removing, and replace elements in DOM
      - Apply to a host element (a div or list item) and its descendents
    - Attribute directive

**ngIf:** If the `"selectedDish"` is not NULL -> Render what is inside the div
``` HTML
<div *ngIf="selectedDish">...</div>
```

**ngFor:** Iterate the dishes list with each item as dish
``` HTML
<mat-list-item *ngFor="let dish of dishes">
```

**ngSwitch:** Choose which statement to execute base on the condition

## Attribute directives
- Used as atribute for element in the template
- Listen to and modify the behaviour of other HTML elements (Eg: NgModel, NgStyle, NgClass)

## Custom directives
```
ng g directive <directive name>
```
``` Typescript
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
```
- Use the `addClass()` method of the Renderer2 to add the styling class to the element. Hostlisten will listen to an event -> Trigger a function
``` Typescript
constructor(private el: ElementRef,
    private renderer: Renderer2) {}

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.el.nativeElement, 'highlight');
  }
```
- Apply the directive to the element in the template file using the name in the selecter
``` HTML
<mat-grid-tile *ngFor="let dish of dishes" appHighlight>
```

# Data binding
- Mechanism for coordinating between the 
  - Template: Rendering into the DOM + Event capture by the DOM
  - Component: A property or method that supply to the DOM + Handle event captured from the DOM
- 4 kinds of flows in Angular
  - One way binding: 
    - Data flows from the DOM to the Component: Event from the DOM are sent to the handler in the Component  
    - Data from the Component flows to the DOM: Details and property from the Component are render into the DOM
  - Two way binding
## One way data binding

| Syntax | Description | Example |
|--------|-------------|---------|
| {{value}} | Value from the component flow to the template file | `{{username}}`
| [property]="value" | Associate a property from a component to a value| `[dish]="selectedDish"`
| (event)="handler" | An event raise in the template is send to the handler in the component | `(click)="onSelect(dish)"` |

## Two way data binding
| Syntax | Description | Example |
|--------|-------------|---------|
| [(ngModel)]="property" | Connect a form element to a property in the component | `[(ngModel)]="user.name"` |

## Binding declaration
- Binding target: The left side (Eg: `[dish]`, `[(ngModel)]`)
- Binding source: The right side. A variable, Javascript object or an expression
- Target properties must be marked as Input or Output properties -> Facilitates communication between components
    - `@Input() dish: Dish`
    - `@Output() deleteDish = new EventEmitter<Dish>()`
  
## Example of binding 2 components
- Retrieve information into a component from another component   
- Component dishdetail retrieves selectedDish from coponent menu    
- In app-detail tag, assign dish property (of the dishdetail) to selectedDish (of the menu)
``` HTML 
<app-dishdetail [dish]="selectedDish"></app-dishdetail>
```
- In dishdetail typescript file, add `@Input()` decorator
``` Typescript
import { Component, OnInit, Input } from '@angular/core';

// Specify the input selectedDish will do into the dish property
@Input()
dish!: Dish;
```

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

## Dependency injection
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

## Promises
- **Why use promises:** Whenever the result is going to take time to return -> Must be able to proceed forward without waiting -> Use promises
- **What is promises:** A mechanism that support asynchronous computation. Only produce 1 value when resolves successfully
  - Synchronous computation: Tasks must perform in order
  - Asynchronous computation: Tasks can be completed out of order
- **Proxy:** A value that is not available at the moment when asked for it -> The proxy object will give access to the results once they become available -> If no results -> Return an error or the promises is rejected
- If the result is available immediately or reject immediately -> Method to return immediately
``` Typescript
Promise.resolve(result);
Promise.reject(error);
```
- Return a promise immediately. If the result is available, it will be of type Dish[]
``` Typescript
getDishes(): Promise<Dish[]> {
  return Promise.resolve(DISHES);
}
```
- Access the result using the `resolve` method
``` Typescript
this.dishService.getDishes()
  .then((dishes) => this.dishes = dishes);
```
- If the result or reject is not returned immediately -> Use the `new Promise()` method that takes 2 parameter: resolve and reject. Can implement only the resolve funtion.
- Similuate a time delay to fetch data using `setTimeout` method that takes a function and the time delay
``` Typescript
getDishes(): Promise<Dish[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve(DISHES), 2000)
  });
}
```

## Obsevable
- Produce none or more than 1 values over time
- Use the `of()` method to emit only 1 value. Emit the first value of the Observable with a delay time of 2 seconds.
``` Typescript
import { firstValueFrom, of } from 'rxjs';
import { delay } from 'rxjs/operators';

getDishes(): Promise<Dish[]> {
  return firstValueFrom(of(DISHES).pipe(delay(2000)));
}
```
- Return observable after 2 seconds
``` Typescript
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

getDishes(): Observable<Dish[]> {
  return of(DISHES).pipe(delay(2000));
}
```
- Acess the values emits by Obsevable by using the `subscribe()` method
``` Typescript
this.dishService.getDishes()
  .subscribe((dishes) => this.dishes = dishes);
```
- Use operater `switchMap()` to get the value of the parameter in the router link and update it every time the parameter changes -> Get a new Observable -> Subcribe to it to get the selected dish
``` Typescript
let id = this.route.params
  .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
  .subscribe(dish => { this.dish = dish; });
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

# Form
## Dialogue component
- Use Angular Dialog to display a component ontop of another component
``` Typescript
import { MatDialog } from '@angular/material/dialog';
```
- Add the login in button in the template file -> When clicked -> Open the login component on top of the current component
``` HTML
<a mat-button (click)="openLoginForm()">Login</a>
```
- Open the login component using the `open()` function. Can specify the size of the login form, otherwise will be set to default size
``` Typescript
constructor(public dialog: MatDialog) { }

openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
```
  
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
- Use MatDialogRef to refer to a component -> Can use the function `close()` to close the component when the form is submited
``` Typescript
import { MatDialogRef} from '@angular/material/dialog';

// Refer to the component as dialogRef
constructor(public dialogRef: MatDialogRef<Component_Name>) { }

// Use dialogRef to close the component
onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
}
```

### **Template-driven form validation**
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

## Reactive form
- Create form structure in the component file -> Tie form structure to the form control structure in the template file
- Component class has immediate access to both the data model (Coming from the back-end) and the form control structure (In the template file) -> Can push data model to form control + Pull user-changed value 
- Angular library for reactive form
  - **FormControl:** Power individual form control for each elements -> Allow tracking of values and validating values
  - **AbstractControl:** Abstract base class for the form control
  - **FormGroup:** Group form control together -> Track information about the group as a whole
  - **FormArray:** A numerically indexed array of AbstractControl instances
  - **FormBuilder:** Allow constructing the form structure in the component and tie it to the form control in the template
- Form model (Form structure in the component) and data model (Form structure in the back-end server) are separated
- 2 methods to populate form model from data model
  - `setValue()`: Assign every form control value at once
  - `patchValue()`: Update specific form control value

### **Create a reactive form**
- Import the reactive form module to app.module
``` Typescript
import { ReactiveFormsModule } from '@angular/forms';
```
- Import these classes to the component file
``` Typescript
import { FormBuilder, FormGroup } from '@angular/forms';
```
- Use the `group()` function of the FormBuilder class to create a form structure
``` Typescript
form!: FormGroup;

constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: '',
      lastname: ''
    });
} 
```
- Use `[formGroup]` to tie the form structure in the component to the form control in the template file
``` HTML
<form novalidate [formGroup]="form">
```
- Tie each element in the form using `formControlName` and get the input using the `input` tag
``` HTML
<input formControlName="firstname" placeholder="First Name" type="text">
```
- Send the value of the form to the data model when submit the form + Remove all entries using the `reset()` method. Can add an object to the `reset()` method to reset the form in the component file
``` Typescript
onSubmit() {
    this.formData = this.form.value;
    this.form.reset({
        firstname: '',
        lastname: ''
    });
}
```
- Reset the value in the template file using the ViewChild class. ViewChild allows access to any child of the DOM. Refer to the form as myForm
``` Typescript
import { ViewChild } from '@angular/core';

onSubmit() {
    this.formData = this.form.value;
    this.form.reset({
      firstname: '',
      lastname: ''
    });
    this.formDirective.resetForm();
  }

@ViewChild('myForm') formDirective: any;
```
### **Reactive form validation**
``` Typescript
import { Validators } from '@angular/forms';
```
- Add validators to each element of the form using an array. Can initialize the value of the element as well.
``` Typescript
this.form = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ]
});
```

# JSON server
## Serving up a server
- Download the json-server node module
```
npm install json-server -g
```
- Create a json-server folder to hold all the data
- Store the data in a json file in the json-server folder
- Create a folder named public in the json-server folder. This is static web server. Anything in this folder is served at the address: `http://localhost:3000/`
- Serve up the server by using the flag watch on the json file that stores data. Watch for any changes -> Reload the server to reflect the changes. Can use -d flag to set a time delay -> Simulate delay when fetching data
```
json-server --watch <json file name> -d 2000
```
- The json file
``` JSON
{
  "dishes": [
    {
      "Name": "Tuna",
      "Price": "10.99"
    },
    {
      "Name": "Fish",
      "Price": "8.99"
    }
  ],
  "leaders": [
    {
      "Name": "Abby"
    }
  ]
}
```
- Host address:
```
http://localhost:3000/dishes
http://localhost:3000/leaders
```
## Use http module to fetch data from the json-server
- Use HTTP Module to fetch the data from the server. Import into app.module
``` Typescript
import { HttpClientModule } from '@angular/common/http';
```
- All the data is served at `http://localhost:3000/` -> Create a file called baseURL that export that value 
``` Typescript
export const baseURL = "http://localhost:3000/";
```
- Transform the value into a token in the component file
``` Typescript
constructor(@Inject('baseURL') public baseURL: string) { }
```
- Inject the token into app.module providers -> Can inject the token into every component in the app
``` Typescript
providers: [
  {provide: 'baseURL', useValue: baseURL}
]
```
- Serve up the image in static web server
``` HTML
<img src="{{baseURL + dish.image}}">
```

## Handling error
- Create a service to specifically handle http request error
``` 
ng g service services/ProcessHTTPMsg
```
- If the error is an instance of ErrorEvent -> Client side issuse -> Just output the message. Otherwise, it is an instance of HttpErrorResponse
``` Typescript
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

public handleError(error: HttpErrorResponse | any) {
  let errMsg: string;

  if(error.error instanceof ErrorEvent) {
  errMsg = error.error.message;
  } else {
  errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
  }

  return throwError(() => errMsg);
}
```
- Use the `catchError` method to catch the error messages
``` Typescript
import { catchError } from 'rxjs/operators';

getDishes(): Observable<Dish[]> {
  return this.http.get<Dish[]>(baseURL + 'dishes')
    .pipe(catchError(this.processHTTPMsgService.handleError));
}
```
- Handle the error in the `subscribe` method. When there are more than 1 callback functions -> Have to add Observers (Eg: next, error, complete)
``` Typescript
this.dishService.getDishes()
  .subscribe({
    next: (dishes) => this.dishes = dishes,
    error: errMess => this.errMess = errMess
  });
```
- Display the error message on the website
``` HTML
<div *ngIf="errMess">
  <h2>Error</h2>
  <h4>{{errMess}}</h4>
</div>
```

# Animation
- The effect that's going to play when transition from 1 state to another
- Import animation module into the app.module
``` Typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```
- Import the animation and add it to the component decorator
``` Typescript
import { visibility } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  animations: [
    visibility()
  ]
})
```
- Define the state in the animation
  - `void` state: Element not attached to a view
  - `*` state: Any state wildcard
  - `void => *` is equivalent to `:enter`: Transition from void state to any state
  - `* => void` is equivalent to `:leave`: Transition from any state to void state
``` Typescript
import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility() {
    return trigger('visibility', [
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        transition('* => *', animate('1s ease-in-out'))
    ])
}
```
- Change the state when the dish id change
``` Typescript
this.route.params
  .pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']); }))
    .subscribe(dish => { this.dish = dish; this.visibility = 'shown'; });
```
- Use the animation in the template file
``` HTML
<div fxFlex="40" *ngIf="dish" [@visibility]="visibility">
```

# Testing
## Testing strategies
- Unit tests: Testing individual units in isolation -> Repeat frequently, carry out fast
- Integration tests: Test interaction among modules
- End-to-end testing: Test everything, including user interaction -> Slow, not done frequently
## Unit test
- Run the tests using Angular CLI
```
ng test
```  
- Can choose which module to test by specifying it in the test.ts file in the src folder. By default, Angular will find all the .spec file to run the test
``` Typescript
const context = require.context('./', true, /menu\.component\.spec\.ts$/);
```
- `it` specify each test
``` Typescript
it('dishes items should be 4',() => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[3].featured).toBeFalsy;
  });
```

# Building and deploy
- Angular CLI use webpack (a module bundler) -> Build a dependency graph of the application
  - Entry: The point where webpack should start to build the graph of dependencies
  - Output: The set of bundles that webpack prepared
  - Loader: Webpack only understands Javascript -> Treat every files as a module -> Loader transform file into modules that can be added to the dependencies graph
  - Plugin: Perform actions on bundled modules
- Build the distribution folder using Angular CLI
```
ng build
```
- Copy the content of the distribution folder to the public folder of the json-server -> The website will be deploy at localhost:3000