const btnAddBook = document.querySelector('.btnAddBook');
const addBookForm = document.querySelector('#addBookForm');
const library = document.querySelector('.library');

//Library array
let myLibrary = [];

//Add book button (Displays form when btnAddBook is clicked on)
btnAddBook.addEventListener('click', () => {
  addBookForm.style.display = 'block';
});

//Add a new book to myLibrary when form is submitted
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

//Book constructor
function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

//Read status
Book.prototype.toggleRead = function() {
  this.read = !this.read;
  render();
}

//Remove book from myLibrary array
Book.prototype.removeBook = function(i) {
  myLibrary.splice(i, 1);
  render();
}

//Add a new book to myLibrary and display it on DOM Tree
function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  
  render();
}

//Function for appending book properties to DOM Tree
function render() {
  while(library.firstChild) {
    library.removeChild(library.firstChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    //Book Element
    const bookElement = document.createElement('div');

    //Title
    const titleElement = document.createElement('div');
    titleElement.textContent = `Title: ${book.title}`;
    
    //Author
    const authorElement = document.createElement('div');
    authorElement.textContent = `Author: ${book.author}`;

    //Pages
    const pagesElement = document.createElement('div');
    pagesElement.textContent = `Pages: ${book.pages}`;

    //Read
    const readElement = document.createElement('div');
    readElement.textContent = book.read;

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);

    //Remove button
    const btnRemove = document.createElement("button");
    btnRemove.textContent = 'Remove';
    btnRemove.classList.add = 'btnRemove';
    btnRemove.addEventListener('click', () => {
      const index = i;
      myLibrary[index].removeBook(index);
    });
    bookElement.appendChild(btnRemove);

    //Toggle Read button
    const btnToggleRead = document.createElement('button');
    btnToggleRead.textContent = 'Read';
    btnToggleRead.classList.add = 'read';
    btnToggleRead.addEventListener('click', () => {
      const index = i;
      myLibrary[index].toggleRead();
    });
    bookElement.appendChild(btnToggleRead);

    library.appendChild(bookElement);
  }
}
