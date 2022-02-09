//템플릿 큰그림 이후, UI로 나중에 분화
import {useEffect, useState} from 'react';
import Login from '../pages/Login';

const UserLogin = ({setLogin, setSignup}) => {
	const [members, setMembers] = useState([]);
	const [inputId, setInputId] = useState('');
	const [inputPassword, setInputPassword] = useState('');

	useEffect(() => {
		//서버에서 유저리스트 API 받아온뒤 유저객체값 변수에담기
		//data.members[].user_id
		//data.members[].user_password
		let datamembers = [
			{user_id: 'namu@tree.co.kr', user_password: 'qwe123'},
			{user_id: 'namu02@tree.co.kr', user_password: 'qwe12345'},
		]; //test
		setMembers(datamembers);
	}, []);

	const inputSubmit = () => {
		if (inputId === '' || inputPassword === '') {
			alert('이메일 아이디와 비밀번호를 입력해주세요');
			return;
		}
		// members.map((cur) => {
		// 	if (cur.user_id === inputId) {
		// 		if (cur.user_password === inputPassword) {
		// 			alert('로그인 성공!');
		// 			setLogin(true);
		// 		}
		// 	}
		// });
		Login(inputId, inputPassword).then((res) => {
			if (res.result) {
				console.log('로그인 성공!');
				setLogin(true);
			} else {
				alert(res.message);
			}
		});
	};
	return (
		<div className="user_login">
			<h3>로그인</h3>
			<div className="input_form border_bottom">
				<input type="text" name="user_id" className="inputs user_id" onInput={(e) => setInputId(e.target.value)} />
				<input
					type="text"
					name="user_password"
					className="inputs user_password"
					onInput={(e) => setInputPassword(e.target.value)}
				/>
				<button className="button_submit" onClick={inputSubmit}>
					LOGIN
				</button>
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
