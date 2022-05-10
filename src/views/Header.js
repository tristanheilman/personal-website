import React, { useEffect, useState } from 'react';
import logo from '../logo.png';
import { FaArrowDown, FaMoon, FaGithub, FaStackOverflow } from "react-icons/fa";
import { FcTwoSmartphones, FcDepartment, FcPortraitMode, FcAnswers } from "react-icons/fc";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const navItems = [
    {
        title: 'Tristan W. Heilman',
        image: <img className="flex-none w-6 h-6 rounded-full object-cover" src={logo} />,
    },
    {
        title: 'Projects',
        image: <FcTwoSmartphones size="1.5rem"/>,
    },
    {
        title: 'Work Experience',
        image: <FcDepartment size="1.5rem"/>,
    },
    {
        title: 'About Me',
        image: <FcPortraitMode size="1.5rem"/>,
    },
    {
        title: 'Contact',
        image: <FcAnswers size="1.5rem"/>,
    }
]

function Header(props) {
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = (event) => {
        console.log("HERE SCROLL")
        setNavOpen(false);
        // do something like call `this.setState`
        // access window.scrollY etc
    }

    const handleNavSelection = (item) => {
        switch(item.title) {
            case 'Tristan W. Heilman':
                props.homeClicked();
                break;
            case 'Projects':
                props.projectsClicked();
                break;
            case 'Work Experience':
                props.workClicked();
                break;
            case 'About Me':
                props.aboutMeClick();
                break;
            case 'Contact':
                props.contactClicked();
                break;
        }
    }

    return (
        <header className="fixed top-0 left-0 lg:top-8 lg:left-8 z-10">
            <nav className="p-8">
                <ul className="relative">
                    <li className='absolute w-64 bg-slate-800 rounded-lg flex items-center p-4 z-10' onClick={() => setNavOpen(!navOpen)}>
                        <img className="flex-none w-6 h-6 rounded-full object-cover" src={logo} />
                        <span className="ml-2 font-semibold text-white">{props.selectedNavItem}</span>
                        {navOpen ? <FaAngleUp className="pl-2 ml-auto" color="#fff"/> : <FaAngleDown className="pl-2 ml-auto" color="#fff"/>}
                    </li>
                    <div className={navOpen ? "absolute w-64 swing-in-top-fwd bg-white rounded-b-lg" : "absolute w-64 swing-out-top-bck bg-white rounded-b-lg pointer-events-none"}>
                        {navItems.map(item =>
                            <li className="flex space-x-2 items-center p-4 rounded-lg hover:bg-blue-200" onClick={() => handleNavSelection(item)}>
                                {item.image}
                                <span className="font-semibold text-slate-900">{item.title}</span>
                            </li>
                        )}
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
