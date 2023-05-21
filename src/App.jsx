import { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import AddBook from "./component/AddBook";
import BookList from "./component/BookList";
import fetchBooksData from "./fetchBooksData";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = async (bookName) => {
    try {
      const { data } = await axios.post("http://localhost:3001/books", {
        name: bookName,
      });
      setBooks((prev) => [...prev, data]);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const result = await fetchBooksData("http://localhost:3001/books");
    setBooks(result);
  }

  return (
    <BookContext.Provider value={[books, setBooks]}>
      <BookList />
      <AddBook onSubmit={createBook} />
    </BookContext.Provider>
  );
}

export default App;
