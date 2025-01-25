async function addBook(title, author) {
  try {
    const response = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, //this suggests we're sending json
      body: JSON.stringify({ title, author }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.message);
    return data.book;
  } catch (err) {
    console.log(`error sending book: ${err}`);
  }
}

export default addBook;
