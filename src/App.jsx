import { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import AddBook from "./component/AddBook";
import BookList from "./component/BookList";
import fetchBooksData from "./fetchBooksData";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    const createBook = async(book) => {
        try {
            await axios.post("http://localhost:3001/books", book)
            setBooks((prev) => [...prev, book]);
        } catch (error) {
            console.log("error", error.message)   
        } 
    };
    useEffect(()=>{
        fetchBooks()
    },[])

    async function fetchBooks(){
        const result = await fetchBooksData("http://localhost:3001/books");
        setBooks(result)
    }
  
    return (
        <BookContext.Provider value={[books, setBooks]}>
            <BookList />
            <AddBook onSubmit={createBook} />
        </BookContext.Provider>
    );
}

export default App;
