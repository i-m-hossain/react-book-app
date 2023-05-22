import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const useBookContext = () => useContext(BookContext);

export default useBookContext;
