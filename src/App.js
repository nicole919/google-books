import React, { Component } from "react";
import Search from "./search";
import BookList from "./bookList";
import Filters from "./filters";
import Header from "./header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchQuery: "",
      bookFilter: "",
      printFilter: ""
    };
  }
  fetchData = searchQuery => {
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const key = "AIzaSyCFtxaGfELceGtAsVAiCbCThaG1pNcTiFE";
    const formattedSearchUrl = this.formatQuery(baseUrl, searchQuery, key);
    fetch(formattedSearchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            "Something went wrong on the network. Please try again later."
          );
        }
        return response;
      })
      .then(response => response.json())
      .then(bookResultsObj => {
        this.setState({
          books: bookResultsObj,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  handleSearchSubmit = (searchSubmitEvent, searchQuery) => {
    searchSubmitEvent.preventDefault();
    this.setState(
      {
        searchQuery: searchQuery
      },
      () => {
        this.fetchData(searchQuery);
      }
    );
  };

  formatQuery = (baseUrl, searchInput, key) => {
    const { bookFilter, printFilter } = this.state;
    let queryParams = [];
    if (searchInput) {
      queryParams.push("q=" + searchInput);
    }

    if (printFilter !== "") {
      queryParams.push("printType=" + printFilter);
    }

    if (bookFilter !== "" && bookFilter !== "any") {
      queryParams.push("filter=" + bookFilter);
    }
    const formattedUrl = baseUrl + `?${queryParams.join("&")}` + "&key=" + key;
    console.log(formattedUrl);
    return formattedUrl;
  };

  handleBookType = bookTypeFormEvent => {
    if (bookTypeFormEvent) {
      this.setState(
        {
          bookFilter: bookTypeFormEvent
        },
        () => {
          this.fetchData(this.state.searchQuery);
        }
      );
    }
  };

  handlePrintType = printTypeFormEvent => {
    if (printTypeFormEvent) {
      this.setState(
        {
          printFilter: printTypeFormEvent
        },
        () => {
          this.fetchData(this.state.searchQuery);
        }
      );
    }
  };

  render() {
    const { books } = this.state;
    console.log(books);
    return (
      <div className="App">
        <Header />
        <Search handleSearchSubmit={this.handleSearchSubmit} />
        <Filters
          handlePrintType={this.handlePrintType}
          handleBookType={this.handleBookType}
        />
        <BookList books={books.items} />
      </div>
    );
  }
}
export default App;
