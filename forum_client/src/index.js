import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 리덕스 사용을 위해서 추가 +240806
import store from './redux/config/configStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
