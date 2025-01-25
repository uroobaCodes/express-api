import express from "express";
// create my express app
const app = express();
// serve static files from public folder
app.use(express.static("public"));
//
// handling incoming post requests JSON from Frontend
app.use(express.json());
// books array
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// route handler middleware to serve books
app.get("/api/books", (req, res, next) => {
  res.status(200).json(books);
});
//
// POST request api endpoint
app.post("/api/books", (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res(400).json({ message: "Title and author are required" });
  }
  // if title and author are available create an new book object
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);

  // return the book with success message to frontend
  res.status(201).json({ message: "Book added successfully", book: newBook });
});
// port
const PORT = 3000;

//
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
