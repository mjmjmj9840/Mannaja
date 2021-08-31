import React from "react";

const Vote = (props) => {
  return (
    <p>
      <span className="vote">
        {props.data.writer} 님의 약속 (기간 : {props.data.startDate} ~
        {props.data.endDate})
      </span>
      <span
        className={`${
          props.data.isWriter
            ? "vote_confirm text_boldM"
            : "vote_confirm text_boldM display_none"
        }`}
      >
        확정
      </span>
      <span
        className={`${
          props.data.isWriter
            ? "vote_confirm text_boldM text_red"
            : "vote_confirm text_boldM text_red display_none"
        }`}
      >
        삭제
      </span>
    </p>
  );
};

export default Vote;
