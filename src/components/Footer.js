import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1", marginBlockStart: "15rem" }}
    >
      <div
        className="text-center text-dark p-2"
        style={{ backgroundColor: "rgb(189 203 255)" }}
      >
        © 2024 Copyright : &nbsp;
        <i className="text-dark">TextUtils - Shruti Gupta</i>
      </div>
    </MDBFooter>
  );
}
