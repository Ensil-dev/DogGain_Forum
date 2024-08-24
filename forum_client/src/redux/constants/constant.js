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

export const POST_WRITING_MODAL_CHANGE = 'POST_WRITING_MODAL_CHANGE';
export const postWritingModalChange = (postDetailInfo) => {
    return {
        type: POST_WRITING_MODAL_CHANGE,
        payload: postDetailInfo
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

export const FILTERING_OPTION_SAVE = 'FILTERING_OPTION_SAVE';
export const filteringOptionSave = (option) => {
    console.log('FILTERING_OPTION_SAVE!!!');
    return {
        type: FILTERING_OPTION_SAVE,
        payload: option,
    };
};

export const POST_ADD = 'POST_ADD';
export const addPost = (post) => {
    return {
        type: POST_ADD,
        payload: post,
    };
};

export const POST_DELETE = 'POST_DELETE';
export const deletePost = (postId) => {
    return {
        type: POST_DELETE,
        payload: postId,
    };

};

export const SAVE_EDITING_POST = 'SAVE_EDITING_POST'
export const saveEditingPost = (postDetailInfo) => {
    console.log('saveEditingPost!@!')
    return {
        type: SAVE_EDITING_POST,
        payload: postDetailInfo,
    };
};

export const POST_UPDATE = 'POST_UPDATE';
export const updatePost = (newPostDetailInfo) => {
    return {
        type: POST_DELETE,
        payload: newPostDetailInfo,
    };
};
