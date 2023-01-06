import React, { Component } from "react";
import styles from "./style.module.css";
import SeatRow from "./SeatRow";
import { connect } from "react-redux";

class SeatContainer extends Component {
  render() {
    const { Data, info } = this.props;
    return (
      <div>
        <div className="my-5">
          <ul className={styles.ul}>
            <li>
              <div className={styles.gheDangChon}></div>
              <span className="mx-2">Selected Seat</span>
            </li>
            <li>
              <div className={styles.gheDuocChon}></div>
              <span className="mx-2">Reserved Seat</span>
            </li>
            <li>
              <div className={styles.ghe}></div>
              <span className="mx-2">Empty Seat</span>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <p style={info ? { display: "block" } : { display: "none" }}>
              <b
                style={{
                  display: "block",
                  margin: "0px auto",
                  background: "#ff9800",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
                Please Select your Seats NOW!
              </b>
            </p>
          </div>
          <ul className="p-0">
            {Data.map((row) => {
              return <SeatRow row={row} key={row.hang ? row.hang : "Z"} />;
            })}
          </ul>
          <div className={styles.screen}>
            <p
              className="m-0"
              style={{
                position: "absolute",
                top: "25px",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Screen this way
            </p>
          </div>
          <div>
            <button className="d-block btn btn-light mt-3 mx-auto">
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Data: state.movieSeatReducer.data,
    info: state.movieSeatReducer.info,
  };
};

export default connect(mapStateToProps, null)(SeatContainer);
