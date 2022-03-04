import React, { useState } from 'react';
//더미 데이터
import savemap from '../../api/savemap';

const MapListAdd = ({ placeInfo, setMemoAddModal, setMemoContents }) => {
  const [disabled, setDisabled] = useState(false);
  //마커의 미리보기 데이터 셋팅 setMemoContents() // 배열안의 객체로 설정

  const onSubmitAddMemo = (e) => {
    e.preventDefault();
  };

  const onKeyDownTitle = (e) => {};

  const onClickAddMemo = () => {
    //입력완료시 모달 닫기 setMemoAddModal(false)
    setMemoAddModal(false);
  };

  return (
    <div className="modal_memo_wrap">
      <form onSubmit={onSubmitAddMemo} className="form_w100">
        <div className="input_wrap mb_20">
          <input type="text" name="title" className="input_underline" autoFocus required onKeyDown={onKeyDownTitle} />
        </div>
        {placeInfo}
        <button type="submit" className="buttons w100" onClick={onClickAddMemo} disabled={disabled}>
          저장
        </button>
      </form>
    </div>
  );
};

export default MapListAdd;
