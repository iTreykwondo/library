const cardContainer = document.querySelector(".main");
const formSubmitButton = document.querySelector(".form-submit");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let pages = document.querySelector("#pages");
let readStatus = document.querySelector("#read-status");

let myLibrary = [];
let book;

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      readStatus ? "read" : "not read yet"
    }`;
  };
}

Book.prototype.toggleReadStatus = function () {
  this.readStatus = !this.readStatus;
  return this.readStatus ? "Read" : "Not read yet";
};

function addBookToLibrary() {
  book = new Book(
    bookTitle.value,
    bookAuthor.value,
    pages.value,
    readStatus.checked
  );

  myLibrary.push(book);
  createBookCard(book);

  return;
}

function resetForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  pages.value = "";
  readStatus.checked = false;
}

function createBookCard(book) {
  let bookCard = document.createElement("div");
  let title = document.createElement("h2");
  let author = document.createElement("h3");
  let pages = document.createElement("p");
  let readStatus = document.createElement("button");
  let deleteBookButton = document.createElement("button");
  let buttonContainer = document.createElement("div");

  title.textContent = book.title;
  author.textContent = `by ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  readStatus.textContent = book.readStatus ? "Read" : "Not read yet";
  deleteBookButton.textContent = "Delete Book";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonContainer.appendChild(readStatus);
  buttonContainer.appendChild(deleteBookButton);
  bookCard.appendChild(buttonContainer);

  buttonContainer.classList.add("btn-container");
  readStatus.classList.add("read-status-btn");
  deleteBookButton.classList.add("delete-btn");
  bookCard.classList.add("card");

  cardContainer.appendChild(bookCard);

  readStatus.addEventListener("click", () => {
    readStatus.textContent = book.toggleReadStatus();
  });

  deleteBookButton.addEventListener("click", () => {
    let index = Array.from(bookCard.parentNode.children).indexOf(bookCard);

    if (index > -1) {
      myLibrary.splice(index, 1);
    }

    if (cardContainer.hasChildNodes()) {
      cardContainer.removeChild(cardContainer.children[index]);
    }
  });
}

formSubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  resetForm();
});
