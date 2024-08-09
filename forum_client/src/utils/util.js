import NavigationBar from '../components/NavigationBar';
import PostContentsBox from '../components/PostContentsBox';
import PostControllerBar from '../components/PostControllerBar';
import { useNavigate } from 'react-router-dom';

export const postsSortedByLatest = (posts) => {
    return posts.sort((a, b) => {
        const dateA = new Date(a.created.replace(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/, '20$1-$2-$3T$4:$5:00'));
        const dateB = new Date(b.created.replace(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/, '20$1-$2-$3T$4:$5:00'));
        return dateB - dateA;
    });
};

export const getNavigationBoxFontSize = (container) => {
    switch (container) {
        case 'HomeLogoBox':
            return 'xx-large';
        case 'MenuOptionBox':
            return 'medium';
        case 'writeBox':
            return 'medium';
        default:
            return 'medium';
    }
};

/**
 * UserAgent 값에서 플랫폼 별 매핑 값(browser)을 반환하는 함수
 * @param {string} userAgent
 * @returns {number} desktop일때 1, android일때 2, ios일때 3 리턴
 */
export const getBrowserValue = function (userAgent) {
    if (typeof userAgent === 'undefined') {
        userAgent = window.navigator.userAgent;
    }

    userAgent = userAgent.toLowerCase();

    if (userAgent.indexOf('android') >= 0) {
        return 2;
    } else if (userAgent.indexOf('iphone') >= 0) {
        return 3;
    } else if (userAgent.indexOf('ipad') >= 0) {
        return 3;
    } else if (userAgent.indexOf('ipod') >= 0) {
        return 3;
    } else if (userAgent.indexOf('windows') >= 0) {
        return 1;
    } else if (userAgent.indexOf('mac') >= 0) {
        return 1;
    }
};

export const setContainerContentBox = (container, handleClickModeButton, handleHamburgerMenuModal) => {
    switch (container) {
        case 'Navigation':
            return <NavigationBar handleClickModeButton={handleClickModeButton} handleHamburgerMenuModal={handleHamburgerMenuModal} />;
        case 'PostControllerBar':
            return <PostControllerBar />;
        case 'PostContentsBox':
            return <PostContentsBox />;
        default:
            return 'black';
    }
};
