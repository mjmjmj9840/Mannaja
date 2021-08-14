import { Link } from "react-router-dom";
import React from "react";

const CreatedLink = () => {
  return (
    <div id="created_link_wrap" className="flex text_white">
      <div className="items">
        <p className="text_100px text_bold">안양 돼지파티</p>
        <div id="link_wrap" className="flex">
          <input
            id="group_link"
            type="text"
            value="http://localhost:8080/group/00001"
            readOnly
          />
          <div className="flex flex_column icon_wrap">
            <img id="copy_icon" className="icon" src="/images/copy.png" />
            <span>copy</span>
          </div>
          <div className="flex flex_column icon_wrap">
            <img
              id="go_icon"
              className="icon"
              src="/images/arrow_right_circle.png"
            />
            <span>move</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedLink;
