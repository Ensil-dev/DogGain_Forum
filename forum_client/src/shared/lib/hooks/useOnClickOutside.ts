import { useEffect } from 'react';
import type { RefObject } from 'react';

export default function useOnClickOutside(
    ref: RefObject<HTMLElement>,
    onOutsideClick: () => void,
): void {
    useEffect(() => {
        function handleClick(event: MouseEvent | TouchEvent) {
            if (!ref.current || ref.current.contains(event.target as Node)) return;
            onOutsideClick();
        }

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        };
    }, [ref, onOutsideClick]);
}
