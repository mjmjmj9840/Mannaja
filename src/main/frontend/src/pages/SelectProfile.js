function SelectProfile(props) {
  return (
    <div id="select_profile_wrap" className="flex text_white">
      <div className="items">
        <p className="text_100px">안양 돼지파티</p>
        <p className="text_30px">그룹에 참여할 프로필을 선택해주세요</p>
        <div id="nickname_wrap">
          <p className="nickname">돼지새끼삼형제</p>
          <br />
          <p className="nickname">마포구 불주먹</p>
          <br />
          <p className="nickname">전설의 개발자</p>
          <br />
        </div>
        <button id="create_profile_btn">새 프로필 생성하기</button>
      </div>
    </div>
  );
}

export default SelectProfile;
