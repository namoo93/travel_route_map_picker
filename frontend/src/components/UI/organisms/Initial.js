import React from 'react';

const Initial = () => {
  const onSubmitTitle = (e) => {
    e.preventDfault();
  };
  return (
    <div>
      <stron>새로운 장소명을 입력해주세요</stron>
      <form onSubmit={onSubmitTitle}>
        <div className="input_wrap">
          <input type="text" name="title" value autoFocus required />
        </div>
      </form>
      <button type="submit">만들기</button>
    </div>
  );
};

export default Initial;
