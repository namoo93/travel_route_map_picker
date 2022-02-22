import React from 'react';

const UserSignUp = ({ setSignup }) => {
  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      //가입 성공 이후 화면에서 사라지도록
      setSignup(false);
    } catch (error) {}
  };
  const onInputSignUp = (e) => {
    const {
      taget: { name, value },
    } = e;
  };
  return (
    <div className="user_login">
      <h3>회원 가입</h3>
      <form onSubmit={onSubmitSignUp} className="input_form">
        <input
          autoFocus
          type="email"
          name="email"
          placeholder="Email"
          required
          className="inputs user_id"
          onInput={onInputSignUp}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="inputs user_password"
          onInput={onInputSignUp}
        />
        <input
          type="nickname"
          name="nickname"
          placeholder="Nickname"
          required
          className="inputs user_nickname"
          onInput={onInputSignUp}
        />
      </form>
      <div className="botton_box">
        {/* 개인정보 제공 동의 팝업 */}
        <button className="buttons button_link">개인정보 제공 동의</button>

        <label>
          전체 동의 <input name="" value="" type="checkbox" />
        </label>
        <button type="submit" className="buttons">
          로그인
        </button>
      </div>
    </div>
  );
};

export default UserSignUp;
