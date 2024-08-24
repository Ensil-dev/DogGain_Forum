// src/modules/modal.js

import { HAMBURGER_MODAL_CHANGE, POST_WRITING_MODAL_CHANGE } from '../constants/constant';

// 초기 상태값
const initialState = {
    isHamburgerModalOpen: false,
    isPostWritingModalOpen: false,
    isSearchModalOpen: false,
};

// 리듀서
const modal = (state = initialState, action) => {
    // console.log(`🖼️ modal action: ${action.type}`); // 여기에 console.log(action.type) 추가
    // console.log(`🖼️ modal state: ${state.isHamburgerModalOpen}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case HAMBURGER_MODAL_CHANGE:
            return {
                isHamburgerModalOpen: !state.isHamburgerModalOpen,
            };

        // return Object.assign({}, state, {
        //     isHamburgerModalOpen: !state.isHamburgerModalOpen,
        // });

        case POST_WRITING_MODAL_CHANGE:
            if (action.payload) {
                console.log('🕊🕊🕊')
                console.log(action.payload);
            }

            return {
                isPostWritingModalOpen: !state.isPostWritingModalOpen,
            };

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default modal;
