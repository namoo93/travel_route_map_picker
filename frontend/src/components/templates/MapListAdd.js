import React, { useEffect, useState } from 'react';
import ModalPortal from '../templates/ModalPortal'; //팝업
//더미 데이터
import savemap from '../../api/savemap';

const MapListAdd = ({ placeInfoList, setPlaceInfoList, setMemoAddModal, setMemoContents }) => {
  const [images, setImages] = useState([]);
  const [memoText, setMemoText] = useState('');
  const [titleText, setTitleText] = useState('');
  //모달
  const [selectModal, setSelectModal] = useState(false);
  //모든 필수 데이터 입력시 버튼 활성화
  const [disabled, setDisabled] = useState(true);
  //마커의 미리보기 데이터 셋팅 setMemoContents() // 배열안의 객체로 설정

  useEffect(() => {
    //저장 버튼 활성화
    if (memoText.length && titleText.length) setDisabled(false);
  }, [images, memoText, titleText, placeInfoList]);

  const onSubmitAddMemo = (e) => {
    e.preventDefault();

    //이미지 서버로 저장
    const formdata = new FormData();
  };

  const onChangeMemoText = (e) => {
    const {
      target: { value, name },
    } = e;

    if (name === 'title') {
      setTitleText(value);
    } else if (name === 'memo') {
      setMemoText(value);
    }
  };

  const onLoadFiles = (e) => {
    const {
      target: { files },
    } = e;

    // 이미지 미리보기
    const filesUrlList = Object.values(files).map((cur) => URL.createObjectURL(cur));
    setImages(filesUrlList);
  };

  const onLoadPlace = () => {
    //배열안의 객체//장소값 제거시 반영
    setPlaceInfoList();
  };

  const onClickAddMemo = () => {
    //입력완료시 모달 닫기 setMemoAddModal(false)
    setMemoAddModal(false);
  };

  const onClickOpenSelectModal = () => {
    console.log(placeInfoList);
    setSelectModal(true);
  };

  const onClickSelect = () => {
    setSelectModal(false);
  };

  const onClickSelectOption = (e) => {
    const target = e.target;
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
            onChange={onChangeMemoText}
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
          <div className="file_preview_wrap">
            <ol className="file_preview">
              {/* 이미지 등록시 미리보기 제공 */}
              {images.map((cur, idx) => (
                <li key={idx}>
                  <img src={cur} alt="미리보기 이미지" />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="input_wrap">
          {/* 글 컨텐츠 & 장소 정보 가져온것 */}
          <textarea placeholder="하고싶은 말이나 설명을 적어주세요~" name="memo" onChange={onChangeMemoText}></textarea>
        </div>
        {placeInfoList.length && (
          // 장소정보 리스트 팝업
          <>
            <button type="button" className="buttons buttons_line w100 mb_10" onClick={onClickOpenSelectModal}>
              해당 주소의 지도 정보 선택
            </button>
            {selectModal && (
              <ModalPortal>
                <div className="initial_box">
                  <stron className="mb_10">해당 주소의 추가 정보를 선택해주세요</stron>
                  <form className="form_w100">
                    <div className="input_wrap mb_20">
                      <ul className="place_select">
                        {/* li 클릭시 클래스 on + 데이터정보 보내기 */}
                        {placeInfoList.map((cur, idx) => (
                          <li
                            key={idx}
                            className="select_option"
                            name={`select_place_${idx}`}
                            onClick={onClickSelectOption}
                          >
                            <span className="place_name">{cur.place_name}</span>
                            <span className="category_name">{cur.category_name}</span>
                            <span className="phone">{cur.phone}</span>
                            <a href={cur.place_url} className="place_url">
                              사이트 바로가기 →
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button type="submit" className="buttons w100" onClick={onClickSelect}>
                      선택완료
                    </button>
                  </form>
                </div>
              </ModalPortal>
            )}
          </>
        )}
        <button type="submit" className="buttons w100" onClick={onClickAddMemo} disabled={disabled}>
          저장
        </button>
      </form>
    </div>
  );
};

export default MapListAdd;
