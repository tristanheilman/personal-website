import React, { useEffect, useState, useRef, forwardRef } from 'react';

const ProjectItem = (props) => {
    const divRef = useRef(null);
    const [divStyle, setDivStyle] = useState("project-item");

    const divCallback = (entry) => {
        console.log('ENTRY: ', entry);
        // get intersection data
        if(entry[0].intersectionRatio > 0.2) {
            setDivStyle("project-item visible")
        }
    }

    const observer = new IntersectionObserver(divCallback, {
        root: divRef.current,
        threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
    });

    useEffect(() => {
        observer.observe(divRef.current);
    });

    return (
        <div ref={divRef} className={divStyle}>
            <h2>{props.header}</h2>
            {props.children}
        </div>
    );
}

export default ProjectItem;
