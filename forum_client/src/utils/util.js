import NavigationBar from '../components/NavigationBar';
import PostContentsBox from '../components/PostContentsBox';
import PostControllerBar from '../components/PostControllerBar';
import PostDetail from '../components/PostDetail';

export const postsSortedByLatest = (posts) => {
    
    if (posts.result) {
        // console.log(posts.result)
        
        return posts.sort((a, b) => {
            const dateA = new Date(a.created.replace(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/, '20$1-$2-$3T$4:$5:00'));
            const dateB = new Date(b.created.replace(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/, '20$1-$2-$3T$4:$5:00'));
            return dateB - dateA;
        });
    }
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

export const isIosSafari = () => {
    const userAgent = window.navigator.userAgent;
    const isIos = /iPhone|iPad|iPod/.test(userAgent);
    // console.log('isIOS: ', isIos)
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    // console.log('isSafari: ', isSafari)

    return isIos && isSafari;
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
        case 'PostDetail':
            return <PostDetail />;
        default:
            return 'black';
    }
};

export function getRootScrollTop() {
    const rootElement = document.getElementById('topLayout');
    if (rootElement) {
        return rootElement.scrollTop;
    }
    return 0; // Return 0 if the element is not found
}

export const categoryOptions = [
    { value: '최신', label: '최신' },
    { value: '🟠 자유포럼', label: '🟠 자유포럼' },
    { value: '🔶 지름후기', label: '🔶 지름후기' },
    { value: '🛒 핫딜공유', label: '🛒 핫딜공유' },
    { value: '🔵 꿀팁공유', label: '🔵 꿀팁공유' },
    { value: '🔘 공지사항', label: '🔘 공지사항' },
];

export const filteringPostOption = (postContent, option) => {
    // console.log(postContent);
    if (option !== '최신') {
        return postContent.filter((post) => post.category.name.includes(option));
    }

    return postContent;
};

/**
 * 유니크한 postId를 만드는 함수
 * @param {post} post
 * @param {existingPosts} existingPosts
 * @returns
 */
export function getUniquePostId(post, existingPosts) {
    // Parse the postId as a number
    console.log(post);
    let currentPostId = post.postId;
    console.log('currentPostId: ', currentPostId);
    let maxPostId = currentPostId;

    // Track if the current postId is a duplicate
    let isDuplicate = false;

    // Single pass to find max postId and check for duplicates
    for (const existingPost of existingPosts) {
        if (existingPost.postId === currentPostId) {
            isDuplicate = true;
        }
        if (existingPost.postId > maxPostId) {
            maxPostId = existingPost.postId;
        }
    }

    // If a duplicate was found, generate a new postId
    if (isDuplicate) {
        currentPostId = maxPostId + 1;
    }

    // Return only the unique postId
    return currentPostId;
}

export function formatKoreanTime() {
    const now = new Date();

    const year = now.getFullYear().toString().slice(-2); // Last two digits of the year
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, pad with leading zero
    const day = String(now.getDate()).padStart(2, '0'); // Pad with leading zero
    const hours = String(now.getHours()).padStart(2, '0'); // Pad with leading zero
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Pad with leading zero

    return `${year}/${month}/${day}/${hours}:${minutes}`;
}
