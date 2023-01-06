import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./style.module.css";
// import { connect } from "react-redux";

class Seat extends Component {
  handleOnCheck = (event) => {
    const { soGhe } = this.props;
    if (event.target.checked) {
      this.props.checkSeat(soGhe);
    } else {
      this.props.uncheckSeat(soGhe);
    }
  };

  render() {
    const { info, soGheChon } = this.props;
    // console.log(soGheChon.length());
    console.log(soGheChon.prototype);

    return (
      <li style={{ display: "inline-block" }}>
        <div
          className="mx-1"
          style={{ position: "relative", display: "inline-block" }}
        >
          {info ? (
            <input
              className={styles.input}
              type="checkbox"
              onChange={this.handleOnCheck}
            />
          ) : (
            <input
              className={styles.input}
              type="checkbox"
              onChange={this.handleOnCheck}
              disabled
            />
          )}
          <label className={styles.checkmark}></label>
        </div>
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    info: state.movieSeatReducer.info,
    soGheChon: state.movieSeatReducer.soGheChon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkSeat: (soGhe) => {
      const action = {
        type: "CHECK_SEAT",
        payload: soGhe,
      };
      dispatch(action);
    },
    uncheckSeat: (soGhe) => {
      const action = {
        type: "UNCHECK_SEAT",
        payload: soGhe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
