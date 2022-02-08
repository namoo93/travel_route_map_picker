//템플릿 큰그림 이후, UI로 나중에 분화
import {useEffect} from 'react';

const UserLogin = ({setLogin, setSignup}) => {
	useEffect(() => {
		//서버에서 유저리스트 API 받아온뒤 유저객체값 변수에담기
	}, []);

	const userInput = (e) => {
		const {name, value} = e.target;
		console.log(name, value);
	};
	return (
		<div className="user_login">
			<h3>로그인</h3>
			<div className="input_form border_bottom">
				<input type="text" name="user_id" className="inputs user_id" onInput={(e) => userInput(e)} />
				<input type="text" name="user_password" className="inputs user_password" onInput={(e) => userInput(e)} />
			</div>
			<div className="botton_box">
				<strong>간편 로그인</strong>
				<button className="buttons">카카오</button>
				<button className="buttons">네이버</button>
				<button className="buttons">구글</button>
				<button className="buttons button_link">- 회원가입하러가기 -</button>
			</div>
		</div>
	);
};

export default UserLogin;
