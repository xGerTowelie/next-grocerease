import { useState, useEffect, useCallback } from 'react';

export function useDialog() {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = useCallback(() => {
        setIsOpen(true);
        document.documentElement.style.setProperty('pointer-events', 'none');
    }, []);

    const closeDialog = useCallback(() => {
        setIsOpen(false);
        // Delay removal of pointer-events to allow for any closing animations
        setTimeout(() => {
            document.documentElement.style.removeProperty('pointer-events');
        }, 300); // Adjust this delay as needed
    }, []);

    useEffect(() => {
        return () => {
            // Cleanup function to ensure pointer-events is removed when component unmounts
            document.documentElement.style.removeProperty('pointer-events');
        };
    }, []);

    return { isOpen, openDialog, closeDialog };
}


