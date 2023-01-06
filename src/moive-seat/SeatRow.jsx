import React, { Component } from "react";
import Seat from "./Seat";
import styles from "./style.module.css";

export default class SeatRow extends Component {
  render() {
    const renderSeat = () => {
      if (row.hang === "") {
        return row.danhSachGhe.map((seat) => {
          return (
            <li
              className="mx-1"
              style={{
                display: "inline-block",
                width: "45px",
                textAlign: "center",
              }}
              key={seat.soGhe}
            >
              {seat.soGhe}
            </li>
          );
        });
      } else {
        return row.danhSachGhe.map((seat) => {
          return <Seat key={seat.soGhe} soGhe={seat.soGhe} />;
        });
      }
    };
    const { row } = this.props;
    return (
      <li
        className="align-items-center"
        style={{ listStyle: "none", display: "flex" }}
      >
        <span className="d-inline-block text-center" style={{ width: "20px" }}>
          {row.hang}
        </span>
        <ul style={{ listStyle: "none", padding: "0" }}>{renderSeat()}</ul>
      </li>
    );
  }
}
