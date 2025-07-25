/*
Implementing Modules in Node
- Article on modular programs and implementing modules in the Node Runtime environment.

What are modules?
#Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.
A #modular program is one whose components can be separated, used indivdually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in  a file: [my_app.js]:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@#++++++++++++++++++%@@@@@@%=========+======+=#@@
@@#=====+=====+======#@@@@@@%-================-*@@
@@#[math_funciton.js]#@@@@@@%[database_logic.js]@@
@@#==================#@@@@@@#------------------*@@
@@%*#################%@@@@@@%******************%@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@*------------------#@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@+  ....  .....:.   *@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@+  -=[my_app.js]=+ *@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@+     ... . . .    *@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@#==================#@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@#==================#@@@@@@%==================#@@
@@*:::::::::-:-::::::#@@@@@@#------=----==-----*@@
@@*[server_logic.js]:#@@@@@@[date_formatting.js]@@
@@*::::::::::::::::::*@@@@@@#------------------*@@
@@%++++++++++++++++++%@@@@@@%******************#@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

[Note: The words module and file are often used interchangably]

Instead of having the entire program written within [my_app.js], its components are broken up into spearate modules that each handle a particular task.
For example, the [database_logic.js] module may containt code for storing and retrieving data from a database.
Meanwhile, the [date_formatting.js] module may containt functions designed to easily convert date values from one format to another.
(A common headache among programmers.)

The modular strategy is sometimes called /separation of concerns/ and is useful for several reasons.
What do you think those might be?

Write down a few of your own ideas before revealing the reasons below.

Implementing modules in your program requires a small bit of management.
In the remainder of this article, we will be covering:

- How to use the Node.js [module.exports] object to export code from a file -
meaning its functions and/or data can be used by other files/modules.

- How to use the Node.js [require()] function to import functions and/or data from another module.


IMPLEMENTATIONS OF MODULES IN JAVASCRIPT: Node.js vs ES6

Before we dive in, it should be noted that there are a multiple ways of implementing modules depending on the /runtime environment/ in which your code is executed.
In JavaScript, there are two runtime environments and each has a preferred module implementation.

1. The [Node] runtime environment and the [module.exports] and [require()] syntax.
2. The Browser's runtime environment and the [ES6] [import/export] syntax.

This article will focus on using the [module.exports] and [require()] syntax in the [Node] runtime environment.
For more information you can read (these) two articles.

IMPLEMENTING MODULES IN NODE

Every JavaScript file that runs in a Node environment is treated as a distinct module.
The functions and data defined within each module can be used by any other module AS LONG AS those resources are properly EXPORTED AND IMPORTED>

Suppose you wanted to write a simple program that would display the freezing point and boiling point of water in Fahrenheit. 
However, you only know the values in Celsius to be 0 (freezing) and 100 (boiling).
Luckily you happen to know how to convert Celsius to Fahrenheit.

Such a program might look like this:

// water-limits.js
function celsiusToFahrenheit.js(celsius) {
return celsius * (9/5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

This [water-limits.js] program is simple but lets break it down into its parts: 

At the top of the file the function celsiusToFahrenheit() is declared.
When given a value in Celsius it will return the value converted to Fahrenheit - Both input and output will be a number.

Below, freezingPointC and boilingPointC are assigned the known values of 0 and 100, respectively.

Using these values and the funciton celsiusToFahrenheit() the additional values freezingPointF and boilingPointF are calculated.

Lastly these values are printed to the console.

Executing this file in Node would look something like this:

$ node water-limits.js
The freezing point of water in Fahrenheit is 32
The boiling point of water in Fahrenheit is 212

Now you decide to write a second program.
In this program, the user can input any temperature value in Celsius and the program responds by printing the input temperature converted to Fahrenheit.

For example you might want to be able to run such a program and see a response like so:

$ node celsius-to-fahrenheit.js 100
100 degrees Celsius = 212 degrees Fahrenheit

The JavaScript below would do just that:

// celsius-to-fahreneheit.js
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

const celsiusInput = process.argv[2]; // get the 3rd input from the argument list
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);

Now let's break down the celsius-to-fahrenheit.js program:

- At the top of the file the function celsiusToFahrenheit() is declared.
When given a value in Celsius, it will return the value converted to Fahrenheit.
Both input and output will be a number.

- On the next line of code, celsiusInput is assigned process.argv[2].
When a program is executed in the Node environment, [process.argv] is an array holding the arguments provided.
In this case, it looks like ['node', 'celsius-to-fahrenheit', '100'] so process.argv[2] returns 100.

- Using this value and the function celsiusToFahrenheit(), the additional value fahrenheitValue is calculated.

- Lastly a message is printedto the console displaying the data.

Notice anything similar between the two programs, water-limits.js and celsius-to-fahrenheit.js?
Both programs implemented a function celsiusToFahrenheit()!
Not only did we write this function twise,
but if we ever need to make changes to the function we'll also have to make those changes in two places.

Creating a module that exports a [celsiusToFahrenheit()] function that can be used by both of these programs would solve this repeitive code problem.

#module.exports

To create a module you simply have to create a new file where the functions can be declared.
Then, to make these functions available to other files, add them as properties to the built in [module.exports] object.

// converters.js
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function(fahrenheit) {
return (fahrenheit - 32) * (5/9);
};

The code snippet above demonstrates two ways of exporting functions from a module.
Let's break it down.

At the top of the file, the function celsiusToFahrenheit() is declared.

On the next line of code, the first approach for exporting a funciton from a module is shown.
In this case, the already defined function celsiusToFahrenheit() is assigned to module.exports.celsiusToFahrenheit

Below, an alternative approach for exporting a function from a module is shown.
In this second case, a new function expression is delcared and assigned to modle.exports.fahrenheitToCelsius.
This new method is designed to convert Fahrenheit values back to Celsius.

module.exports is an object that is bult in to the Node.js runtime environment.
Other files can now import this object and make use of these two functions with
another feature that is built in to the Node.js runtime environment:

require()

the #require() function accepts a string as an argument.
That string provides the #file-path to the module you would like to import.

Let's update [water-limits.js] such that is uses #require() to import the .celsiusToFahrenheit() method from the module.exports object within converters.js

// water-limits.js
const converters = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

In this case. ./ is a relative path indicating that [converters.js] is stored in the same folder as [water-limits.js].
When you use require(), the entire module.exports object is returned and stored in the variable converters.
This means that both celsiusToFahrenheit() and fahrenheitToCelsius() methods can be used in this program.

USING OBJECT DESTRUCTURING TO BE MORE SELECTIVE WITH require()

In many cases, modules will export a large number of functions but only one or two of them are needed.
You can use object destructuring to extract only the needed functions.

Let's update celsius-to-fahrenheit.js and only extract .celsiusToFahrenheit() behind:

// celsius-to-fahrenheit.js
const { celsiusToFahrenheit } = require('./converters.js');

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);

With this approach, the remainder of the program works the same way but the program avoids importing a function it does not need.

CODE CHALLENGES


*/
// shape-area.js
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength) {
  return (PI * radiusLength * radiusLength);
};

function squareArea(sideLength) {
  return (sideLength * sideLength);
};

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
/*
//app.js

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js")

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = 'replace_me';

const areaOfSquare = 'replace_me';

*/
/* app.js */ 

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

const areaFunctions = require('./shape-area.js');

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require('./shape-area.js');

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/