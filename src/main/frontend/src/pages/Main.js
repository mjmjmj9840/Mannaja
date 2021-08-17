import React from "react";

const Main = () => {
  return (
    <div id="group_main_wrap" className="flex text_white">
      <div id="member_notice_wrap" className="items flex flex_column">
        <div id="member_wrap">
          <p className="text_20px text_bold">안양 돼지파티</p>
          <p className="text_boldM">&lt;그룹원&gt;</p>
          {/* <그룹원> 으로 표기하면 그룹원 태그로 인식됨 */}
          <p className="group_member text_bold group_reader">
            불주먹에이스<span className="text_13px"> (그룹장) </span>
          </p>
          <p className="group_member">냠냠쩝쩝</p>
          <p className="group_member">일이삼사오육칠팔구십</p>
          <p className="group_member">돼지1</p>
          <p className="group_member">돼지2</p>
          <p className="group_member">돼지3</p>
          <p className="group_member">돼지4</p>
          <p className="group_member">돼지5</p>
          <p className="group_member">돼지6</p>
        </div>
        <div id="notice_wrap"></div>
      </div>
      <div className="items flex">
        <div id="meeting_wrap"></div>
      </div>
    </div>
  );
};

export default Main;
