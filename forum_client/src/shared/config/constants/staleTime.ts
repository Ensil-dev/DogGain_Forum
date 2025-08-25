export const STALE_TIME = {
    DEFAULT: 1000 * 10, // 10초
    COMMENT: 1000 * 10, // 댓글은 빠른 갱신 필요
    POST_DETAIL: 1000 * 60, // 게시글 상세는 1분 유지
    NONE: 0,
} as const;

export type StaleTimeConfig = typeof STALE_TIME;
