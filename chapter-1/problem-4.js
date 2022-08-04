/*
You want to find out if a substring, a particular series of characters, exists in a string.
*/

let str = 'Sneha Mony is my cute sister. She reads in class 10.';
let subStr = 'cute';
let indexSubStr = str.indexOf(subStr);

if (indexSubStr != -1) {
    console.log(`Yes, ${subStr} is existed here.`);
} else {
    console.log(`No, ${subStr} is not existed here.`);
}

// Output
// Yes, cute is existed here.