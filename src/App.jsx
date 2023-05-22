import AddBook from "./component/AddBook";
import BookList from "./component/BookList";
import { useEffect } from "react";
import useBookContext from "./hooks/useBookContext";

function App() {
  const { fetchBooks } = useBookContext();
  
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <h1>Reading list</h1>
      <BookList />
      <AddBook />
    </>
  );
}

export default App;
