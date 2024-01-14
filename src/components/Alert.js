import React from "react";

function Alert(props) {
  const capitalize = (text) => {
    const lowertype = text.toLowerCase();
    return lowertype.charAt(0).toUpperCase() + lowertype.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
          role="alert"
        >
          <strong> {capitalize(props.alert.typ)} </strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
