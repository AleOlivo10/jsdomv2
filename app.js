// div = header = form //these are sibling element. They operate at the same level


var bookList = document.querySelector('#book-list');

console.log('book-list next sibling is:', bookList.nextSibling);    //console says #text is the next sibling. this is #text node that shows line-breaks
console.log('book-list next element sibling is:', bookList.nextElementSibling);    // you get <form id="add-book">...</form> with all the form (search bar) stuff nested


console.log('book-list previous sibling is:', bookList.previousSibling);    //console says #text is the next sibling. this is #text node that shows line-breaks
console.log('book-list previous element sibling is:', bookList.previousElementSibling);    // you get <header>...</header> with all the header stuff nested inside


// ---------------------------------------------------------

// GETTING TRICKIER NOW!

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for school';

//bookList.previousElementSibling references the #book-list (this is our starting point. We know <header> is a sibling)
//querySelector is QUERYING everything inside of <header>
//querySelector('p') specifies that we're grabbing this particular <p> within the <header> 
// .innerHTML tells the computer that we're messing around with the text contained within this p tag
// += means 'keep what's already there but also add this in'
// <br/> is another line. (i think?)









// const bookList = document.querySelector('#book-list');

// console.log('#book-list next sibling:', bookList.nextSibling);
// console.log('#book-list next element sibling:', bookList.nextElementSibling);
// console.log('#book-list previous sibling:', bookList.previousSibling);
// console.log('#book-list previous element sibling:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
