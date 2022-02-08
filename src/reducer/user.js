//액션정의
const USETITLE = 'titles/USETITLE'; //사용자ID & 사용자 정의 텍스트

//액션크리에이터
export const usetitles = (titleSize, titleText) => {
	return {
		type: USETITLE,
		payload: {
			titleSize,
			titleText,
		},
	};
};
const initialState = {
	titleSize: 1,
	titleText: '',
};
//리듀서
export const setTitles = (state = initialState, action) => {
	switch (action.type) {
		case USETITLE:
			return state; //로그인후 사용자 값을 받아와 적용
		default:
			return state;
	}
};
