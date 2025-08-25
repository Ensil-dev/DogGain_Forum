import NavigationBar from '../../../widgets/navigation/ui/NavigationBar';
import PostContentsBox from '../../../widgets/post/ui/PostContentsBox';
import PostControllerBar from '../../../widgets/post/ui/PostControllerBar';
import PostDetail from '../../../widgets/post/ui/PostDetail';
import type { Post } from '../../types/post';

export function parseCompactDate(str: string): Date {
    const match = str.match(/(\d{2})\/(\d{2})\/(\d{2})\/(\d{2}):(\d{2})/);
    if (!match) return new Date();
    const [, yy, mm, dd, hh, mi] = match;
    return new Date(`20${yy}-${mm}-${dd}T${hh}:${mi}:00`);
}

export const postsSortedByLatest = (posts: Post[]): Post[] =>
    posts.sort((a, b) => parseCompactDate(b.created) - parseCompactDate(a.created));

const NAV_FONT_SIZE: Record<string, string> = {
    HomeLogoBox: 'xx-large',
    MenuOptionBox: 'medium',
    writeBox: 'medium',
};

export const getNavigationBoxFontSize = (container: string): string =>
    NAV_FONT_SIZE[container] || 'medium';

export const isIosSafari = (): boolean => {
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
export function getBrowserValue(userAgent: string = window.navigator.userAgent): number {
    const ua = userAgent.toLowerCase();
    if (/(iphone|ipad|ipod)/.test(ua)) return 3;
    if (/android/.test(ua)) return 2;
    if (/(windows|mac)/.test(ua)) return 1;
    return 1;
}

interface NavigationProps {
    onOpenMenu: () => void;
}

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
    Navigation: ({ onOpenMenu }: NavigationProps) => (
        <NavigationBar handleHamburgerMenuModal={onOpenMenu} />
    ),
    PostControllerBar: PostControllerBar,
    PostContentsBox: PostContentsBox,
    PostDetail: PostDetail,
};

export const setContainerContentBox = (
    container: string,
    handleHamburgerMenuModal: () => void,
): JSX.Element | null => {
    const Component = COMPONENT_MAP[container];
    if (!Component) return null;
    if (container === 'Navigation') {
        return (
            <NavigationBar handleHamburgerMenuModal={handleHamburgerMenuModal} />
        );
    }
    return <Component />;
};

export function getRootScrollTop(): number {
    const rootElement = document.getElementById('topLayout');
    if (rootElement) {
        return rootElement.scrollTop;
    }
    return 0; // Return 0 if the element is not found
}

export const categoryOptions: { value: string; label: string }[] = [
    { value: '최신', label: '최신' },
    { value: '🟠 자유포럼', label: '🟠 자유포럼' },
    { value: '🔶 지름후기', label: '🔶 지름후기' },
    { value: '🛒 핫딜공유', label: '🛒 핫딜공유' },
    { value: '🔵 꿀팁공유', label: '🔵 꿀팁공유' },
    { value: '🔘 공지사항', label: '🔘 공지사항' },
];

export const filteringPostOption = (postContent: Post[], option: string): Post[] => {
    // console.log(postContent);
    if (option !== '최신') {
        return postContent.filter((post) => post.category.name.includes(option));
    }

    return postContent;
};

export const filterPostsByKeyword = (posts: Post[], keyword: string, type: string = 'title'): Post[] => {
    if (!keyword) return posts;
    const lower = keyword.toLowerCase();
    if (type === 'title') {
        return posts.filter((post) => post.title.toLowerCase().includes(lower));
    }
    if (type === 'nickname') {
        return posts.filter((post) =>
            post.profile.nickname.toLowerCase().includes(lower)
        );
    }
    return posts.filter(
        (post) =>
            post.title.toLowerCase().includes(lower) ||
            post.profile.nickname.toLowerCase().includes(lower)
    );
};

export const createSearchKeywords = (title: string = '', nickname: string = ''): string[] => {
    const words = `${title} ${nickname}`
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w);

    const set = new Set();
    words.forEach((w) => set.add(w));
    for (let i = 0; i < words.length - 1; i++) {
        set.add(`${words[i]} ${words[i + 1]}`);
    }
    return Array.from(set);
};

/**
 * 유니크한 postId를 만드는 함수
 * @param {post} post
 * @param {existingPosts} existingPosts
 * @returns
 */
export function getUniquePostId(post: Post, existingPosts: Post[]): number {
    // Parse the postId as a number
    // console.log(post);
    let currentPostId = post.postId;
    // console.log('currentPostId: ', currentPostId);
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

export function formatKoreanTime(): string {
    const now = new Date();

    const year = now.getFullYear().toString().slice(-2); // Last two digits of the year
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, pad with leading zero
    const day = String(now.getDate()).padStart(2, '0'); // Pad with leading zero
    const hours = String(now.getHours()).padStart(2, '0'); // Pad with leading zero
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Pad with leading zero

    return `${year}/${month}/${day}/${hours}:${minutes}`;
}

export const filteredPost = (posts: Post[] | undefined, fetchingPostId: string | number): Post | undefined => {
    return posts?.filter((post) => {
        return Number(post.postId) === Number(fetchingPostId);
    })[0];
};

export function triggerVibration(duration: number = 50): void {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(duration)
    }
}