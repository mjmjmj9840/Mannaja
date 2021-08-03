function CreateLink() {
  return (
    <div id="create_link_wrap">
      <div id="title_wrap">
        <p id="title">만나자며👀</p>
        <p id="title_explanation">만날 시간과 장소를 한 번에 정해보세요😊</p>
        <p id="explanation">
          아래에 그룹명과 닉네임을 입력하고 링크를 생성해 시작할 수 있습니다
        </p>
        <input type="text" placeholder="그룹명"></input>
        <br />
        <input type="text" placeholder="닉네임"></input>
        <br />
        <button>링크생성</button>
      </div>
      <div id="image_wrap"></div>
    </div>
  );
}

export default CreateLink;
