import { useState } from "react";
import { BookContext } from "./BookContext";
import AddBook from "./component/AddBook";
import BookList from "./component/BookList";

function App() {
    const [books, setBooks] = useState([]);
    const createBook = (book) => {
        setBooks((prev) => [...prev, book]);
    };
    return (
        <BookContext.Provider value={[books, setBooks]}>
            <BookList books={books} />
            <AddBook onSubmit={createBook} />
        </BookContext.Provider>
    );
}

export default App;
