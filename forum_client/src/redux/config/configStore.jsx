import { createStore } from 'redux';
/*
1. createStore() // configureStore
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.
*/

import { combineReducers } from 'redux';
/*
2. combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.
*/

// 스토어와 모듈(modal)을 연결
import modal from '../modules/modal';
import mode from '../modules/mode';
import clickInfo from '../modules/clickInfo';
import postInfo from '../modules/postInfo';
import filteringOption from '../modules/filtering';
import userInfo from '../modules/userInfo';

// 1번
import { persistReducer } from 'redux-persist';
// 2번
import storage from 'redux-persist/lib/storage'; // localStorage 사용
import persistStore from 'redux-persist/es/persistStore';
import detailPostInfo from '../modules/detailPostInfo';

// 3번: persistConfig 설정
export const persistConfig = {
    key: 'root', // 로컬 스토리지에 저장될 키 이름
    storage, // localStorage를 사용할지 sessionStorage를 사용할지 설정
    // whitelist: ['userInfo', 'postInfo'], // 저장할 reducer 목록
    whitelist: ['userInfo', 'detailPostInfo'], // 저장할 reducer 목록
};

export const rootReducer = combineReducers({
    mode,
    modal,
    userInfo,
    postInfo,
    detailPostInfo,
    clickInfo,
    filteringOption,
});

export const store = createStore(persistReducer(persistConfig, rootReducer));
export const persistor = persistStore(store);

// 4번
// export default persistReducer(persistConfig, rootReducer);
