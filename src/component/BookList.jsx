import React from "react";
import ShowBook from "./ShowBook";

const BookList = ({ books }) => {
    const renderBooks = books.map((item) => <ShowBook book={item} key={item.id} />);
    return <div className="container">{renderBooks}</div>;
};

export default BookList;
