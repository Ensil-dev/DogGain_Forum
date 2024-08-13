// src/modules/modal.js

import { FILTERING_OPTION_SAVE } from '../constants/constant';

// 초기 상태값
const initialState = {
    filteringOption: '최신',
};

// 리듀서
const filteringOption = (state = initialState, action) => {
    // console.log(`🖼️ clickInfo initialState: ${state.}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case FILTERING_OPTION_SAVE:
            console.log(`🖼️ action : ${action.payload}`); // 여기에 console.log(action.type) 추가
            // console.log('FILTERING_OPTION_SAVE!!');

            return Object.assign({}, state, {
                filteringOption: action.payload,
            });

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default filteringOption;
