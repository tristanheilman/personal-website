import React, { forwardRef, useRef, useState, useEffect } from 'react';
import CodeBlock from '../components/CodeBlock';
import ChatBot from '../components/ChatBot';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';

const Home = forwardRef((props, ref) => {
    const { isVisible, visibilityRatio } = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('Tristan W. Heilman');
            setShowContent(true);
        }
    }, [isVisible])

    return (
        <Section ref={ref} childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`} customStyle={{background: `radial-gradient(circle at 60% bottom, rgba(59,130,246,1) 0%, rgba(100,161,249,1) 0%, rgba(131,185,252,1) 0%, rgba(147,197,253,1) 7%, rgba(154,201,253,1) 12%, rgba(169,209,253,1) 17%, rgba(219,234,254,1) 31%, rgba(241,245,249,1) 100%)`}}>
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8" >
                <p className="mt-4 mb-8 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Hi my name
                is <span className="text-blue-500 relative">
                        <span className="jello-horizontal">T</span>
                        <span className="jello-horizontal">r</span>
                        <span className="jello-horizontal">i</span>
                        <span className="jello-horizontal">s</span>
                        <span className="jello-horizontal">t</span>
                        <span className="jello-horizontal">a</span>
                        <span className="jello-horizontal">n</span>
                        <span> </span>
                        <span className="jello-horizontal">H</span>
                        <span className="jello-horizontal">e</span>
                        <span className="jello-horizontal">i</span>
                        <span className="jello-horizontal">l</span>
                        <span className="jello-horizontal">m</span>
                        <span className="jello-horizontal">a</span>
                        <span className="jello-horizontal">n</span>
                    </span> and I'm a software developer specializing in building amazing products</p>
                <div className="mt-8 flex justify-center" >
                    <img className="rounded-lg h-1/3" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true,e-grayscale/o/profilePicNoBackground.png?alt=media&token=54fa0b10-7f7d-4787-9d15-7a69450fcdf8" alt=""/>
                </div>
            </div>
        </Section>
    );
});

export default Home;


/*

<ul className="flex space-x-4">
    <li><a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">My Childhood</a></li>
    <li><a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">Coding Inspiration</a></li>
    <li><a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-8">Today</a></li>
</ul>
<div className="overflow-hidden">
    <p className="mt-4 max-w-3xl space-y-6">I was born in Rockville, Maryland. When I was an infant my family moved to Atlanta, Georgia where we stayed
    for about five years. Before I started school, we moved to Lincoln, Nebraska. I spent most of my childhood growing up on
    a farm. In the summer my job was to paint our long fence that covered the front half of our 10 acre plot of land. When it was cold in the winter,
    I would wake up early every to gather the eggs from our chicken coupe. I loved our farm and all of the experiences that came with it.</p>
    <br />
    <p className="mt-4 max-w-3xl space-y-6">My 7th grade summer was my last summer in Nebraska. Just before baseball season ended, my family decided to move to Ohio. We moved to Wyoming,
    Ohio; my parents choose the area for the great schools. I played JV basketball my Freshman and Sophomore year of High School. When Sophomore year
    started, like most of my peers, I had no clue what I wanted to do later in life. It wasn't until my AP Computer Science class when I fell in love. The
    first "app" I built was a simplified Battle Ship game built in Java. I knew after taking that class that I would major in CS and be a developer.</p>
    <br />
    <p className="mt-4 max-w-3xl space-y-6">Fast-forward to today, I've had the chance to teach and mentor young coders, work at a software comany, build a startup, and bring products to life
    for my clients. </p>
</div>

*/

/*

<div ref={ref} className="about-me-wrapper">
    <div className="about-me-header-wrapper">
        <div className="about-me-header-title">
            <a>{"> About Me"}</a>
        </div>
        <div className="about-me-header-container">
            <div className="about-me-header-profile">
                <div className="about-me-header-image-wrapper">
                    <div className="about-me-header-image-container">
                        <img src={"https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/aboutMeProfile.png?alt=media&token=4929ec45-5ad8-456e-976c-3e6eb2edb47b"} className="about-me-header-image" />
                    </div>
                    <h3>Tristan Heilman</h3>
                </div>
                <div className="about-me-header-info">
                    <div className="about-me-header-info-item">
                        <p>4</p>
                        <p>Projects</p>
                    </div>
                    <div className="about-me-header-info-item">
                        <p>30</p>
                        <p>Views</p>
                    </div>
                    <div className="about-me-header-info-item">
                        <p>22</p>
                        <p>Likes</p>
                    </div>
                </div>
            </div>
            <div className="about-me-header-profile-buttons">
                <a className="special-button">Like</a>
                <a className="other-special-button" onClick={props.scrollToContact}>Message</a>
            </div>
        </div>
    </div>
    <div className="about-me-body">
        <div className="about-me-item-container">
            <div className="about-me-item skills">
                <h2>Technologies I know</h2>
                <TextScramble />
            </div>
            <div className="about-me-item">
                <h2>Who Am I?</h2>
                <p>I was born in Rockville, Maryland. When I was an infant my family moved to Atlanta, Georgia where we stayed
                for about five years. Before I started school, we moved to Lincoln, Nebraska. I spent most of my childhood growing up on
                a farm. In the summer my job was to paint our long fence that covered the front half of our 10 acre plot of land. When it was cold in the winter,
                I would wake up early every to gather the eggs from our chicken coupe. I loved our farm and all of the experiences that came with it.</p>
                <br />
                <p>My 7th grade summer was my last summer in Nebraska. Just before baseball season ended, my family decided to move to Ohio. We moved to Wyoming,
                Ohio; my parents choose the area for the great schools. I played JV basketball my Freshman and Sophomore year of High School. When Sophomore year
                started, like most of my peers, I had no clue what I wanted to do later in life. It wasn't until my AP Computer Science class when I fell in love. The
                first "app" I built was a simplified Battle Ship game built in Java. I knew after taking that class that I would major in CS and be a developer.</p>
                <br />
                <p>Fast-forward to today, I've had the chance to teach and mentor young coders, work at a software comany, build a startup, and bring products to life
                for my clients. </p>
            </div>
            <div className="about-me-item">
                <h2>My Interests</h2>
                <p>Details coming soon...</p>
            </div>
        </div>
        <div className="about-me-images">
            <div>
                <img src={"https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/aboutMeBanana.png?alt=media&token=c88f1cf0-da8b-4ecc-98ab-94f533616707"} className="about-me-image" />
            </div>
            <div>
                <img src={"https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/aboutMeSnow.png?alt=media&token=c23b7880-91c4-4a7d-95ea-f52a4c721a19"} className="about-me-image" />
            </div>
            <div>
            <img src={"https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/aboutMeCar.png?alt=media&token=057c28b6-071f-40cc-bcee-0d836b9f373d"} className="about-me-image" />
            </div>
        </div>
    </div>
</div>

*/
