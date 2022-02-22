//템플릿 큰그림 이후, UI로 나중에 분화
import React, { useEffect, useState } from 'react';
import { accounts } from '../../api/member';

const UserLogin = ({ login, setLogin, setSignup }) => {
  const [attrValue, setAttrValue] = useState({});
  useEffect(() => {}, [login]);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    //서버에 유저에게 받아온 데이터를 전송해 해당계정이있는지 확인
    //data.members[].user_id
    //data.members[].user_password
    try {
      //로그인 성공시
      setLogin(true);
    } catch (error) {}
    console.log(accounts);
  };
  const onInputLogin = (e) => {
    const {
      taget: { name, value },
    } = e;
    if (name === 'email') {
      setAttrValue(value);
      console.log(attrValue);
    } else if (name === 'password') {
      setAttrValue(value);
      console.log(attrValue);
    }
  };

  const onClickSignUp = () => {
    //회원가입 페이지 보이도록
    setLogin(true);
    setSignup(true);
  };

  return (
    <div className="user_login">
      <h3>로그인</h3>
      <form onSubmit={onSubmitLogin} className="input_form">
        <input
          autoFocus
          type="email"
          name="email"
          placeholder="Email"
          required
          className="inputs user_id"
          onInput={onInputLogin}
          value={attrValue.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="inputs user_password"
          onInput={onInputLogin}
          value={attrValue.password}
        />
      </form>
      <div className="botton_box">
        {/* 분실계정찾기 팝업 또는 페이지 */}
        <button type="button" onClick={onClickSignUp} className="buttons button_link">
          회원가입하기
        </button>
        <button type="button" className="buttons button_link">
          분실계정찾기
        </button>
        <button type="submit" className="buttons">
          로그인
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
