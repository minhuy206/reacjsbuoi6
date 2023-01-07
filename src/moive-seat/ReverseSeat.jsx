import React, { Component } from "react";
import styles from "./style.module.css";

export default class ReverseSeat extends Component {
  render() {
    return (
      <li style={{ display: "inline-block" }}>
        <div
          className="mx-1"
          style={{ position: "relative", display: "inline-block" }}
        >
          <input
            className={styles.input}
            style={{ backgroundColor: "orange" }}
            type="checkbox"
            onChange={this.handleOnCheck}
            disabled
          />
          <label
            className={styles.checkmark}
            style={{ backgroundColor: "orange" }}
          ></label>
        </div>
      </li>
    );
  }
}
