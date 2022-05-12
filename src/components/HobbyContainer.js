import React, { useEffect, useState, useRef } from 'react';
import Measure from 'react-measure';
import { FaArrowRight } from 'react-icons/fa';
import Section from '../components/Section';
import { useTransition, animated } from 'react-spring';
import visibleOnScreen from '../utils/visibleOnScreen';

const HobbyContainer = ({ style, title, hobbies, children }) => {
    const containerRef = useRef();
    let innerContainerRef = useRef();
    const [containerHeight, setContainerHeight] = useState(0);
    const { isVisible, visibilityRatio } = visibleOnScreen(containerRef);
    const [showContent, toggleContent] = useState(false);
    const [selectedHobby, setSelectedHobby] = useState(null);

    const transitions = useTransition(selectedHobby, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        if(hobbies.length) setSelectedHobby(hobbies[0].description)
    }, [])

    useEffect(() => {
        if(isVisible) {
            toggleContent(true);
        }
    }, [isVisible]);

    useEffect(() => {
        console.log("RATIO UPDATE: ", visibilityRatio)
    }, [visibilityRatio])

    const resize = (resizeValue) => {
        console.log("HEIGHT: ", resizeValue.client.height)
        setContainerHeight(resizeValue.client.height);
    }

    return (
        <div ref={containerRef} className={`${style} max-w-7xl grid items-center gap-6 grid-cols-1 md:grid-cols-2 pb-20 sm:pb-32 md:pb-40`}>
            <div className="max-w-2xl">
                <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">{title}</p>
                <ul className="mt-4 flex space-x-4 flex-wrap">
                    {hobbies.map((item, index) => {
                        return (
                            <li key={`hobby-${index}`} onClick={() => setSelectedHobby(item.description)} className={`${item.description === selectedHobby ? 'bg-blue-500' : 'bg-blue-300'} flex mt-2 space-x-2 rounded-full py-2 px-4 items-center`}>
                                <p>{item.text}</p>
                            </li>
                        )
                    })}
                </ul>
                <Measure client innerRef={r => (innerContainerRef = r)} onResize={resize}>
                    {({ measureRef }) => (
                        <div style={{height: containerHeight}} className="relative transition-height duration-300">
                            {transitions((styles, item) => (
                                <animated.div ref={measureRef} style={styles} className="max-w-2xl absolute">
                                    {item}
                                </animated.div>
                            ))}
                        </div>
                    )}
                </Measure>
            </div>
            {children}
        </div>
    );
}

HobbyContainer.defaultProps = {
    style: '',
    title: '',
    hobbies: [],
    children: null
}

export default HobbyContainer;
