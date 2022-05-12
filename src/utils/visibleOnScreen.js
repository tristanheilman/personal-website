import React, { useState, useCallback, useEffect } from 'react';


export default function visibleOnScreen(ref) {
    const { innerWidth: width, innerHeight: height } = window;
    const [isVisible, setVisibility] = useState(false)

    const options = {
        threshold: innerWidth < 1000 ? 0.1 : 0.35,
    }

    const observer = new IntersectionObserver(([entry]) => {
        console.log("BOUNDING BOX: ", options)
        setVisibility(entry.isIntersecting)
    }, options)

    useEffect(() => {
        if (ref.current) observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isVisible
}
