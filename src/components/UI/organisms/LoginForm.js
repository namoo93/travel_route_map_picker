import {useDispatch} from 'react-redux';
import Titles from '../atoms/Titles';
import InputForm from '../molecules/InputForm';

const LoginForm = () => {
	const dispatch = useDispatch();
	return (
		<div className="login_form">
			<Titles />
			<InputForm />
		</div>
	);
};

export default LoginForm;
