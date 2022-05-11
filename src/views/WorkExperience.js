import React, { forwardRef, useRef, useState, useEffect } from 'react';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';
import { FaArrowRight } from "react-icons/fa";

const WorkExperience = forwardRef((props, ref) => {
    const { isVisible, visibilityRatio } = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('Work Experience');
            setShowContent(true);
        }
    }, [isVisible])

    return (
        <Section ref={ref} sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100 pb-20 sm:pb-32 md:pb-40' : 'transition-filter ease-in-out duration-1000 delay-100 pb-20 sm:pb-32 md:pb-40'}`}>
            <p className="mt-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">I currently live in Cincinnati, Ohio, and am actively searching for new work opportunities starting July 2022.</p>
            <div className="relative mt-8 mx-auto max-w-7xl">
                <div className="max-w-5xl mx-auto mb-2">
                    <p className="w-fit text-sm font-mono">shortened resume</p>
                </div>
                <ul className="max-w-5xl mx-auto py-4 px-4 sm:py-6 md:px-8 sm:px-6 md:px-8 grid sm:grid-cols-1 gap-8 lg:grid-cols-4 lg:items-center bg-blue-200 rounded-lg">
                    <li className="text-center text-slate-900">
                        <h2 className="font-semibold">Premier Art Destination</h2>
                        <p className="">Freelance Work</p>
                        <span className="flex justify-center items-center gap-1">Oct 2021 <FaArrowRight size=".75rem"/> Apr 2022</span>
                    </li>
                    <li className="text-center text-slate-900">
                        <h2 className="font-semibold">Scoopt</h2>
                        <p className="">Co-founder | Lead Developer</p>
                        <span className="flex justify-center items-center gap-1">Oct 2019 <FaArrowRight size=".75rem"/> Aug 2021</span>
                    </li>
                    <li className="text-center text-slate-900">
                        <h2 className="font-semibold">CIMx Software</h2>
                        <p className="">Junior Developer Co-op</p>
                        <span className="flex justify-center items-center gap-1">Jan 2019 <FaArrowRight size=".75rem"/> Aug 2019</span>
                        <span className="flex justify-center items-center gap-1">Jan 2020 <FaArrowRight size=".75rem"/> June 2020</span>
                    </li>
                    <li className="text-center text-slate-900">
                        <h2 className="font-semibold">University of Cincinnati</h2>
                        <p className="">BS Computer Science</p>
                        <span className="flex justify-center items-center gap-1">2016 <FaArrowRight size=".75rem"/> 2021</span>
                    </li>
                </ul>
            </div>
            {<div className="mt-8 max-w-7xl mx-auto grid grid-flow-col grid-rows-4 grid-cols-4 gap-8">
                <div className="row-start-1 col-start-1 col-span-2">
                    <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:-webp,pr-true/o/family.jpg?alt=media&token=b15b467f-6f4f-4b4f-b307-3ea8ff3ee268" alt=""/>
                </div>
                <div className="col-start-1 row-start-2 col-span-2 row-span-2">
                    <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true/o/aboutMeBanana.png?alt=media&token=c88f1cf0-da8b-4ecc-98ab-94f533616707" alt=""/>
                </div>
                <div className="col-start-3 row-start-1 row-span-2 col-span-2 self-end">
                    <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true/o/aboutMeSnow.png?alt=media&token=c23b7880-91c4-4a7d-95ea-f52a4c721a19" alt=""/>
                </div>
                <div className="col-start-3 row-start-3 row-span-2 col-span-2">
                    <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true/o/mountains.jpg?alt=media&token=b47eb2f1-eaf7-4d03-88c0-bb27e00610fe" alt=""/>
                </div>
            </div>}
        </Section>
    );
});

export default WorkExperience;
