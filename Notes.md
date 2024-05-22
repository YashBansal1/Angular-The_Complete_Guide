# Angular

Angular is a Javascript Framework which allows us to create reactive single page application.
Although we seem to visit different pages but it is a single page, with one html file and bunch of javascript code, every change is rendered in browser.
Because it gives the user very reactive user experience. Javascript is much faster than to reach out server for every change.
And if we need data from the server we simply load the data in background, so the user get the same experience.
In this, Javascript, DOM changes, whatever displayed on the page (HTML code) during runtime. That's why we never see the refresh icon.

# Angular versioning

AngularJs (Angular 1) - Was not future proof due to the way it was written.
Angular1, Angular2, Angular4 ... (Angular3 was skipped)

Updating npm:

Run [sudo] npm install -g npm (sudo is only required on Mac/ Linux)

Updating the CLI

[sudo] npm uninstall -g angular-cli @angular/cli

npm cache verify

[sudo] npm install -g @angular/cli

use ng serve --port ANOTHERPORT to serve your project on a new port

    My changes are not reflected in the browser (App is not compiling)

Check if the window running ng serve displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI.

Why we need Angular CLI?
We need such an extra tool to create angular projects, because the code we write when using the angular will actually will not be the code that runs just like that in the browser, instead it will need to be converted and optimized since we will use features in our angular code that are not native Javascript features. That's why we need a separate project that basically includes a build step that converts the code we write during development to code that can run in the browser once we are ready to ship and deploy the project.

To create the new app-
ng new my-app
we can add three flags/configurations
[sudo] ng new my-app --no-strict --standalone false --routing false

To run the development server
[sudo] ng serve

Angular first load the index.html page then we have these dynamically injected script imports and there imports will dynamically replace app-root with our own component.

# TypeScript

TypeScript is superset to the vanilla javascript. (Programming language extending javascript) It has more robust code which get checked when we write not just when we run. It have more features like (e.g Types, Classes, Interfaces, ...). But in the end as typescript can't run in the browser it is compiled to javascript and this compilation is handled by the cli (a project management tool).

It adds static typing to javascript

npm install typescript
npm tsc //to compile the file, will figure out which file to compile from the config file if there is no config file we can still give the file we want to compile at the end of the command.

//Primitive types: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

let age: number = 12;
let hobbies: string[];
let person: { name: string; age: number; }; //tells the type of the variable is object
let person: {}[];

--Type Inference
By default, tries to infer as many types as possible, without us giving the type of the variable.
Generally it is best practice not to assign the type of the variable which is initialized as soon as it is declared as it will be redundant.

--Union types
let age: number | string = 12;
It allows us to save more than one type of data in our variables.

--Assigning Type Aliases
type Person = {
name: string;
age: number;
}
let person: Person;
let person: Person[];

--Function and types
function add(a: number, b:number): number{
return a + b;
}
//as long as the typescript is able to infer the type of the function then avoid giving it explicitly.

--Generics
function add<T>(a: T[], b:T): number{
return a + b;
}
//Generics are used when we want to create a function that can work with different types of data.
//This will automatically infer the return type based on the type of the parameters.

--class
Within the class to define a method we use the method shorthand notation.
methodName(){

} //we can't use the function keyword to create a method

--interfaces
doesn't exist in the vanilla javascript
interface Human {
name: string;
age: number;

    greet: () => {}

}

let mac: Human;
mac = {
name: 'mac',
age: 12,
greet: () => {
console.log('Hello');
}
}
//it look similar to the type but there is key difference is that interfaces can be implemented by classes and it forces that class to have that structure.
class Teacher implements Human {

}

npx tsc --init
will add the tsconfig.json

npm install --save bootstrap@3

# The Basics

As angular single page application the first page that is loaded is index.html. Index.html has <app-root></app-root>, which is not the standard html tags but one of our own components.
@Component decorator, have selector property which assigns string as value and it holds the app-root described in index.html. This is the information angular needed to replace with the template of this component.
When we run the ng serve, it automatically creates javascript script bundles and automatically add the right imports in the index.html file, a convenience method for us.
After that first code to be executed is main.ts file. Now this starts our angular application by passing an app.module to the platformBrowserDynamic().bootstrapModule(AppModule) method.
The AppModule is the root module of our application. It is the entry point of our application. It is the module that is responsible for bootstrapping.
AppModule comes from app.module,ts file, in which @NgModule have an object in which there is bootstrap array which basically lists all the components that should be know to angular at the point of time, it analyzes our index.html file.
Therefore angular knows about the AppComponent, it reads app.component.ts file and therefore knows this selector app route in turn its knows the html and css file with which to replace our app-root.

## Components

There is main app component, root component which holds our entire application. So this root component, to this template, this html file off the app component is where we will add other components.
These component have their own template , own styling and they can be used more than once.

The nested components will not be added to the index.html file but the root component html file.
Their selector will be added to app component HTML file. As the whole application is bootstrapped with the root component.
