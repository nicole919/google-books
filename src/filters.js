import React from "react";
import "./filter.css";

function Filters(props) {
  const { handlePrintType, handleBookType } = props;

  return (
    <div className="filterOptions">
      <label className="filterPrint">Print type:</label>
      <form
        action=""
        className="printType"
        onChange={e => handlePrintType(e.target.value)}
      >
        <select className="filterPrint">
          <option value="all">all</option>
          <option value="magazines">magazines</option>
          <option value="books">books</option>
        </select>
      </form>
      <form
        action=""
        className="bookType"
        onChange={e => handleBookType(e.target.value)}
      >
        <label className="bookType">Book availability</label>
        <select className="bookType">
          <option value="any">any</option>
          <option value="free-ebooks">free e-book</option>
          <option value="paid-ebooks">paid e-book</option>
        </select>
      </form>
    </div>
  );
}
export default Filters;
