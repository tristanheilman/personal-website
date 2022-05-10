import React, { forwardRef, useEffect, useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';

const projects = [
    {
        title: "Scoopt",
        image: "https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/scooptLogo.png?alt=media&token=be8bf6e5-fb5f-4e7a-b2de-95b56b3f5b10",
        description: "Roughly two years ago I co-founded Scoopt with a close friend of mine. I led the development and produced the majority of the code. Scoopt was built using React Native and Firebase and was designed to bring friends closer together through event sharing and group messaging.",
        tags: [
            {
                color: 'bg-cyan-500',
                text: 'Aug. 2019'
            },
            {
                color: 'bg-green-500',
                text: 'Jan. 2020'
            },
            {
                color: 'bg-yellow-300',
                text: 'Occasional Updates'
            }
        ],
        link: "https://apps.apple.com/us/app/scoopt-discover-plan-chat/id1536820705",
        linkText: "View in the App Store"
    },
    {
        title: "Premier Art Destination",
        image: "https://ik.imagekit.io/e9mf9z51n6h/tr:w-800,c-at_least,f-webp,pr-true/o/pad-logo.png?alt=media&token=c103b6e6-da8d-4560-be9d-141e97f03264",
        description: "An art gallery/shop/community built for a client. The website features a primary/secondary marketplace, an auction house, Stripe & Discord integrations, and custom adminstrative components. The webiste was custom built, by request, utilizing React and Firebase.",
        tags: [
            {
                color: 'bg-cyan-500',
                text: 'Nov. 2021'
            },
            {
                color: 'bg-green-500',
                text: 'April 2022'
            },
            {
                color: 'bg-purple-500',
                text: 'Website/Database Manager'
            }
        ],
        link: "https://premierartdestination.com/",
        linkText: "View the Gallery"
    },
    {
        title: "DeePavLov Chat Bot",
        image: "https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/scooptLogo.png?alt=media&token=be8bf6e5-fb5f-4e7a-b2de-95b56b3f5b10",
        description: "An AI chat bot built using DeePavLov, an open-source conversational AI library that uses TensorFlow and Keras. You can see some code and the chat bot featured at the top of my site!",
        tags: [
            {
                color: 'bg-green-500',
                text: 'Nov. 2021'
            },
            {
                color: 'bg-rose-500',
                text: 'Working Deployment Issues'
            }
        ],
        link: "https://github.com/tristanheilman/treeeest-solutions-chat-bot",
        linkText: "Checkout the Repo"
    }
]

const Projects = forwardRef((props, ref) => {
    const { isVisible, visibilityRatio } = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('Projects');
            setShowContent(true);
        }
    }, [isVisible])

    return (
        <Section ref={ref} sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-300' : 'transition-filter ease-in-out duration-1000 delay-300'}`}>
            <div className="max-w-7xl mx-auto pb-20 sm:pb-32 md:pb-40">
                <p className="max-w-3xl text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">Projects & Experience</p>
                <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:gap-8 lg:grid-cols-3 lg:items-center">
                    {projects.map((project, index) => {
                        return (
                            <div key={`project-${index}`} className={`mb-8 relative row-start-1 col-start-${index+1} col-span-1`}>
                                <ProjectCard
                                    title={project.title}
                                    image={project.image}
                                    description={project.description}
                                    tags={project.tags}
                                    link={project.link}
                                    linkText={project.linkText}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    );
});

export default Projects;
