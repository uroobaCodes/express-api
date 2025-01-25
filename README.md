# Book Store API

This project is a simple **Book Store API** built using **Node.js** with **Express** for the backend and **Vanilla JavaScript** for the frontend. It allows users to view and add books to the store via a RESTful API.

## Features

- **GET `/api/books`**: Fetch all books.
- **POST `/api/books`**: Add a new book to the store.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bookstoreapi.git
   cd bookstoreapi
### Install Dependencies
```bash
npm install
```
### Running the App

1. Start the server:

```bash
npm run dev
```
This will start the Express server and you can access the API at http://localhost:3000.

### Frontend

The frontend part of the application is in `index.html` and the `script.mjs` file. It allows you to add books and view the list of books by interacting with the backend API.

### API Endpoints

**GET `/api/books`:** Returns a list of books.

**POST `/api/books`:** Allows you to add a new book (requires title and author in the body).

### Development
For local development, the app uses nodemon to auto-reload the server on changes:
```bash
npm run dev
```
