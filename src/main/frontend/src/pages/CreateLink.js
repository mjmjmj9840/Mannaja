import { Link } from "react-router-dom";
import React from "react";

const CreateLink = () => {
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
          id="group_name"
          name="group_name"
          type="text"
          placeholder="그룹명"
          maxLength="10"
        />
        <br />
        <input
          id="nickname"
          name="nickname"
          type="text"
          placeholder="닉네임"
          maxLength="10"
        />
        <br />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호(숫자 4자리)"
          maxLength="4"
        />
        <br />
        <button id="create_link_btn" onClick={fnCreateLink}>
          링크 생성
        </button>
      </div>
      <div id="image_wrap" className="items">
        <img src="/images/phone_txt.png" alt="휴대폰" />
      </div>
    </div>
  );
};

const fnCreateLink = () => {
  if (fnValidationCheck) {
    if (fnCheckDuplicate) {
      // TODO : 링크 생성 로직 (동기)
      // GO TO CreatedLink
    }
  }
};

const fnValidationCheck = () => {
  let group_name = document.getElementById("group_name");
  let nickname = document.getElementById("nickname");
  let password = document.getElementById("password");
  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/; // 영어 + 한글 + 숫자 정규식

  if (group_name.maxLength === 0 || group_name) {
  }
  return true;
};

const fnCheckDuplicate = () => {
  // TODO : 그룹명 중복 체크 로직
  return true;
};

export default CreateLink;
