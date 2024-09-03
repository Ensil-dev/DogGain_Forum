import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useRedirectOnRefresh() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
            // console.log(location.pathname);
            // navigate('/', { replace: true }); // Replace the current history entry with '/'
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [location.pathname, navigate]);
}

export default useRedirectOnRefresh;
