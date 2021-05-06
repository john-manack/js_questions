'use strict';

function sayHi() {
    console.log(person_name);
    console.log(age);
    console.log(height_in_inches)
    var person_name = 'Lydia';
    let age = 21;
    const height_in_inches = 73;
}

sayHi();

// 'var, 'let', and 'const' are all hoisted, however only 'var' is initialized. Because using 'var' hoists AND initializes the variable, the variable has the default placeholder value of 'undefined' until we get to the line where the variable is defined. 
// 'let and 'const' are not initialized, even though they are hoisted. They aren't accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variable before it's declared, JS throws a ReferenceError.