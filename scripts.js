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

function makeCard() {
    let container = document.getElementById('body');
    let card = document.createElement('div');
        card.className = "bookCard";
        card.id = "card" + myLibrary; 
        card.innerHTML = `<div class="card">
        <div class="cardHeader">
            <p>Title</p>
        </div>
            <div class="cardContainer">
                <p>Author: J.R.R Tolkien</p>
                <p>Page Count: 900</p>
               <button id="readButton">Read</button>
            </div>
            </div>`;
        
        
            container.appendChild(card);
 
}


/* Function to display all book objects */

function bookstoDisplay() {
    for (i=0; i < myLibrary.length; i++) {
        
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
let beenRead = false;
    
beenReadButton.addEventListener('click', toggleReadStatus);

submitButton.addEventListener('click', () => {
        let newBook = Object.create(Book);
            newBook.title = title.value;
            newBook.author = author.value;
            newBook.pagecount = pagecount.value;
            newBook.beenRead = beenRead;
    addBookToLibrary(newBook);
    closeForm();
});

    

/* Button to remove a book from the library (should appear on each)
display */
    
    // remove book button


/* Function to toggle the read status of a book */

function toggleReadStatus() {
    if (beenRead != true) {
        beenRead = true;

    } else {
        beenRead = false;
    
}};

/* button or toggle to toggle the read status of a book */

    // toggle read button




