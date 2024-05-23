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

To create the component folder

    [sudo] ng generate component my-component
    [sudo] ng g c my-component
    [sudo] ng g c my-component --skip-tests
    [sudo] ng g c my-component/nested

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
After that first code to be executed is main.ts file. Now this starts our angular application by passing an app.module to the

    platformBrowserDynamic().bootstrapModule(AppModule)

method.
The AppModule is the root module of our application. It is the entry point of our application. It is the module that is responsible for bootstrapping.
AppModule comes from app.module,ts file, in which @NgModule have an object in which there is bootstrap array which basically lists all the components that should be know to angular at the point of time, it analyzes our index.html file.
Therefore angular knows about the AppComponent, it reads app.component.ts file and therefore knows this selector app route in turn its knows the html and css file with which to replace our app-root.

## Components

There is main app component, root component which holds our entire application. So this root component, to this template, this html file off the app component is where we will add other components.
These component have their own template , own styling and they can be used more than once.

The nested components will not be added to the index.html file but the root component html file.
Their selector will be added to app component HTML file. As the whole application is bootstrapped with the root component.

## AppModule and Component Declaration

AppModule is the bundle of functionality of our app and it basically gives angular the information which feature does my app have and use. It is an empty typescript class and we transform it by adding a decorator.
We don't add any other component than the AppComponent to the bootstrap array, as in this we want to add only those component which we will need at the time of starting our application in our index.html file.

We will add other component which is part of the app but not needed at the time of running the application in declarations. declarations already contains our AppComponent as it is also the part of the app.

The main idea behind Standalone Components is that you can build Angular components & apps without (or with less) @NgModules - i.e., Standalone Components allow you to write less (boilerplate) code.

You build a standalone component by adding the standalone: true property/value pair to the @Component decorator.

Like this:

    @Component({
    standalone: true,
    selector: 'app-cmp',
    template: '<h1>I work standalone!</h1>'
    })
    export class SomeComponent {}

Such components then don't have to (and shouldn't be) added to any @NgModule.

Therefore, if you only work with such components, no @NgModule is needed at all.

## Creating components with CLI and nesting components

ng generate component <component-name> or ng g c <component-name> will create a component with the name <component-name> and it will be added to the app.module.ts file.
This command allows us to generate some elements supported by angular like component.

## working with component template

We can write the template code within the templateUrl if we want.
styleUrls takes an array as our html page can have multiple style files.
We can give inline styles using the styles property instead of styleUrls. styles property also take the array as an argument but the style written in inline.

## Component Selector

component selector acts like a css selector. so we can do much more just like with the css selector.
we can give the selector as an attribute '[selector-name]' (should be string ''), this way we can't use it as tag but as the attribute of an element, for ex <div selector-name></div>.
Another way is as class like in css, '.selector-name' then we can use it as <div class="selector-name"></div>.
But selecting by id and pseudo selectors will not works as they are not supported.

## Databinding

Communication between the typescript code(Business logic) and template(HTML).
We want to output data from our typescript code in the HTML code we can do so by

     String interpolation {{ data }} or Property Binding [property]="data" .

And we can react to user event with event Binding (event)="expression".
We can also use two way binding [(ngModel)]="data" to bind the data in both direction.

We can also use ngClass to add class dynamically and ngStyle to add style dynamically.

String interpolation has only one condition as long as anything between {{ }} is resolved to a string it will work we can even pass function in this. Also we can't write multiline expressions here, so that's why we can't use if and for control structure but can use ternary operator.

In property binding we directly bind to the native property the element has.

If we want to output something on our template then we should use the string interpolation, but if we want to change the some of property of HTML element or component the we should use property binding.

## Even Binding

we can react to user event with event Binding

    (event)="expression". (event) is the event we are waiting for, and expression is something that should happen when the event occurs.

How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log() the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties or YOUR_ELEMENT events should yield nice results.

## Passing and using data with the event binding

To get the value the user enter we need to pass the $event as the argument in the expression for the event listener.
(input)="onUpdateUser($event)".
$event is a reserved variable name that we can use in the template when we are using event binding. $event as an argument will simply be the data emitted with that event. When these event are fired they emit some data and we can catch this data and pass it by using $event.

## Two way Data Binding

Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule.

You then also need to add the import from @angular/forms in the app.module.ts file:

    import { FormsModule } from '@angular/forms';

    [(ngModel)]="field-name"

it provides two way data binding, so that it will trigger the input event and update the field-name in our component and also if the field-name is changed then it will update the value of input element.

## Directives

Directives are instruction in DOM. Components are such kind of instructions in the DOM. As when we use the selector of the component in the template we are instructing the angular to put the component template in the place of this selector in the template that contain the selector.
Component are a kind of the directives with template.
There can be directives without the template to, we can build such custom directives. We typically add directives with attribute selector, but technically selector of a directive can be configured just like the selector of a component.

    ![alt text](image.png)

ngif is a directive shipping with angular.
ngif is a directive that is used to conditionally render the template. It takes the condition as the argument and if the condition is true then it add the element.
ngif is a structural directive as it changes the structure of our dom, it either add the element or not add it. \* is required in prefix of ngif (\*ngif) otherwise it will not work. As it is a structural directive normal attribute directive doesn't require \*.

If you're in an Angular 17 project (and only then!), you can also use an alternative syntax for outputting conditional content:

Instead of using \*ngIf, you can use a built-in @if template control flow statement.

    @if (someCondition) {
      <p>Only visible if 'someCondition' is true</p>
    }

would replace

    <p *ngIf="someCondition">Only visible if 'someCondition' is true</p>

The advantage of the new syntax is that it can be slightly more efficient under the hood and that it does not rely on NgIf or the CommonModule being imported / available.

we can also use ngif with else

    <p *ngIf="serverCreated; else noServer">
    {{ serverName }}
    </p>
    <ng-template #noServer> //This is an local reference that can we used in the template
      <p>No Server Created</p>
    </ng-template>

ngStyle allows us to dynamically set the style, ngClass allows us to dynamically add and remove CSS classes.

    <h5 [ngStyle]="{ backgroundColor: getColor() }">
     Server with ID {{ serverId }} is {{ getServerStatus() }}
    </h5>

Here ngStyle only works with property binding, here it binds the property of the directive not the directive itself. It takes object as an argument with style name as key and it value as value.
ngClass also only works with property binding.

    <h5 [ngStyle]="{ backgroundColor: getColor() }"
    [ngClass]="{online: serverStatus === 'online'}">
     Server with ID {{ serverId }} is {{ getServerStatus() }}
    </h5>

ngClass also takes object as an argument with key being the CSS class name and value being the expression which tell us that whether to add this CSS class or not.

ngFor Directive

    <div app-server *ngFor="let server of servers"></div>

If you're in an Angular 17 project (and only then!), you can also use an alternative syntax for outputting conditional content:

Instead of using \*ngFor, you can use a built-in @for template control flow statement.

    @for (item of items; track item.id) {
      <li>{{ item.title }}</li>
    }

would replace

    <li *ngFor="let item of items">{{ item.title }}</li>
    <li *ngFor="let item of items; let i = index">{{ item.title }}</li>

The advantage of the new syntax is that it can be slightly more efficient under the hood and that it does not rely on NgFor or the CommonModule being imported / available.

The track item.id part is required when using this new syntax - it ensures that Angular can efficiently track and re-render (if needed) the list items.
