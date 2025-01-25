function renderBooks(books) {
  const bookList = document.createElement("ul");
  bookList.className = "book-parent";
  document.body.appendChild(bookList);
  const bookHeader = document.createElement("h2");
  bookHeader.innerHTML = "List of available books:";
  bookHeader.className = "book-header";
  bookList.appendChild(bookHeader);
  // creating list items
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerHTML = `${book.title} by ${book.author}`;
    bookList.appendChild(listItem);
  });
}

export default renderBooks;
