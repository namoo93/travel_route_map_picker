//템플릿 큰그림 이후, UI로 나중에 분화

const UserLogin = () => {
	return (
		<div className="user_login">
			<h3>로그인</h3>
			<div className="input_form border_bottom">
				<input type="text" className="inputs user_id" onInput />
				<input type="text" className="inputs user_password" onInput />
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
