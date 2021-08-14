import { Link } from "react-router-dom";
import React from "react";

const createLink = () => {
  return (
    <div id="create_link_wrap" className="flex text_white">
      <div id="title_wrap" className="items">
        <p className="text_100px text_bold">만나자며👀</p>
        <p className="text_30px text_boldM">
          만날 시간과 장소를 한 번에 정해보세요😊
        </p>
        <p className="text_20px">
          아래에 그룹명과 닉네임을 입력하고 링크를 생성해 시작할 수 있습니다.
        </p>
        <input
          name="group_name"
          type="text"
          placeholder="그룹명"
          maxLength="10"
        />
        <br />
        <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          maxLength="10"
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="비밀번호(숫자 4자리)"
          maxLength="4"
        />
        <br />
        <button id="create_link_btn">링크 생성</button>
      </div>
      <div id="image_wrap" className="items">
        <img src="/images/phone_txt.png" />
      </div>
    </div>
  );
};

export default createLink;
