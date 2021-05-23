import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookContextProvider from "./Context/BookContext";

const App = () => {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <BookForm />
    </BookContextProvider>
  );
};

export default App;
