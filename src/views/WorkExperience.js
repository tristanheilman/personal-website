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
        <Section ref={ref} sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-300' : 'transition-filter ease-in-out duration-1000 delay-300'}`}>
            <p className="mt-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">I currently live in Cincinnati, Ohio, and am actively searching for new work opportunities starting July 2022.</p>
            <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:gap-8 lg:grid-cols-6 lg:items-center">
                <div className="relative mt-8 self-start row-start-1 col-start-3 xl:col-start-1 col-span-6 xl:col-span-2">
                    <ul className="flex flex-col gap-6 text-center">
                        <li className="text-slate-900">
                            <h2 className="font-semibold">Premier Art Destination</h2>
                            <p>Freelance Work</p>

                            <span className="flex justify-center items-center gap-1">Oct 2021 <FaArrowRight size=".75rem"/> Apr 2022</span>
                        </li>
                        <li>
                            <h2 className="font-semibold">Scoopt</h2>
                            <p>Co-founder</p>
                            <span className="flex justify-center items-center gap-1">Oct 2019 <FaArrowRight size=".75rem"/> Aug 2021</span>
                        </li>
                        <li>
                            <h2 className="font-semibold">CIMx Software</h2>
                            <p>Junior Developer Co-op</p>
                            <span className="flex justify-center items-center gap-1">Jan 2019 <FaArrowRight size=".75rem"/> Aug 2019</span>
                            <span className="flex justify-center items-center gap-1">Jan 2020 <FaArrowRight size=".75rem"/> June 2020</span>
                        </li>
                        <li>
                            <h2 className="font-semibold">University of Cincinnati</h2>
                            <p>BS Computer Science</p>
                            <span className="flex justify-center items-center gap-1">2016 <FaArrowRight size=".75rem"/> 2021</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-8 relative row-start-1 col-start-1 col-span-6 xl:col-span-4">
                    <div className="grid grid-flow-col grid-rows-4 grid-cols-4 gap-8">
                        <div className="row-start-1 col-span-2">
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
                    </div>
                </div>
            </div>
        </Section>
    );
});

export default WorkExperience;
