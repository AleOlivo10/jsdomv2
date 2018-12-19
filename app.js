//DOM TRAVERSAL (PARENT AND CHILD)

var bookList = document.querySelector('#book-list');

console.log('the parent node is:', bookList.parentNode); // you get| the parent node is: <div id="wrapper">...</div>  | containing all the nested stuff inside of "..."
//                                                        <div id="wrapper"> is the direct parent of #book-list

//.parentElement and .parentNode are two ways to do the same thing and get the same result

console.log('the parent element is:', bookList.parentElement);                //is the same way to ask the above line. gives the same answer


console.log('the parent element is:', bookList.parentElement.parentElement);  //gives the parent of the parent.
//                                                                            The parent of <div id="wrapper">...</div> is <body>...</body>



//PARENTS ABOVE
//----------------------------
//CHILDREN BELOW

console.log(bookList.childNodes); //you get a node list--> NodeList(5) [text, h2.title, text, ul, text] | is too detailed and not ideal. gives info on line breaks

console.log(bookList.children); //you get HTML collection--> HTMLCollection(2) [h2.title, ul] | is best because it gives only pertinent info on children
















// const bookList = document.querySelector('#book-list');

// console.log('book list parent element:', bookList.parentElement);
// console.log('book list parent node:', bookList.parentNode);

// console.log('all node children:');
// Array.from(bookList.childNodes).forEach(function(node){
//   console.log(node);
// });

// console.log('all element children:');
// Array.from(bookList.children).forEach(function(node){
//   console.log(node);
// });

// const titles = bookList.querySelectorAll('.name');

// console.log('Book titles:');
// Array.from(titles).forEach(function(title){
//   console.log(title.textContent);
// });
