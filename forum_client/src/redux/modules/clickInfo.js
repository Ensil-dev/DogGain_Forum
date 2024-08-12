// src/modules/modal.js

import { SCROLL_LOCATION_SAVE, SCROLL_ELEMENT_SAVE } from '../constants/constant';

// 초기 상태값
const initialState = {
    touchedPostScrollY: 0,
    scrollElement: null,
};

// 리듀서
const clickInfo = (state = initialState, action) => {
    // console.log(`🖼️ clickInfo action : ${action}`); // 여기에 console.log(action.type) 추가
    // console.log(`🖼️ clickInfo initialState: ${state.touchedPostScrollY}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case SCROLL_LOCATION_SAVE:
            console.log('SCROLL_LOCATION_SAVE!!');
            return Object.assign({}, state, {
                touchedPostScrollY: action.payload,
            });

        case SCROLL_ELEMENT_SAVE:
            // console.log('SCROLL_ELEMENT_SAVE!!');
            // console.log(action.payload);

            if (state.scrollElement === null) {
                return Object.assign({}, state, {
                    scrollElement: action.payload,
                });
            } else {
                return state;
            }

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default clickInfo;
