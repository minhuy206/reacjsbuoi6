import React, { Component } from "react";

export default class DisplayBoxes extends Component {
  render() {
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
                <textarea
                  name=""
                  id=""
                  disabled
                  style={{ border: "none", backgroundColor: "#fff" }}
                ></textarea>
              </td>
              <td style={{ border: "1px solid black" }}>
                <textarea
                  name=""
                  id=""
                  disabled
                  style={{ border: "none", backgroundColor: "#fff" }}
                ></textarea>
              </td>
              <td style={{ border: "1px solid black" }}>
                <textarea
                  name=""
                  id=""
                  disabled
                  style={{ border: "none", backgroundColor: "#fff" }}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
