export const DARKMODE_CHANGE = 'DARKMODE_CHANGE';

// Action Creator: 액션을 만드는 생성자, 클라이언트에서 사용할 예정
export const darkmodeChange = () => {
    return {
        type: DARKMODE_CHANGE,
    };
};

export const HAMBURGER_MODAL_CHANGE = 'HAMBURGER_MODAL_CHANGE';
export const hamburgerModalChange = () => {
    return {
        type: HAMBURGER_MODAL_CHANGE,
    };
};

export const TOUCHED_POST_ID_SAVE = 'TOUCHED_POST_ID_SAVE';
export const touchedPostIdSave = (postId) => {
    console.log('postId: ', postId)
    return {
        type: TOUCHED_POST_ID_SAVE,
        payload: postId
    };
};
