import React from "react";

const Main = () => {
  return (
    <div id="group_main_wrap" className="flex text_white">
      <div id="member_notice_wrap" className="items flex flex_column">
        <div id="member_wrap"></div>
        <div id="notice_wrap"></div>
      </div>
      <div className="items">
        <div id="meeting_wrap"></div>
      </div>
    </div>
  );
};

export default Main;
