import fetchBooks from "./fetch.mjs";
import renderBooks from "./render.mjs";
import addBook from "./post.mjs";

document.addEventListener("DOMContentLoaded", async () => {
  const books = await fetchBooks();
  renderBooks(books);
});

const form = document.getElementById("addBookForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const newBook = await addBook(title, author);
  console.log(newBook);

  // reflect changes in the UI
  // grab the existing ul
  const bookList = document.querySelector("ul");
  // create a new list item
  const listItem = document.createElement("li");
  listItem.innerHTML = `${newBook.title} by ${newBook.author}`;
  // add the new list item to the ul
  bookList.appendChild(listItem);
});
