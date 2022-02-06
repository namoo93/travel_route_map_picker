import UserLogin from '../templates/UserLogin';
import UserSignUp from '../templates/UserSignUp';
import UserMapList from '../templates/UserMapList';

const Login = () => {
	return (
		<div className="login">
			<UserLogin />
			<UserSignUp />
			<UserMapList />
		</div>
	);
};

export default Login;
