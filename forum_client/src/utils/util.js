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