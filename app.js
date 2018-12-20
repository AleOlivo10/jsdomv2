//EVENT BUBBLING

//in a sense, event bubbling is an event bubbling its way up the DOM treeS

//the last version of the event listener code we did was inefficient and we're going to improve upon it in this lesson. was inefficient because we had to attach an event listener function to each <span> with a class of 'delete' but if we added a new <li> inside of <ul>, it wouldnt be connected to the event listener and nothing would happen when you pressed that button. also, it takes more effort that necessary for the computer to set one event listener to one button because what if we have a ton of buttons?

var list = document.querySelector('#book-list ul');
//adding eventListener to var list in line 9
list.addEventListener('click', function(action) {
    //action is equal to the purple 'delete' button. target just means that's what you're specifying is the target for the event
    //in other words, we're specifying that the target for the eventListener is the item with the className of 'delete'
    if (action.target.className == 'delete') {
        //when button is clicked, it will grab the li associated with 'delete' className
        var li = action.target.parentElement
        //parent of <li> (which is <ul>) is being told to remove it's child (which is <li>)
        list.removeChild(li)        //list is already equal to <ul> , we did that in the first line
    }
})

//I added an additional button (there are now 5 on the browser) and only the first 4 have an event listener attached

//the above code ensures that all of the 'delete' buttons work becuase it attached a click event listener to the <ul>
















// const list = document.querySelector('#book-list ul');

// // delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });
