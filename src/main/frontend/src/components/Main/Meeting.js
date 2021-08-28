import React from "react";

const Meeting = (props) => {
  return (
    <div className="meeting">
      <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
      <p>{props.data.date}</p>
      <p>장소 : {props.data.place}</p>
      <p className="text_ellipsis">참여자 : {props.data.participants}</p>
    </div>
  );
};

export default Meeting;
