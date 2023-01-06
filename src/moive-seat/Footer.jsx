import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const footerStyle = {
      margin: "auto",
      color: "#fff",
      fontSize: "15px",
      letterSpacing: "1px",
      fontWeight: "600",
      lineHeight: "1.7",
      // padding: "0 1em",
    };
    return (
      <div className="container mx-auto" style={footerStyle}>
        <p className="text-center">
          © 2018 Movie Seat Selection . All Rights Reserved | Design by
          W3layouts
        </p>
      </div>
    );
  }
}
