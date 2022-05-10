import React from 'react';
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";

function Footer(props) {

    return (
        <footer className="pt-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 flex justify-between">
            <span className="flex gap-1 items-center">2022 &copy; Tristan W. Heilman</span>
            <span className="flex gap-6 items-center text-slate-500">
                <FaGithub size="1.5rem" className="hover:text-slate-400"/>
                <FaStackOverflow size="1.5rem" className="hover:text-slate-400"/>
                <FaLinkedin size="1.5rem" className="hover:text-slate-400"/>
            </span>
        </footer>
    );
}

export default Footer;
