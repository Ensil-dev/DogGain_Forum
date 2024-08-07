// 초기 상태값
const initialState = {
    isDarkMode: false,
};

// 리듀서
const mode = (state = initialState, action) => {
    // console.log(`mode action: ${action.type}`); // 여기에 console.log(action.type) 추가
    // console.log(`mode state: ${state.isDarkMode}`); // 여기에 console.log(state.isDarkMode) 추가
    switch (action.type) {
        case 'DARKMODE_CHANGE':
            return {
                isDarkMode: !state.isDarkMode,
            };

        default:
            return state;
    }
};

// 모듈 파일에서는 리듀서를 export default 합니다.
export default mode;
