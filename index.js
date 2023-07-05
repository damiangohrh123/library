class DOMElements {
  constructor() {
    this.btnAddBook = document.querySelector('.btnAddBook');
    this.addBookForm = document.querySelector('#addBookForm');
    this.library = document.querySelector('.library');
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  toggleRead() {
    this.read = !this.read;
    library.render();
  }
}

class Library {
  myLibrary = [];

  //Add a new book to myLibrary and display it on DOM Tree
  addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(title, author, pages, read);
    this.myLibrary.push(newBook);

    this.render();
  }

  render() {
    domElements.library.textContent = '';

    for (let i = 0; i < this.myLibrary.length; i++) {
      const book = this.myLibrary[i];
  
      const bookElement = document.createElement('div');
      const titleElement = document.createElement('div');
      const authorElement = document.createElement('div');
      const pagesElement = document.createElement('div');
      const readElement = document.createElement('div');

      titleElement.textContent = `Title: ${book.title}`;
      authorElement.textContent = `Author: ${book.author}`;
      pagesElement.textContent = `Pages: ${book.pages}`;
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
        this.removeBook(index);
      });
      bookElement.appendChild(btnRemove);
  
      //Toggle Read button
      const btnToggleRead = document.createElement('button');
      btnToggleRead.textContent = 'Read';
      btnToggleRead.classList.add = 'read';
      btnToggleRead.addEventListener('click', () => {
        const index = i;
        this.myLibrary[index].toggleRead();
      });
      bookElement.appendChild(btnToggleRead);
  
      domElements.library.appendChild(bookElement);
    }
  }

    //Remove book from myLibrary array
  removeBook(i) {
    this.myLibrary.splice(i, 1);
    this.render();
  }
}

const library = new Library();
const domElements = new DOMElements();

//Add book button (Displays form when btnAddBook is clicked on)
domElements.btnAddBook.addEventListener('click', () => {
  domElements.addBookForm.style.display = 'block';
});

//Add a new book to myLibrary when form is submitted
domElements.addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  library.addBookToLibrary();
});




