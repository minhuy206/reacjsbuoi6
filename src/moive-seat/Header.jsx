import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const headerStyle = {
      color: "white",
      fontSize: "4.5vw",
      fontWeigh: "600",
      letterSpacing: "2px",
      margin: "0.8em 1vw 0.9em",
      textAlign: "center",
    };
    return (
      <div>
        <h1 style={headerStyle}>MOVIE SEAT SELECTION</h1>
      </div>
    );
  }
}
