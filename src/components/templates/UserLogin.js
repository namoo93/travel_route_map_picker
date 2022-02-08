//템플릿 큰그림 이후, UI로 나중에 분화
import {useEffect, useState} from 'react';

const UserLogin = ({setLogin, setSignup}) => {
	const [members, setMembers] = useState([]);
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
	let idpassword;
	const userInput = (e) => {
		const {name, value} = e.target;
		let id, password;
		if (name === 'user_id') {
			id = members.filter((cur) => cur.user_id === value);
		} else if (name === 'user_password') password = members.filter((cur) => cur.user_password === value);
		if (id[0].user_password === password[0].user_password) idpassword = 1;
	};
	const inputHandler = () => {
		console.log(idpassword);
		// if (idpassword) {
		// 	setLogin(true);
		// } else {
		// 	alert('잘못 입력하셨거나 없는 계정입니다.');
		// }
	};
	return (
		<div className="user_login">
			<h3>로그인</h3>
			<div className="input_form border_bottom">
				<input type="text" name="user_id" className="inputs user_id" onInput={(e) => userInput(e)} />
				<input type="text" name="user_password" className="inputs user_password" onInput={(e) => userInput(e)} />
				<button className="button_submit" onClick={inputHandler}>
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
