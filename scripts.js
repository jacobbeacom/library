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
        `<div class="card">
            <div class="cardHeader">
                <p>${newBook.title}</p>
            </div>
            <div class="cardContainer">
                <p>Author: ${newBook.author}</p>
                <p>Page Count: ${newBook.pagecount}</p>
                <div class="buttons">                 
                    <button id="readButton" class=
                    ${newBook.beenRead == true ? 'readButtonTrue' : 'readButtonFalse'}>Read</button>    
                    <button id="deleteBook">Delete</button>
                </div>    
            </div>
        </div>`;
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




submitButton.addEventListener('click', () => {
        let newBook = Object.create(Book);
            newBook.title = title.value;
            newBook.author = author.value;
            newBook.pagecount = pagecount.value;
            newBook.beenRead = beenReadButton.checked; 

            
    addBookToLibrary(newBook);
    makeCard(newBook);
    closeForm();
});

    

/* Button to remove a book from the library (should appear on each)
display */
    
    // remove book button

/* button or toggle to toggle the read status of a book */

let readButton = document.getElementById('readButton');

function toggleReadStatus(newBook) {
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



