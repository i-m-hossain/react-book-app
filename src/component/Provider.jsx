import axios from "axios";
import { useCallback, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import PropTypes from "prop-types";
function Provider({ children }) {
  const [books, setBooks] = useState([]);
  
  const fetchBooks = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/books");
      setBooks(data);
      
    } catch (error) {
      console.log('error', error)
    }
  }, []);

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
  const handleDeleteById = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      const foundBook = books.find((x) => x.id === id);
      const filterBooks = books.filter((book) => book.id !== foundBook.id);
      setBooks(filterBooks);
    } catch (error) {
      console.log("error", error);
    }
  };
  const hanldeUpdateById = async (id, onSubmit, updatedBookName) => {
    try {
      const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
        id: id,
        name: updatedBookName,
      });
      const updatedBooks = books.map((item) =>
        item.id === id ? { ...item, ...data } : item
      ); //brand new array
      setBooks(updatedBooks);
      onSubmit();
    } catch (error) {
      console.log("error", error);
    }
  };
  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    hanldeUpdateById,
    handleDeleteById,
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export default Provider;
Provider.propTypes = {
  children: PropTypes.any,
};
