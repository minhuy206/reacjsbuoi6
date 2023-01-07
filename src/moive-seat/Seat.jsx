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
    const { soGheChon } = this.props;
    console.log(soGheChon);
  };

  render() {
    const { info, isConfirm } = this.props;

    const renderInput = () => {
      if (info && info.ten && info.soGhe && !isConfirm) {
        return (
          <input
            className={styles.input}
            type="checkbox"
            onChange={this.handleOnCheck}
          />
        );
      } else {
        return (
          <input
            className={styles.input}
            type="checkbox"
            onChange={this.handleOnCheck}
            disabled
          />
        );
      }
    };
    return (
      <li style={{ display: "inline-block" }}>
        <div
          className="mx-1"
          style={{ position: "relative", display: "inline-block" }}
        >
          {renderInput()}
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
    isConfirm: state.movieSeatReducer.isConfirm,
    isSubmitInfo: state.movieSeatReducer.isSubmitInfo,
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
