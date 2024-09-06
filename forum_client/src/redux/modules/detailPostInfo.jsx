import { SAVE_DETAIL_POST } from '../constants/constant';

// 초기 상태값
const initialState = {
    detailPostInfo: null,
};

// 리듀서
const detailPostInfo = (state = initialState, action) => {
    // console.log(`🖼️ clickInfo action : ${action}`); // 여기에 console.log(action.type) 추가
    // console.log(`🖼️ clickInfo initialState: ${state.}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case SAVE_DETAIL_POST:
            // console.log('SAVE_EDITING_POST');
            // console.log(action.payload);

            return Object.assign({}, state, {
                detailPostInfo: action.payload,
            });

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default detailPostInfo;
