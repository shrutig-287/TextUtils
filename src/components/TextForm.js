import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.alert("Converted to Uppercase! ", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.alert("Converted to Lowercase!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.alert("Removed Extra spaces!", "success");
  };

  const handleRemoveLines = () => {
    let newText = text.split(/[\n]+/);
    setText(newText.join(" "));
    props.alert("Removed extra new lines!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.alert("Content copied to clipboard!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.alert("Cleared Text Area", "success");
  };

  const handleEmptyStrings = (elements) => {
    return elements.filter((element) => {
      return element.length !== 0;
    });
  };

  const handleOnChange = (event) => {
    // I am able to add more text in the box
    setText(event.target.value);
  };
  let regex = /[a-zA-Z]/;

  return (
    <div>
      <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="mb-3 my-4">
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0 || !regex.test(text)}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Change to Uppercase
        </button>
        <button
          disabled={text.length === 0 || !regex.test(text)}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Change to Lowercase
        </button>
        <button
          disabled={text.length === 0 || !text.includes(" ")}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button
          disabled={text.length === 0 || !text.includes("\n")}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveLines}
        >
          Remove new lines
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h4> Your Text Summary</h4>
        <div className="container">
          {/* Replace text.split("\n").join(" ").split(" ") -> text.split(/\s+/) for word count */}
          <p>
            {" "}
            {Math.round(
              0.0008 * handleEmptyStrings(text.split(/\s+/)).length
            )}{" "}
            min. read
            <br />
            Count of sentences: {
              handleEmptyStrings(text.split("\n")).length
            }{" "}
            <br />
            Count of words:{" "}
            {
              handleEmptyStrings(text.split("\n").join(" ").split(" ")).length
            }{" "}
            <br />
            Count of characters: {text.length} <br />
          </p>
        </div>

        <h4>Preview Text</h4>
        <p> {text.length > 0 ? text : "Nothing to preview.."} </p>
      </div>
    </div>
  );
}
