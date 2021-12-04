//Initial Library Array, empty by default.

let myLibrary = [];

//Initial global variable declarations.

let title = document.getElementById("title");
let author = document.getElementById("author");
let pagecount = document.getElementById("pagecount");
let beenReadButton = document.getElementById("beenRead");
let submitButton = document.getElementById("submit");


//Book class decleration

class Book {
    constructor(title, author, pagecount, beenRead) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.beenRead = beenRead;
    }
}
// Function to add the newly created book to the myLibrary array

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//Function to create a new card based on the new object created by the add book form

function makeCard(newBook) {
let container = document.getElementById('body');  
let card = document.createElement('div');
        card.className = "bookCard";
        card.id = myLibrary.indexOf(newBook)
        card.innerHTML = 
        `<div class="cardHeader">
                <p>${newBook.title != "" ? newBook.title : 'ERROR'}</p>
            </div>
            <div class="cardContainer">
                <p>Author: ${newBook.author}</p>
                <p>Page Count: ${newBook.pagecount}</p>
                <div class="buttons">                 
                    <button id=${"readButton" + '[' + myLibrary.indexOf(newBook) + ']'} class="
                    ${newBook.beenRead == true ? 'readButtonTrue':'readButtonFalse'} readButtons">Read</button>    
                    <button id=${"deleteButton" + '[' + myLibrary.indexOf(newBook) + ']'} class=
                    "deleteButtons">Delete</button>
                </div>    
            </div>
        `;
    container.appendChild(card);
}

    //function to open the new book popup
    
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  //function to close the new book popup

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    title.value = "";
    author.value = "";
    pagecount.value = "";
    beenReadButton.checked = false;
}

    //allows the add book button to open the new book form

let addBook = document.getElementById("addBook")
    addBook.addEventListener('click', openForm) 
    
/* Loops through each button in the readButtons class and adds an event
listener to toggle the read status of the book, as well as update the appearance
of the button to reflect read status */


let readButton = document.getElementsByClassName('readButtons');

function readButtonToggle () {    
    for (let i = 0; i < readButton.length; i++) {
        readButton.item(i).addEventListener('click', () => {
            if (myLibrary[i].beenRead === false) {
                document.getElementById(`readButton[${i}]`).className = 'readButtonTrue readButtons';
                myLibrary[i].beenRead = true;
            } else if (myLibrary[i].beenRead === true) {
                document.getElementById(`readButton[${i}]`).className = 'readButtonFalse readButtons';
                myLibrary[i].beenRead = false;
        }
    })
}}

/* Loops through each button in the deleteButtons class and adds an event
listener to delete the corresponding object from the mylibrary array, and removes the
associated card from the page */

let deleteButton = document.getElementsByClassName('deleteButtons')

function deleteBookToggle () {
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton.item(i).addEventListener('click', () => {
            let element = document.getElementById(i);
            element.remove();
            myLibrary.splice(i, 1);
        })
    }
}

/*Function that creates the new object and corresponding card when user clicks the submit
button on the new book form. Calls functions to add functionality to the buttons on the new
card, then closes the form*/

submitButton.addEventListener('click', () => {
        let newBook = new Book();
            newBook.title = title.value;
            newBook.author = author.value;
            newBook.pagecount = pagecount.value;
            newBook.beenRead = beenReadButton.checked;         
            addBookToLibrary(newBook);
                makeCard(newBook);
            readButtonToggle();
        deleteBookToggle();
closeForm();
});
