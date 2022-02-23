import React, { useState } from 'react';

const Initial = ({ setModalOpened }) => {
  const [titleValue, setTitleValue] = useState('');
  const onSubmitTitle = (e) => {
    e.preventDfault();
    if (titleValue) {
      setModalOpened(false);
    }
  };

  const onInputInitial = (e) => {
    const vlaue = e.target.value;
    setTitleValue(vlaue);
  };
  return (
    <div className="initial_box">
      <stron>새로운 장소명을 입력해주세요</stron>
      <form onSubmit={onSubmitTitle}>
        <div className="input_wrap">
          <input type="text" name="title" autoFocus required onInput={onInputInitial} />
        </div>
      </form>
      <button type="submit">만들기</button>
    </div>
  );
};

export default Initial;
