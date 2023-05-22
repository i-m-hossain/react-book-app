import PropTypes from 'prop-types';
import { useState } from "react";
import EditBook from "./EditBook";

import useBookContext from "../hooks/useBookContext";

const ShowBook = ({ book }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { handleDeleteById } = useBookContext();
  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const handleDelete = () => {
    handleDeleteById(book.id);
  };
  const handleSubmit = () => {
    setIsEdit(false);
  };
  return (
    <div className="book-container">
      <div>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
      {isEdit ? (
        <EditBook book={book} onSubmit={handleSubmit} />
      ) : (
        <h3>{book.name}</h3>
      )}
    </div>
  );
};

export default ShowBook;
ShowBook.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string
  })
};
