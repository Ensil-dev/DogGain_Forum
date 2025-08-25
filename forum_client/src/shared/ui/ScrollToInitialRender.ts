import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToInitialRender(): null {
    const { pathname } = useLocation();

    // console.log('pathname: ', pathname);

    useEffect(() => {
        const el = document.getElementById('topLayout');
        if (el) {
            (el as HTMLElement).scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}
