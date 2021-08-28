import React from "react";

const Notice = (props) => {
  return (
    <div className="notice">
      <p className="text_bold">
        {props.data.title}
        <br />
        <span> {props.data.writer} </span>
      </p>
      <p> {props.data.content} </p>
    </div>
  );
};

export default Notice;
