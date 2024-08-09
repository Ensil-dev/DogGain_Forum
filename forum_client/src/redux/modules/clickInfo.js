// src/modules/modal.js

import { TOUCHED_POST_ID_SAVE } from '../constants/constant';

// 초기 상태값
const initialState = {
    touchedPostId: -1,
};

// 리듀서
const clickInfo = (state = initialState, action) => {
    console.log(`🖼️ clickInfo action : ${action}`); // 여기에 console.log(action.type) 추가
    console.log(`🖼️ clickInfo initialState: ${state.touchedPostId}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case TOUCHED_POST_ID_SAVE:
            return {
                touchedPostId: action.payload,
            };

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default clickInfo;
