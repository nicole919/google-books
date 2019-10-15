import React from "react";
import "./book.css";

export default function Book(props) {
  console.log(props);
  return (
    <div className="books">
      <div className="books-row">
        <h2>
          <div className="books-title">{props.volumeInfo.title}</div>
        </h2>
        <h4>
          <div className="books-author">{props.volumeInfo.authors}</div>
        </h4>
        <p>
          <div className="books-desc">{props.volumeInfo.description}</div>
        </p>
      </div>
    </div>
  );
}
