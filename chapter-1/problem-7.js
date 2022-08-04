/*
You have a string with keywords, separated by commas. You want to break the string into an array of separate keywords, and then print the keywords out with a keyword label.
*/

let keywordList = 'keyword1, keyword2, keyword3, keyword4, keyword5, keyword6, keyword7, keyword8, keyword9, keyword10';

// let keywordArray = keywordList.split(', ', 2);
let keywordArray = keywordList.split(', ');

// console.log(Array.isArray(keywordArray));
// console.log(keywordArray);

for (let i = 0; i < keywordArray.length; i++) {
    const element = keywordArray[i];
    console.log(element);
}

/* Output
keyword1
keyword2
keyword3
keyword4
keyword5
keyword6
keyword7
keyword8
keyword9
keyword10
*/