import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useRedirectOnRefresh() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [navigate]);
}

export default useRedirectOnRefresh;
