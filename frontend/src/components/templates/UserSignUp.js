const UserSignUp = () => {
	return (
		<div className="user_login">
			<h3>회원 가입</h3>
			<div className="botton_box">
				<strong>간편 로그인 계정 생성</strong>
				<button className="buttons">카카오</button>
				<button className="buttons">네이버</button>
				<button className="buttons">구글</button>
			</div>
			<div className="input_form border_bottom">
				<input type="text" className="inputs user_id" onInput />
				<input type="text" className="inputs user_password" onInput />
				<input type="text" className="inputs user_nickname" onInput />
			</div>
			<button className="buttons button_link">- 개인정보 동의 -</button>
		</div>
	);
};

export default UserSignUp;
