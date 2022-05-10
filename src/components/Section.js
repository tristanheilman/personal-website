import React, { forwardRef } from 'react';

const Section = forwardRef((props, ref) => {

    return (
        <section ref={ref} className={`${props.sectionStyle} relative pt-20 space-y-20 sm:pt-32 sm:space-y-32 md:pt-40 md:space-y-40`} style={props.customStyle}>
            <div className={`${props.childStyle} max-w-7xl mx-auto px-4 sm:px-6 md:px-8`}>
                {props.children}
            </div>
        </section>
    );
});

Section.defaultProps = {
    sectionStyle: 'bg-slate-100',
    childStyle: '',
    customStyle: {},
    children: null
}

export default Section;
