import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';

const HobbyContainer = ({ style, title, hobbies, children }) => {
    const containerRef = useRef();
    const { isVisible, visibilityRatio } = visibleOnScreen(containerRef);
    const [showContent, toggleContent] = useState(false);
    const [selectedHobby, setSelectedHobby] = useState(null);

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

    return (
        <div ref={containerRef} className={`${style} max-w-7xl flex flex-wrap gap-8 pb-20 sm:pb-32 md:pb-40`}>
            <div className="max-w-2xl">
                <p className="text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">{title}</p>
                <ul className="mt-4 flex space-x-4 flex-wrap">
                    {hobbies.map((item, index) => {
                        return (
                            <li key={`hobby-${index}`} onClick={() => setSelectedHobby(item.description)} className={`${item.description === selectedHobby ? 'bg-blue-500' : 'bg-blue-300'} flex mt-2 space-x-2 rounded-full py-2 px-4 items-center`}>
                                <span className={`${item.color} w-2.5 h-2.5 rounded-full`}/>
                                <p>{item.text}</p>
                            </li>
                        )
                    })}
                </ul>
                {selectedHobby}
            </div>
            <div className="mx-auto">
                {children}
            </div>
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
