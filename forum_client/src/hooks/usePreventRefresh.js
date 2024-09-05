import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { latestPostDataSave, saveDetailPost } from '../redux/constants/constant';

function useRedirectOnRefresh(post) {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            // e.returnValue = '';
            // dispatch(saveDetailPost(post))
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [navigate]);
}

export default useRedirectOnRefresh;
