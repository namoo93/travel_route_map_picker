import React, { useEffect, useState } from 'react';
import UserLogin from '../templates/UserLogin';
import UserSignUp from '../templates/UserSignUp';
import UserMapList from '../templates/UserMapList';

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log(signup, login);
  }, [signup, login]);

  return (
    <div className="login">
      {!login && <UserLogin login={login} setLogin={setLogin} setSignup={setSignup} />}
      {signup && <UserSignUp setSignup={setSignup} />}
      {login && <UserMapList />}
    </div>
  );
};

export default Login;
