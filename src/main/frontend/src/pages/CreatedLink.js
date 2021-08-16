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
          <div
            className="flex flex_column icon_wrap"
            onClick={copy_to_clipboard}
          >
            <img
              id="copy_icon"
              className="icon"
              src="/images/copy.png"
              alt="링크 복사 버튼"
            />
            <span>copy</span>
          </div>
          <div className="flex flex_column icon_wrap">
            <img
              id="go_icon"
              className="icon"
              src="/images/arrow_right_circle.png"
              alt="메인 화면 이동 버튼"
            />
            <span>move</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const copy_to_clipboard = () => {
  const group_link = document.getElementById("group_link");
  group_link.select();
  group_link.setSelectionRange(0, 99999); // 일부 모바일 브라우저(iOS)에서 작동하도록
  document.execCommand("copy");
  group_link.setSelectionRange(0, 0); // 일부 모바일 브라우저(iOS)에서 작동하도록
  alert("클립보드에 복사되었습니다.\n친구들에게 링크를 공유해 보세요!");
};

export default CreatedLink;
