import React, { useState, useEffect } from "react";
import "./booklabel.css";
// import "../upcomingevents.js";

const BookLabel = ({ sessions }) => {
  const [token, _] = useState(window.localStorage.getItem("token"));
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("Checking books");
    if (token) {
      fetch("/books", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.getItem("token", data.token);
          setBooks(data.books);
        });
    }
  }, []);

  function bookIdToTitle(book_id) {
    const foundBook = books.find((book) => book._id === book_id);
    return foundBook ? foundBook.title : undefined;
  }

  return (
    <div className="label">
      <div className="upcoming-bookclub-book-information">
        {sessions ? (
          sessions.map((session) => (
            <div key={session.chosen_book}>
              <h3>Title: {bookIdToTitle(session.chosen_book)}</h3>
            </div>
          ))
        ) : (
          <h3>No sessions available</h3>
        )}
      </div>
    </div>
  );
};

export default BookLabel;
