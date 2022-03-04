import React, { useState } from 'react';
//더미 데이터
import savemap from '../../api/savemap';

const MapListAdd = ({ placeInfo, setMemoAddModal, setMemoContents }) => {
  const [imgFiles, setImgFiles] = useState([]);
  //모든 필수 데이터 입력시 버튼 활성화
  const [disabled, setDisabled] = useState(true);
  //마커의 미리보기 데이터 셋팅 setMemoContents() // 배열안의 객체로 설정

  const onSubmitAddMemo = (e) => {
    e.preventDefault();
  };

  const onKeyDownTitle = () => {};

  const onLoadFiles = (e) => {
    const {
      target: { files },
    } = e;
    console.log(files);
    setImgFiles(files);
  };

  const onClickAddMemo = () => {
    //입력완료시 모달 닫기 setMemoAddModal(false)
    setMemoAddModal(false);
  };

  return (
    <div className="modal_memo_wrap">
      <form onSubmit={onSubmitAddMemo} className="form_w100">
        <div className="input_wrap">
          {/* 메모 타이틀 */}
          <label htmlFor="title_memo_add" className="input_label">
            place name
          </label>
          <input
            type="text"
            name="title"
            id="title_memo_add"
            className="input_underline"
            autoFocus
            required
            onKeyDown={onKeyDownTitle}
            placeholder="이곳의 이름 또는 특징을 입력해주세요"
          />
        </div>
        <div className="input_wrap">
          {/* 이미지 업로드 버튼 */}
          <label htmlFor="file_memo_add" className="button_label_img_add">
            upload images
            <span>( 파일 형식 png, jpg, jpeg )</span>
          </label>
          <input
            type="file"
            id="file_memo_add"
            name="file"
            accept=".jpg, .jpeg, .png"
            className="button_img_add"
            multiple
            onChange={onLoadFiles}
          />
          <ol className="file_preview"></ol>
        </div>
        <div className="input_wrap">
          {/* 글 컨텐츠 & 장소 정보 가져온것 */}
          <textarea></textarea>
          <div>{placeInfo}</div>
        </div>
        <button type="submit" className="buttons w100" onClick={onClickAddMemo} disabled={disabled}>
          저장
        </button>
      </form>
    </div>
  );
};

export default MapListAdd;
