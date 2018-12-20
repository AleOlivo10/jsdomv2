//DOM EVENTS AND REMOVING CONTENT FROM THE DOM

//an event is the action happening on the browser. When you press the 'delete' button thats a click event. When you hit the space inside the search bar and it shows that line that means its ready to write text, that's a key-press event. When you hit 'add' to add a book to the list, that's a submit event.

//we add event-listeners to the elements we want to listen to events on

var h2 = document.querySelector('#book-list h2')

//there are many kinds of events. for example I could have put 'keypress' instead of 'click'
//the function inside of the the addEventListener tells the code what to do once it's 'heard' something. It is a callback function
//'action' is a made up name for my parameter

h2.addEventListener('click', function (action) {
  console.log(action.target)
  console.log(action)
})  

//the code above has to be entered into the inspect-console so you can see what happens when you click on h2


// -------------------------------------------------------


//book-list is the DIV id where the list of books is contained. delete is the class for all of he buttons
//we cant do btns.addEventListener() because delete buttons are a collection of elements, not a single one
//we want to loop through them and add an event listener to each one, which means we need to turn this collection into an array
//when click happens the code removes the <li> so that the title is deleted


var btns = document.querySelectorAll('#book-list.delete')

Array.from(btns).forEach(function(btns) {
  btns.addEventListener('click', function(action) {
    
    var li = action.target.parentElement    //what we want to happen when click happens
    li.parentNode.removeChild(li)              //parent of <li> is <ul>, which is why we're telling <li>'s parent to remove it's child
    
  })
})

// -----------------------------------------------
//GOTTA BE HONEST, I JUST COPY/PASTED BELOW WHAT WAS ALREADY THERE
 // prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});












// const listItems = document.querySelectorAll('#book-list ul li');

// Array.from(listItems).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });

// // prevent default behaviour

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Navigation to', e.target.textContent, 'was prevented');
// });
