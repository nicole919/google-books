import React, { Component } from "react";

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: ""
    };
  }
}

export default BookDetails;
