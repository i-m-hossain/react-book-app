import React, { useState } from "react";
const AddBook = ({ onSubmit }) => {
    const [bookName, setBookName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit( bookName);
        setBookName("");
    };
    return (
        <form onSubmit={handleSubmit} className="add-book-form">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                placeholder="add book name"
                id="title"
            />
            <button type="submit">Add book</button>
        </form>
    );
};

export default AddBook;
