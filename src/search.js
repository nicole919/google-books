import React from "react";
import "./search.css";
export default class Search extends React.Component {
  state = {
    searchInput: ""
  };

  handleSearchInput = searchEvent => {
    this.setState({
      searchInput: searchEvent.target.value
    });
  };
  render() {
    const { handleSearchSubmit } = this.props;
    const { searchInput } = this.state;
    return (
      <>
        <div className="search">
          <form
            className="searchForm"
            onSubmit={submitEvent =>
              handleSearchSubmit(submitEvent, searchInput)
            }
          >
            <input
              className="searchInput"
              type="text"
              placeholder="Search"
              name="search"
              onChange={this.handleSearchInput}
            />
            <button className="s-button" type="submit">
              search
            </button>
          </form>
        </div>
      </>
    );
  }
}
