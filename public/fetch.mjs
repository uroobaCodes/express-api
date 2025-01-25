async function fetchBooks() {
  try {
    const response = await fetch("/api/books");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const books = await response.json();
    console.log(books);
    return books;
  } catch (error) {
    console.log("Error fetch books", books);
    return [];
  }
}

export default fetchBooks;
