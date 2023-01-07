import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayBoxes extends Component {
  render() {
    const { isConfirm, info, soGheChon } = this.props;
    return (
      <div className="mt-5 mx-auto" style={{ width: "600px" }}>
        {" "}
        <table style={{ backgroundColor: "#fff" }}>
          <thead>
            <tr>
              <th className="text-center" style={{ border: "1px solid black" }}>
                Name
              </th>
              <th className="text-center" style={{ border: "1px solid black" }}>
                Number of Seats
              </th>
              <th className="text-center" style={{ border: "1px solid black" }}>
                Seats
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>
                {isConfirm ? (
                  <textarea
                    name=""
                    id=""
                    disabled
                    value={info.ten}
                    style={{ border: "none", backgroundColor: "#fff" }}
                  ></textarea>
                ) : (
                  <textarea
                    name=""
                    id=""
                    disabled
                    style={{ border: "none", backgroundColor: "#fff" }}
                  ></textarea>
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                {isConfirm ? (
                  <textarea
                    name=""
                    id=""
                    value={info.soGhe}
                    disabled
                    style={{ border: "none", backgroundColor: "#fff" }}
                  ></textarea>
                ) : (
                  <textarea
                    name=""
                    id=""
                    disabled
                    style={{ border: "none", backgroundColor: "#fff" }}
                  ></textarea>
                )}
              </td>
              <td style={{ border: "1px solid black" }}>
                {isConfirm ? (
                  <textarea
                    name=""
                    id=""
                    value={soGheChon}
                    disabled
                    style={{ border: "none", backgroundColor: "#fff" }}
                  ></textarea>
                ) : (
                  <textarea
                    name=""
                    id=""
                    disabled
                    style={{ border: "none", backgroundColor: "#fff" }}
                  ></textarea>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isConfirm: state.movieSeatReducer.isConfirm,
    soGheChon: state.movieSeatReducer.soGheChon,
    info: state.movieSeatReducer.info,
  };
};

export default connect(mapStateToProps, null)(DisplayBoxes);
