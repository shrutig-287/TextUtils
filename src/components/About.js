import React from "react";

export default function About() {
  return (
    <div>
      <h1> About Us</h1>
      <p className="para my-4">
        <strong>TextUtils</strong> is a ReactJs website, designed for a
        multitude of operations on standard typed text, surpassing basic
        drafting and formatting. With a single click, TextUtils can convert text
        to any case, efficiently read text or complex documentation to remove
        whitespaces from scripted documents. The tool conducts a detailed
        analysis of inputted text, presenting word, sentence level and character
        level counts, along with estimated reading time. Notably, TextUtils is
        an open-source project, ensuring continuous improvement with the
        introduction of dozens of new features in upcoming releases, setting it
        apart as an advanced and versatile tool. <br />
        <br />
        Key features of the website include:
      </p>
      <div className="accordion my-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text, and assists you by
              providing accurate word count, character count, and other details
              of your entered text. You can even enhance it by some features
              including removing extra spaces or lines etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It is a free character counter tool that provides instant
              character and word count statistics for a given text. TextUtils is
              totally free of cost, and easily to use for any kind of text. It
              can help in writing text with character or word count limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any browser like Chrome,
              Safari, Firefox, etc. It suits to count characters in books, blog,
              excel docs, pdfs, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
