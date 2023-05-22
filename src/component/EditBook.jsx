import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const EditBook = ({ book, onSubmit  }) => {
  const { hanldeUpdateById } = useContext(BookContext);
  const [updatedBookName, setUpdatedBookName] = useState(book.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await hanldeUpdateById(book.id, onSubmit, updatedBookName);
  };

  return (
    <form className="edit-book-container" onSubmit={handleSubmit}>
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
