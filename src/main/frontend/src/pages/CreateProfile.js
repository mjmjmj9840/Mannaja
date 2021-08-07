function CreateProfile(props) {
  return (
    <div id="create_profile_wrap" className="flex text_white">
      <div className="items">
        <p className="text_100px">안양 돼지파티</p>
        <p className="text_30px">그룹에 참여할 프로필을 생성해주세요</p>
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
        <button id="create_profile_btn">프로필 생성하기</button>
      </div>
    </div>
  );
}

export default CreateProfile;
