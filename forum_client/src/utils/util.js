export const getNavigationBoxFontSize = (container) => {
    switch (container) {
        case 'HomeLogoBox':
            return 'xx-large';
        case 'MenueOptionBox':
            return 'medium';
        case 'writeBox':
            return 'medium';
        default:
            return 'medium';
    }
};