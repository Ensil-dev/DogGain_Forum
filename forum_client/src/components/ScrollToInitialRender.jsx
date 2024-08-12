import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToInitialRender() {
    const { pathname } = useLocation();

    console.log('pathname: ', pathname);

    useEffect(() => {
        document.getElementById('topLayout').scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

// export default function ScrollToInitialRender() {
//     const { pathname } = useLocation();
//     const clickInfoStore = useSelector((state) => state.clickInfo);
//     console.log('clickInfoStore: ', clickInfoStore);

//     useEffect(() => {
//         console.log('pathname: ', pathname);
//         window.scrollTo(0, clickInfoStore.touchedPostScrollY);
//     }, [pathname, clickInfoStore.touchedPostScrollY]);

//     return null;
// }
