import React, { useContext, useState } from "react";
import { BookContext } from "../BookContext";
import axios from "axios";

const EditBook = ({ book, setIsEdit }) => {
  const [books, setBooks] = useContext(BookContext);
  const [updatedBookName, setUpdatedBookName] = useState(book.name);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/books/${book.id}`, {
        id: book.id,
        name: updatedBookName,
      });
      const updatedBooks = books.map((el) =>
        el.id === book.id ? { ...el, name: updatedBookName } : el
      ); //brand new array
      setBooks(updatedBooks);
      setIsEdit(false);
    } catch (error) {
        console.log("error", error)
    }
  };
  return (
    <form className="edit-book-container" onSubmit={handleUpdate}>
      <input
        type="text"
        value={updatedBookName}
        onChange={(e) => setUpdatedBookName(e.target.value)}
      />
      <button>Update</button>
    </form>
  );
};

export default EditBook;
