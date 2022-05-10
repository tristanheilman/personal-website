import React, { useState, useCallback, useEffect } from 'react';


export default function visibleOnScreen(ref) {

    const [isVisible, setVisibility] = useState(false)
    const [visiblityRatio, setVisibilityRatio] = useState(0)

    const options = {
        threshold: 0.49999,
        rootMargin: '100px'
    }

    const observer = new IntersectionObserver(([entry]) => {
        console.log("ENTRY :", entry);
        setVisibility(entry.isIntersecting)
        setVisibilityRatio(entry.intersectionRatio)
    }, options)

    useEffect(() => {
        if (ref.current) observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    console.log("OBJECTS: ", { isVisible, visiblityRatio })
    return { isVisible, visiblityRatio }
}
