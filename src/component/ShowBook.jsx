import React, { useContext, useState } from "react";
import { BookContext } from "../BookContext";
import EditBook from "./EditBook";
import axios from "axios";

const ShowBook = ({ book }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [books, setBooks] = useContext(BookContext);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/books/${book.id}`);
      const foundBook = books.find((x) => x.id === book.id);
      const filterBooks = books.filter((book) => book.id !== foundBook.id);
      setBooks(filterBooks);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="book-container">
      <div>
        <button onClick={() => setIsEdit((prev) => !prev)}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
      {isEdit ? (
        <EditBook book={book} setIsEdit={setIsEdit} />
      ) : (
        <h3>{book.name}</h3>
      )}
    </div>
  );
};

export default ShowBook;
