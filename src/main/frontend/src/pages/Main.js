import React from "react";

const Main = () => {
  return (
    <div id="group_main_wrap" className="flex text_gray">
      <div id="member_notice_wrap" className="items flex flex_column">
        <div id="member_wrap">
          <div id="group_name" className="text_center text_white">
            <p className="text_20px text_bold">일이삼사오육칠팔구십</p>
          </div>
          <div id="group_member">
            {/* <그룹원> 으로 표기하면 그룹원 태그로 인식됨 */}
            <p className="group_leader">
              그룹장닉네임
              <img src="/images/leader_crown.png" alt="그룹장 표시" />
            </p>
            <p className="text_bold">일이삼사오육칠팔구십</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
            <p>닉네임</p>
          </div>
        </div>
        <div>
          <div id="notice_area" className="text_center text_white">
            <p className="text_20px text_bold">Notice</p>
          </div>
          <div className="notice_wrap">
            <div className="notice text_center">
              <p className="text_bold">
                일이삼사오육칠팔구십<span> 2021.08.19 00:00:00 </span>
              </p>
              <p>
                일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
              </p>
            </div>
            <div className="notice text_center">
              <p className="text_bold">
                닉네임<span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
            <div className="notice text_center">
              <p className="text_bold">
                닉네임<span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
            <div className="notice text_center">
              <p className="text_bold">
                닉네임<span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
            <div className="notice text_center">
              <p className="text_bold">
                닉네임<span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
          </div>
        </div>
      </div>
      <div className="items flex">
        <div id="meeting_wrap"></div>
      </div>
    </div>
  );
};

export default Main;
