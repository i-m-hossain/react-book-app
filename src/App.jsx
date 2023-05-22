import AddBook from "./component/AddBook";
import BookList from "./component/BookList";
import { useContext, useEffect } from "react";
import { BookContext } from "./contexts/BookContext";

function App() {
  const { fetchBooks } = useContext(BookContext);
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <h1>Reading list</h1>
      <BookList />
      <AddBook />
    </>
  );
}

export default App;
