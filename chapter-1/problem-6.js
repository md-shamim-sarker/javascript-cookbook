/*
You want to check that a variable is defined, is a string, and is not empty.
*/

let str = 'shamim';

if ((typeof str != 'undefined') && (typeof str == 'string') && (str.length > 0)) {
    console.log('This variable is defined, string and not empty.');
} else {
    console.log('This variable is faulty variable.');
}

// Output
// This variable is defined, string and not empty.