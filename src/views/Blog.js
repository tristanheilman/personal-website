import React, { useRef, useState, useEffect } from 'react';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';

const Blog = (props) => {
    const ref = useRef()
    const isVisible = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('blog');
            setShowContent(true);
        }
    }, [isVisible])

    return (
        <Section ref={ref} childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`}>
            <p>Blog</p>
        </Section>
    );
};

export default Blog;
