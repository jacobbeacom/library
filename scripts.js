let myLibrary = [];

/*Book constructor, contains the title, author, pagecount, and
whether or not the book has been read */

function Book(title, author, pagecount, beenRead) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.beenRead = beenRead;
}
/* Function to add a new book to the myLibrary array, should be
a form */

function addBookToLibrary(book) {
    myLibrary.push(book);
}


//Function to create a new Div

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


/* Function to display all book objects */

function bookstoDisplay() {
    for (i=0; i < myLibrary.length; i++) {
        if (document.getElementById(myLibrary[i]) == null) {
            makeCard(myLibrary[i]);
        }
    }
}

    //function to open the popup
    
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  //function to close the popup

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/* Button to add new book to the library */

let addBook = document.getElementById("addBook")

addBook.addEventListener('click', openForm) 
    
let title = document.getElementById("title");
let author = document.getElementById("author");
let pagecount = document.getElementById("pagecount");
let beenReadButton = document.getElementById("beenRead");
let submitButton = document.getElementById("submit");



Book.prototype.changeReadStatus = function() {
    if (this.beenRead === true) {
        this.beenRead = false;
    } else {
        this.beenRead = true;
    }
}

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

function deleteBook () {
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton.item(i).addEventListener('click', () => {
            let element = document.getElementById(i);
            element.remove();
            myLibrary.splice(i, 1);
        })
    }
}

submitButton.addEventListener('click', () => {
        let newBook = Object.create(Book);
            newBook.title = title.value;
            newBook.author = author.value;
            newBook.pagecount = pagecount.value;
            newBook.beenRead = beenReadButton.checked;         
            addBookToLibrary(newBook);
        makeCard(newBook);
        readButtonToggle();
        deleteBook();
    closeForm();
});

    

/* Button to remove a book from the library (should appear on each)
display */
    
    // remove book button





function toggleReadStatus() {
    if (newBook.beenRead != true) {
        newBook.beenRead = true;
        readButton.classList.add('readButtonTrue');
    } else {
        newBook.beenRead = false;
        readButton.classList.add('readButtonFalse');
         }
    
}


/* Prototype Function to toggle the read status of a book */

Book.prototype.readStatus = function() {
    if (this.readStatus === true) {
        this.readStatus = false;
    } else {
        this.readStatus = true;
    }
}



