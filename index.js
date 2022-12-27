const cardContainer = document.querySelector(".main");

let myLibrary = [];

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

function addBookToLibrary(book) {
  myLibrary.push(book);
  return;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const testBook = new Book("Test", "Mr. Test", 300, false);
addBookToLibrary(theHobbit);
addBookToLibrary(testBook);
console.log(myLibrary);

myLibrary.forEach((book) => {
  let bookCard = document.createElement("div");
  let title = document.createElement("h2");
  let author = document.createElement("h3");
  let pages = document.createElement("p");
  let readStatus = document.createElement("p");

  title.textContent = book.title;
  author.textContent = `by ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  readStatus.textContent = book.readStatus ? "Read" : "Not read yet";

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readStatus);
  bookCard.classList.add("card");

  cardContainer.appendChild(bookCard);
});
