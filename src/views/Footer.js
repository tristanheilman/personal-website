import React from 'react';
import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";

function Footer(props) {

    return (
        <footer className="pt-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 flex justify-between">
            <span className="flex gap-1 items-center">2023 &copy; Tristan W. Heilman</span>
            <span className="flex gap-6 items-center text-slate-500">
                <a href="https://github.com/tristanheilman"><FaGithub size="1.5rem" className="hover:text-slate-400"/></a>
                <a href="https://stackoverflow.com/users/11506005/tristan-heilman"><FaStackOverflow size="1.5rem" className="hover:text-slate-400"/></a>
                <a href="https://www.linkedin.com/in/tristanheilman/"><FaLinkedin size="1.5rem" className="hover:text-slate-400"/></a>
            </span>
        </footer>
    );
}

export default Footer;
