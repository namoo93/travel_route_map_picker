import React, { useState } from 'react';
import UserLogin from '../templates/UserLogin';
import UserSignUp from '../templates/UserSignUp';
import UserMapList from '../templates/UserMapList';

const Login = ({ login, setLogin }) => {
  const [signup, setSignup] = useState(false);
  return (
    <div className="login">
      <UserLogin setLogin={setLogin} setSignup={setSignup} />
      {signup && <UserSignUp />}
      {login && <UserMapList />}
    </div>
  );
};

export default Login;
