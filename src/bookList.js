import React, { Component } from "react";
import Book from "./book";

class BookList extends Component {
  static defaultProps = {
    books: []
  };
  render() {
    const books = this.props.books.map((book, i) => <Book {...book} key={i} />);
    return <div className="bookList">{books}</div>;
  }
}

export default BookList;
