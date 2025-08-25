export const VIEW = {
    DUPLICATE_INTERVAL_MS: 60 * 1000, // 1분
    DUPLICATE_INTERVAL_12HOUR: 60 * 1000 * 60 * 12, // 12시간
} as const;

export type ViewConstants = typeof VIEW;

export const UI = {
    MODAL_HEIGHT: '600px',
    MODAL_MAX_WIDTH: '300px',
    Z_INDEX_MENU: 1000,
    Z_INDEX_MODAL: 1100,
    COLOR_PRIMARY_GRAY: '#606060',
    COLOR_ACCENT_PURPLE: '#4000c7',
    COPY_MSG_DURATION_MS: 1000,
} as const;

export type UIConstants = typeof UI;
