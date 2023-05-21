import React, { useContext } from "react";
import ShowBook from "./ShowBook";
import { BookContext } from "../BookContext";

const BookList = () => {
  const [books] = useContext(BookContext);
  const renderBooks = books.map((book) => (
    <ShowBook book={book} key={book.id} />
  ));
  return <div className="container">{renderBooks}</div>;
};

export default BookList;
