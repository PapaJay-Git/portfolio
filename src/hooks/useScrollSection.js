import {useCallback} from "react";

const useScrollSection = (refs) => {
    const executeScroll = useCallback((whoToScroll) => {
        const ref = refs[whoToScroll];
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    });

    return executeScroll;
};
export default useScrollSection;