import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import { connect } from "react-redux";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: "",
      soGhe: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (events) => {
    // Chan load lai trang web
    console.log(this.state);
    events.preventDefault();
    this.props.submitInfo(this.state);
  };

  render() {
    const h2Style = {
      color: "#ff9800",
      textTransform: "capitalize",
      marginBottom: "25px",
      fontSize: "1em",
      letterSpacing: "0.5px",
      lineHeight: "1.7",
    };
    const labelStyle = {
      fontSize: "1em",
      color: "#fff",
      fontWeight: "600",
    };
    return (
      <>
        <h2 style={h2Style}>
          Fill the required details below and select your seats
        </h2>
        <form action="/action_page.php" onSubmit={this.handleSubmit}>
          <div className="d-flex">
            <div className="form-group" style={{ width: "50%" }}>
              <label htmlFor="name" style={labelStyle}>
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="ten"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group mx-4" style={{ width: "50%" }}>
              <label htmlFor="soGhe" style={labelStyle}>
                Number of Seats <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="soGhe"
                name="soGhe"
                onChange={this.handleOnChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-light">
            Start Selecting
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitInfo: (info) => {
      const action = {
        type: "SUBMIT_INFO",
        payload: info,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(InputForm);
