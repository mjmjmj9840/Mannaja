import React from "react";

const Main = () => {
  return (
    <div id="group_main_wrap" className="flex text_gray">
      <div id="member_notice_wrap" className="items flex flex_column">
        <div>
          <div
            id="group_name"
            className="text_center text_white text_20px text_bold text_ellipsis"
          >
            일이삼사오육칠팔구십
          </div>
          <div id="member_wrap" className="text_15px">
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
          <div
            id="notice_area"
            className="text_center text_white text_20px text_bold"
          >
            Notice
          </div>
          <div id="notice_wrap" className="text_center text_15px">
            {/* 게시글이 없을 경우
            <p className="text_boldM">게시글이 없습니다.</p>
            */}
            <div className="notice">
              <p className="text_bold">
                일이삼사오육칠팔구십
                <br />
                <span> 2021.08.19 00:00:00 </span>
              </p>
              <p>
                일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
              </p>
            </div>
            <div className="notice">
              <p className="text_bold">
                닉네임
                <br />
                <span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
            <div className="notice">
              <p className="text_bold">
                닉네임
                <br />
                <span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
            <div className="notice">
              <p className="text_bold">
                닉네임
                <br />
                <span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
            <div className="notice">
              <p className="text_bold">
                닉네임
                <br />
                <span> yyyy.mm.dd hh:mi:ss </span>
              </p>
              <p>공지 제목</p>
            </div>
          </div>
        </div>
      </div>
      <div className="items flex">
        <div id="meeting_wrap" className="text_15px">
          <div
            id="meeting_area"
            className="text_center text_white text_20px text_bold"
          >
            Meeting
          </div>
          <div id="meetings_wrap">
            {/*
          일정이 없을 경우
          <p className="text_boldM">생성된 일정이 없습니다.</p>
          */}
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
              <p>2021년 8월 19일 목요일 오후 11시 37분</p>
              <p>장소 : 범계역</p>
              <p className="text_ellipsis">
                참여자 : 그룹장닉네임, 일이삼사오육칠팔구십, 닉네임, 닉네임,
                닉네임, 닉네임, 닉네임, 닉네임, 닉네임, 닉네임, 닉네임, 닉네임,
                닉네임, 닉네임, 닉네임, 닉네임, 닉네임
              </p>
            </div>
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 약속잡기 &gt;</p>
              <p>
                일이삼사오육칠팔구십 님의 약속 (기간 : yyyy.mm.dd ~ yyyy.mm.dd)
              </p>
            </div>
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
              <p>yyyy년 mm월 dd일 E요일 오전 hh시 mm분</p>
              <p>장소 : place</p>
              <p className="text_ellipsis">참여자 : 닉네임</p>
            </div>
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
              <p>yyyy년 mm월 dd일 E요일 오전 hh시 mm분</p>
              <p>장소 : place</p>
              <p className="text_ellipsis">참여자 : 닉네임</p>
            </div>
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
              <p>yyyy년 mm월 dd일 E요일 오전 hh시 mm분</p>
              <p>장소 : place</p>
              <p className="text_ellipsis">참여자 : 닉네임</p>
            </div>
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
              <p>yyyy년 mm월 dd일 E요일 오전 hh시 mm분</p>
              <p>장소 : place</p>
              <p className="text_ellipsis">참여자 : 닉네임</p>
            </div>
            <div className="meeting">
              <p className="text_20px text_bold">&lt; 다음일정 &gt;</p>
              <p>yyyy년 mm월 dd일 E요일 오전 hh시 mm분</p>
              <p>장소 : place</p>
              <p className="text_ellipsis">참여자 : 닉네임</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
