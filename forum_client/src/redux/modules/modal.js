// src/modules/modal.js

// 초기 상태값
const initialState = {
    isHamburgerModalOpen: false,
    isSearchModalOpen: false,
};

// 리듀서
const modal = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default modal;