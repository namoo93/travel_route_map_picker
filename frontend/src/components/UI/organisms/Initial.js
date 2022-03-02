import React, { useRef, useState } from 'react';

const Initial = ({ setInitialModal }) => {
  const [titleValue, setTitleValue] = useState('');
  const intialRef = useRef(null);
  const onSubmitTitle = async (e) => {
    try {
      if (titleValue) {
        setInitialModal(false);
        //서버에 타이틀값전송 서버 맵리스트에 추가
        console.log(titleValue);
      }
    } catch (error) {
      console.error(error);
    }
    e.preventDefault();
  };

  const onInputInitial = (e) => {
    if (e.target.value !== '') {
      if (e.keyCode === 13) {
        setTitleValue(intialRef.current.value);
        console.log(titleValue);
      }
    }
  };

  const onClickInitial = () => {
    if (intialRef.current.value !== '') {
      setTitleValue(intialRef.current.value);
      intialRef.current.value = '';
      console.log(titleValue);
    }
  };
  return (
    <div className="initial_box">
      <stron>새로운 장소명을 입력해주세요</stron>
      <form onSubmit={onSubmitTitle}>
        <div className="input_wrap">
          <input type="text" name="title" autoFocus required onKeyDown={onInputInitial} ref={intialRef} />
        </div>
      </form>
      <button type="submit" onClick={onClickInitial}>
        만들기
      </button>
    </div>
  );
};

export default Initial;
