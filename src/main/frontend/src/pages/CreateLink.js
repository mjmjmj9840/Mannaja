import axios from "axios";
import React, { useState } from "react";
import sha256 from "crypto-js/sha256";
import { regexEngKorNum, regexNum } from "../utils/commonUtils";

const CreateLink = () => {
  const [groupName, setGroupName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  /**
   * 링크 생성 버튼 클릭 시 실행되는 함수
   * 입력받은 값으로 링크 생성
   */
  const fnCreateLink = async () => {
    let result = null;
    if (fnValidationCheck()) {
      try {
        result = await axios.post("http://localhost:8080/createLink", {
          groupName: groupName,
          nickname: nickname,
          password: sha256(password).toString(), // SHA256으로 암호화 된 비밀번호
        });
      } catch (error) {
        console.log(error);
      }

      result.data.resultCode = "0000";
      if (result.data.resultCode === "0000") {
        // 링크 생성 성공시 createdLink 페이지로 이동
        window.location.replace(
          "/createdLink?groupLink=" + result.data.groupLink
        );
      } else {
        // 링크 생성 실패시 resultMessage 출력
        alert(result.data.resultMessage);
      }
    }
  };

  /**
   * 입력값 검증
   */
  const fnValidationCheck = () => {
    if (groupName === "" || groupName.length === 0) {
      alert("그룹명을 입력해주세요.");
      return false;
    }

    if (nickname === "" || nickname.length === 0) {
      alert("닉네임을 입력해주세요.");
      return false;
    }

    if (password === "" || password.length === 0) {
      alert("비밀번호를 입력해주세요.");
      return false;
    } else if (password.length < 4) {
      alert("비밀번호는 4자리를 입력해주세요.");
      return false;
    }

    return true;
  };

  /**
   * 그룹명 입력 할 때마다 실행되는 함수
   * 한글/영어/숫자만 입력 가능하도록 정규식 사용
   * @param {event} e
   */
  const onChangeGroupName = (e) => {
    let targetValue = e.target.value;

    if (targetValue === "" || regexEngKorNum.test(targetValue)) {
      setGroupName(targetValue);
    }
  };

  /**
   * 닉네임 입력 할 때마다 실행되는 함수
   * 한글/영어/숫자만 입력 가능하도록 정규식 사용
   * @param {event} e
   */
  const onChangeNickname = (e) => {
    let targetValue = e.target.value;

    if (targetValue === "" || regexEngKorNum.test(targetValue)) {
      setNickname(targetValue);
    }
  };

  /**
   * 비밀번호 입력 할 때마다 실행되는 함수
   * 숫자만 입력 가능하도록 정규식 사용
   * @param {event} e
   */
  const onChangePassword = (e) => {
    let targetValue = e.target.value;

    if (targetValue === "" || regexNum.test(targetValue)) {
      setPassword(targetValue);
    }
  };

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
          placeholder="그룹명(영어/한글/숫자 10자리 이내)"
          maxLength="10"
          value={groupName}
          onChange={onChangeGroupName}
        />
        <br />
        <input
          id="nickname"
          name="nickname"
          type="text"
          placeholder="닉네임(영어/한글/숫자 10자리 이내)"
          maxLength="10"
          value={nickname}
          onChange={onChangeNickname}
        />
        <br />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호(숫자 4자리)"
          maxLength="4"
          value={password}
          onChange={onChangePassword}
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

export default CreateLink;
