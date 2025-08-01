/**
 * ### 4. Checking if it's an Array

**Instructions:**

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
 */

const books = ['HTML5', 'CSS3', 'Javascript', 'React', 'MongoDB'];

const firstName = 'Khandaker';

const lastName = 'Shahi';

const fullName = firstName + ' ' + lastName;


if(Array.isArray(books)){
    console.log('books is an array.');

}
else{
    console.log('books is not an array.');
}
if(Array.isArray(firstName)){
    console.log('firstName is an array.');

}
else{
    console.log('firstName is not an array.');
}
if(Array.isArray(lastName)){
    console.log('lastName is an array.');

}
else{
    console.log('firstName is not an array.');
}

if(Array.isArray(fullName)){
    console.log('fullName is an array.');

}
else{
    console.log('fullName is not an array.');
}