/*
You have a string with several sentences, one of which has a list of items. The list begins with a colon (:) and ends with a period (.). You want to extract just the list.
*/

let sentence = "This is one sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.";

let start = sentence.indexOf(':');
// let end = sentence.indexOf('.');
// let end = sentence.lastIndexOf('.');
// let end = sentence.indexOf('.', start);
let end = sentence.indexOf('.', start + 1);
// let list = sentence.substring(start + 1, end);
let list = sentence.substring(start + 2, end);

// console.log(start);
// console.log(end);
console.log(list);

// Output
// cherries, oranges, apples, bananas