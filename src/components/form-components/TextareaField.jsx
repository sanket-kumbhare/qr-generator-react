import React from "react";

const TextareaField = ({ id, name, label }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        cols="30"
        rows="2"
        className="form-control"
      ></textarea>
    </div>
  );
};

export default TextareaField;
