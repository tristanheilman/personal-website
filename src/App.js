import React, { useRef, useState } from 'react';
import Header from './views/Header';
import Home from './views/Home';
import QuickLinks from './views/QuickLinks';
import Projects from './views/Projects';
import AboutMe from './views/AboutMe';
import WorkExperience from './views/WorkExperience';
import Contact from './views/Contact';
import Footer from './views/Footer';

function App() {

    const [selectedNavItem, setSelectedNavItem] = useState('Tristan W. Heilman');

    const homeRef = useRef();
    const projectsRef = useRef();
    const workRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToWork = () => {
        workRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToAboutMe = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="relative bg-slate-100">
            <Header
                selectedNavItem={selectedNavItem}
                homeClicked={scrollToHome}
                projectsClicked={scrollToProjects}
                workClicked={scrollToWork}
                aboutMeClick={scrollToAboutMe}
                contactClicked={scrollToContact}/>
            <Home ref={homeRef} setSelectedNavItem={setSelectedNavItem} />
            <QuickLinks setSelectedNavItem={setSelectedNavItem} />
            <Projects ref={projectsRef} setSelectedNavItem={setSelectedNavItem}/>
            <WorkExperience ref={workRef} setSelectedNavItem={setSelectedNavItem} />
            <AboutMe ref={aboutRef} setSelectedNavItem={setSelectedNavItem}/>
            <Contact ref={contactRef} setSelectedNavItem={setSelectedNavItem}/>
            <Footer />
        </div>
    );
}

export default App;
