import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToInitialRender() {
    const { pathname } = useLocation();

    // console.log('pathname: ', pathname);

    useEffect(() => {
        document.getElementById('topLayout').scrollTo(0, 0);
    }, [pathname]);

    return null;
}
