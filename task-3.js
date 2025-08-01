/**
 * ### 3. Checking Array Membership with ‘includes’

**Instructions:**

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.
 */

const books = ['HTML5', 'CSS3', 'Javascript', 'React', 'MongoDB'];

if(books.includes('Javascript')){
    console.log('It has JS book.');
}else{
    console.log('it has not js book.');
}