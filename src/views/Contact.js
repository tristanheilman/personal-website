import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { FaRegLaughBeam, FaEnvelope, FaComment, FaArrowDown } from 'react-icons/fa';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';

const Contact = forwardRef((props, ref) => {
    const { isVisible, visibilityRatio } = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('Contact');
            setShowContent(true);
        }
    }, [isVisible])

    return (
        <Section ref={ref} >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center">
                <div className="relative row-start-1 col-start-2 col-span-4 xl:col-span-6">
                    <p className="mt-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">I'd love to connect & chat.</p>
                    <p className="mb-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Leave your info and I'll reach out to say <span className="text-blue-500">hello</span></p>
                    <div className="flex flex-col group rounded-md space-y-1 text-slate-900 font-semibold">
                        <label>Full Name</label>
                        <input onChange={changeEvent => setName(changeEvent.target.value)} className="appearance-none bg-white w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-2 pr-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col group rounded-md space-y-1 text-slate-900 font-semibold">
                        <label>Email</label>
                        <input onChange={changeEvent => setName(changeEvent.target.value)} className="appearance-none bg-white w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-2 pr-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex flex-col group rounded-md space-y-1 text-slate-900 font-semibold">
                        <label>Comment</label>
                        <textarea onChange={changeEvent => setName(changeEvent.target.value)} className="resize-none bg-white appearance-none w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-2 pr-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
            </div>
        </Section>
    );
});

export default Contact;
