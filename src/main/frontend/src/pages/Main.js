import React, { useEffect } from "react";
import axios from "axios";
import { Meeting, Vote, Notice } from "../components";
import { getDateFormat } from "../utils/commonUtils";

let meetings_data = [
  {
    id: 1,
    date: "2021.08.29 11:00",
    participants: ["닉네임1"],
    place: "장소1",
  },
  {
    id: 2,
    date: "2021.08.29 11:30",
    participants: ["닉네임2"],
    place: "장소2",
  },
  {
    id: 3,
    date: "2021.08.30 12:00",
    participants: ["닉네임3"],
    place: "장소3",
  },
  {
    id: 4,
    date: "2021.08.31 12:30",
    participants: ["닉네임4"],
    place: "장소4",
  },
  {
    id: 5,
    date: "2021.09.01 13:00",
    participants: ["닉네임5"],
    place: "장소5",
  },
];

let meetings = meetings_data.map((o, i) => {
  let data = {
    date: getDateFormat(o.date),
    place: o.place,
    participants: o.participants.join(", "), // ["A", "B"] -> "A, B"
  };

  return <Meeting key={o.id} data={data} />;
});

let votes_data = [
  {
    meetingId: 1,
    startDate: "2021.08.30 00:00",
    endDate: "2021.09.30 23:59",
    votingEndDate: "2021.09.30 23:59",
    writer: "일이삼사오육칠팔구십",
    voter: ["일이삼사오육칠팔구십"],
  },
  {
    meetingId: 2,
    startDate: "2021.08.30 00:00",
    endDate: "2021.09.30 23:59",
    votingEndDate: "2021.09.30 23:59",
    writer: "닉네임1",
    voter: ["닉네임1"],
  },
  {
    meetingId: 3,
    startDate: "2021.08.21 00:00",
    endDate: "2021.08.25 23:59",
    votingEndDate: "2021.08.25 23:59",
    writer: "닉네임2",
    voter: ["닉네임2"],
  },
  {
    meetingId: 4,
    startDate: "2021.08.21 00:00",
    endDate: "2021.08.25 23:59",
    votingEndDate: "2021.08.25 23:59",
    writer: "닉네임3",
    voter: ["닉네임3"],
  },
];

let votes = votes_data.map((o, i) => {
  let data = {
    meetingId: o.meetingId,
    startDate: o.startDate.substr(0, 10), // yyyy.mm.dd
    endDate: o.endDate.substr(0, 10), // yyyy.mm.dd
    writer: o.writer,
    isWriter: o.writer === "일이삼사오육칠팔구십" ? true : false, // 약속 생성자 여부
    // TODO : 세션에 저장된 접속자 정보와 비교
  };

  return <Vote key={o.meetingId} data={data} />;
});

let notices_data = [
  {
    title: "얘들아 내일 늦으면",
    content: "1분당 척추뼈 하나씩 뽑을거야",
    writer: "일이삼사오육칠팔구십",
  },
  {
    title: "공지1",
    content: "공지 내용1",
    writer: "닉네임1",
  },
  {
    title: "공지2",
    content: "공지 내용2",
    writer: "닉네임2",
  },
  {
    title: "공지3",
    content: "공지 내용3",
    writer: "닉네임3",
  },
  {
    title: "공지4",
    content: "공지 내용4",
    writer: "닉네임4",
  },
  {
    title: "공지5",
    content: "공지 내용5",
    writer: "닉네임5",
  },
];

let notices = notices_data.map((o, i) => {
  return <Notice key={i} data={o} />;
});

let members_data = [
  "그룹장닉네임",
  "일이삼사오육칠팔구십",
  "닉네임1",
  "닉네임2",
  "닉네임3",
  "닉네임4",
  "닉네임5",
];

let leader = "그룹장닉네임";

let members = members_data.map((o, i) => {
  let className = "";
  let leaderImg;

  if (o === "일이삼사오육칠팔구십") {
    // TODO : 세션에 저장된 접속자 정보와 비교
    className += "text_bold";
  }

  if (o === leader) {
    className += " group_leader";
    leaderImg = <img src="/images/leader_crown.png" alt="그룹장 표시" />;
  }

  return (
    <p className={className} key={i}>
      {o}
      {leaderImg}
    </p>
  );
});

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
            {members}
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
            {notices}
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
            <div className="votes">
              <p className="text_20px text_bold">&lt; 약속잡기 &gt;</p>
              {votes}
            </div>
            {meetings}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
