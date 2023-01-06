import React, { Component } from "react";
import DisplayBoxes from "./DisplayBoxes";
import InputForm from "./InputForm";
import SeatContainer from "./SeatContainer";
import styles from "./style.module.css";

export default class Body extends Component {
  render() {
    return (
      <div className="container">
        <div className={styles.body}>
          <InputForm />
          <SeatContainer />
          <DisplayBoxes />
        </div>
      </div>
    );
  }
}
