// src/modules/modal.js

import { LATEST_POST_DATA_SAVE } from '../constants/constant';

// 초기 상태값
const initialState = {
    latestPostData: null,
};

// 리듀서
const postInfo = (state = initialState, action) => {
    // console.log(`🖼️ clickInfo action : ${action}`); // 여기에 console.log(action.type) 추가
    // console.log(`🖼️ clickInfo initialState: ${state.}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case LATEST_POST_DATA_SAVE:
            // console.log('LATEST_POST_DATA_SAVE!!');
            // console.log(state.latestPostData);

            if (state.latestPostData === null) {
                return Object.assign({}, state, {
                    latestPostData: action.payload,
                });
            } else {
                return state;
            }

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default postInfo;
