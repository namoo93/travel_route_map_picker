import React, { useEffect, useState } from 'react';
//더미 데이터
import savemap from '../../api/savemap';

const MapListAdd = ({ placeInfo, setMemoAddModal, setMemoContents }) => {
  const [images, setImages] = useState([]);
  //모든 필수 데이터 입력시 버튼 활성화
  const [disabled, setDisabled] = useState(true);
  //마커의 미리보기 데이터 셋팅 setMemoContents() // 배열안의 객체로 설정

  useEffect(() => {}, [images]);

  const onSubmitAddMemo = (e) => {
    e.preventDefault();

    //이미지 서버로 저장
    const formdata = new FormData();
  };

  const onKeyDownTitle = () => {};

  const onLoadFiles = (e) => {
    const {
      target: { files },
    } = e;

    const filesUrlList = Object.values(files).map((cur) => URL.createObjectURL(cur));

    setImages(filesUrlList);
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
          <ol className="file_preview">
            {/* 이미지 등록시 미리보기 제공 */}
            {images.map((cur, idx) => (
              <li key={idx}>
                <img src={cur} alt="미리보기 이미지" />
              </li>
            ))}
          </ol>
        </div>
        <div className="input_wrap">
          {/* 글 컨텐츠 & 장소 정보 가져온것 */}
          <textarea placeholder="하고싶은 말이나 설명을 적어주세요~"></textarea>
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
