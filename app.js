//can cycle through #book-list without turning it into an array using querySelectorAll because it returns a nodelist and not an HTMLcollection
// books.forEach is now possible (like a for loop)

//if you use document.getElementById then YOU DO need to turn it into an array first by doing - Array.from(variableEqualToHTMLcollection) -

// NOTES ABOVE ^^
// --------------------------------------------------------------------------------------


var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book) {
    console.log(book.textContent)
})

// ^^RETURNS THE TITLES OF THE BOOKS IN THE INDEX.HTML file ^^

// Array.from(books).forEach(function(book) {
//     book.textContent = 'test'
// })

// ^^TURNS ALL OF THE TITLES INTO THE WORD 'test'

Array.from(books).forEach(function(book) {
    book.textContent += '(book title)';
})

// ^^^ RETURNS The Wise Man's Fear (book title) as a line, but for all of the lines (with titles still individualized)
// ^^ += means 'keep this the same but also, add this extra thing in'

var booklist = document.querySelector('#book-list')
booklist.innerHTML = '<h2>Books & More Books...</h2>'
booklist.innerHTML += '<p>This is how you add HTML...</p>'

//comment out the above lines and see what they do. big differences. noticable







// Array.from(books).forEach(function(book){
//   book.textContent += ' (Book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML content</p>';
