import { useLayoutEffect, useRef, useState } from 'react';

const useFocus = (defaultFocused = false) => {
    const ref = useRef();
    const [isFocused, setIsFocused] = useState(defaultFocused);

    useLayoutEffect(() => {
        const instance = ref.current;
        if (!instance) {
            return;
        }
        const onFocus = () => setIsFocused(true);
        const onBlur = () => setIsFocused(false);
        if (isFocused) {
            instance.focus();
        }

        instance.addEventListener('focus', onFocus);
        instance.addEventListener('blur', onBlur);

        return () => {
            instance.removeEventListener('focus', onFocus);
            instance.removeEventListener('blur', onBlur);
        };
    }, [isFocused]);

    return { ref, isFocused, setIsFocused };
};
