import ShowBook from "./ShowBook";
import useBookContext from "../hooks/useBookContext";

const BookList = () => {
  const { books } = useBookContext();
  const renderBooks = books.map((book) => (
    <ShowBook book={book} key={book.id} />
  ));
  return <div className="container">{renderBooks}</div>;
};

export default BookList;
