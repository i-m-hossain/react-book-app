import React, { useContext, useState } from "react";
import { BookContext } from "../BookContext";

const EditBook = ({ book, setIsEdit }) => {
    const [books, setBooks] = useContext(BookContext);
    const [updatedBookName, setUpdatedBookName] = useState(book.name);
    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedBooks = books.map((el) =>
            el.id === book.id ? { ...el, name: updatedBookName } : el
        ); //brand new array
        setBooks(updatedBooks)
        setIsEdit(false);
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
