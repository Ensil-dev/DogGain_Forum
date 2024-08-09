import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function ScrollToInitialRender() {
    const { pathname } = useLocation();
    const clickInfoStore = useSelector((state) => state.clickInfo);
    console.log('clickInfoStore: ', clickInfoStore);

    useEffect(() => {
        console.log('pathname: ', pathname);
        window.scrollTo(0, clickInfoStore.touchedPostScrollY);
    }, [pathname, clickInfoStore.touchedPostScrollY]);

    return null;
}
