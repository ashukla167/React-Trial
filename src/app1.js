import React from "react";
import template from "./template1";
import "./style.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  render() {
    const props = {
      ...this.state
    };
    return template(props);
  }
}
