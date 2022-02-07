//액션정의
const LOGIN = 'titles/LOGIN'; //로그인 & 회원가입 두가지 텍스트
const USETITLE = 'titles/USETITLE'; //사용자ID & 사용자 정의 텍스트

//액션크리에이터
export const logintitle = (titleSize, titleText) => {
	return {
		type: LOGIN,
		payload: {
			titleSize,
			titleText,
		},
	};
};

//리듀서
export const setTitles = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return [state.payload.titleSize, state.payload.titleText];
		case USETITLE:
			return state; //로그인후 사용자 값을 받아와 적용
		default:
			return state;
	}
};
