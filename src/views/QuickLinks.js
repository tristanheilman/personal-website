import React, { useRef, useState, useEffect } from 'react';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';
import { FaFileAlt, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const QuickLinks = (props) => {
    // const ref = useRef()
    // const { isVisible, visibilityRatio } = visibleOnScreen(ref);
    // const [showContent, setShowContent] = useState(false);
    //
    // useEffect(() => {
    //     if(isVisible) {
    //         props.setSelectedNavItem('work');
    //         setShowContent(true);
    //     }
    // }, [isVisible])

    return (
        <Section sectionStyle="bg-slate-900" childStyle='transition-filter ease-in-out duration-1000 delay-100 pb-20 sm:pb-32 md:pb-40'>
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid sm:grid-cols-1 gap-8 lg:grid-cols-4 lg:items-center">
                <a className="flex items-center justify-center space-x-2">
                    <FaFileAlt size="2rem" color="white"/>
                    <p className="text-white font-semibold text-lg">Full Resume</p>
                </a>
                <a className="flex items-center justify-center space-x-2">
                    <FaGithub size="2rem" color="white"/>
                    <p className="text-white font-semibold text-lg">Github</p>
                </a>
                <a className="flex items-center justify-center space-x-2">
                    <FaLinkedin size="2rem" color="white"/>
                    <p className="text-white font-semibold text-lg">LinkedIn</p>
                </a>
                <a className="flex items-center justify-center space-x-2">
                    <FaStackOverflow size="2rem" color="white"/>
                    <p className="text-white font-semibold text-lg">Stack Overflow</p>
                </a>
            </div>
        </Section>
    );
};

export default QuickLinks;
