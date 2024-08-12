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

export const SCROLL_LOCATION_SAVE = 'SCROLL_LOCATION_SAVE';
export const scrollLocationSave = (touchedPostScrollY) => {
    return {
        type: SCROLL_LOCATION_SAVE,
        payload: touchedPostScrollY,
    };
};

export const SCROLL_ELEMENT_SAVE = 'SCROLL_ELEMENT_SAVE';
export const scrollElementSave = (scrollEl) => {
    console.log('scrollElementSave!!!');
    return {
        type: SCROLL_ELEMENT_SAVE,
        payload: scrollEl,
    };
};

export const LATEST_POST_DATA_SAVE = 'LATEST_POST_DATA_SAVE';
export const latestPostDataSave = (posts) => {
    console.log('LATEST_POST_DATA_SAVE!!!');
    return {
        type: LATEST_POST_DATA_SAVE,
        payload: posts,
    };
};
