import React, { forwardRef, useRef, useState, useEffect } from 'react';
import Section from '../components/Section';
import HobbyContainer from '../components/HobbyContainer';
import visibleOnScreen from '../utils/visibleOnScreen';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import { Pie, Radar } from 'react-chartjs-2';

ChartJS.register(ArcElement, RadialLinearScale, PointElement, Filler, LineElement, Tooltip, Legend);

const knowledge = [
    {
        selected: true,
        color: 'bg-green-500',
        text: 'React',
        description: (
            <p className="mt-4 text-slate-600">I started using <a href="" className="font-semibold text-blue-500 hover:text-blue-400">React</a> at my job
            with <a href="https://www.cimx.com/" className="font-semibold text-blue-500 hover:text-blue-400">CIMx Software</a>. My manager had taken over a project
            to create a mobile friendly UI for an existing application. I learned the basics with the intention to help out with the project. As school priorities
            took over, I had to part from the company. I continued to watch tutorials and read guides to advance my React/React Native knowldege. I quickly
            built <a href="https://apps.apple.com/us/app/scoopt-discover-plan-chat/id1536820705" className="font-semibold text-blue-500 hover:text-blue-400">Scoopt</a>, struggling
            through the bugs and learning by trial and error.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'React Native',
        description: (
            <p className="mt-4 text-slate-600">I started learning <a href="https://reactnative.dev/" className="font-semibold text-blue-500 hover:text-blue-400">React Native</a> when I began
            developing <a href="https://scoopt.app/" className="font-semibold text-blue-500 hover:text-blue-400">Scoopt</a>. I learned most of what I know by solving my own problems. After about a year
            of practice with React Native, I had an app published on the iOS App Store.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'JavaScript',
        description: (
            <p className="mt-4 text-slate-600">Out of every programming language I have used thus far in my career, JavaScript is my favorite. Throughout college, it was my language of choice
            when given the option for projects or assignments. My first real world applications of JS began at CIMx Software, where we used YUI, a JS and CSS library for building interative
            web applications.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'NoSQL',
        description: (
            <p className="mt-4 text-slate-600">Unfortunately there were very little classes at UC that talked about NoSQL databases. After my time spent at CIMx, I began diving into two different NoSQL
            databases - Firebase & MongoDB. I found Firebase Cloud Firestore very simple and cost effective for my purposes. Scoopt and Premier Art Destination were both built with a Firebase Cloud Firestore
            backend. They incorporated many collections/subcollections/documents to house data in a JSON object type structure. I am still learning my way around MongoDB, as I have decided to utilize it as
            my database management system for my chat bot (shown at the top of the site).</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Firebase',
        description: (
            <p className="mt-4 text-slate-600">I've been using Firebase since August 2020, developing apps to learn and expand my knowledge. The tools incorporated into a singular bundle makes everything
            very easy to use. I have experience creating backend functions, hosting applications, integrating secure user authentication, storing files, sending notifications, and tracking analytics all within Firebase.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'SQL | MySQL',
        description: (
            <p className="mt-4 text-slate-600"></p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Docker',
        description: (
            <p className="mt-4 text-slate-600">Docker was first introduced to me in college. A few of my classes utilized the tool for various reasons, typically to get jumpstart progress on an assignment or
            project. Most recently, I use Docker for my chat bot project when I'm doing work locally. It utilizes a simple python server to construct responses and a mongo container to record dialogs.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Git',
        description: (
            <p className="mt-4 text-slate-600">I've been using Git/Github since high school</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Jenkins',
        description: (
            <p className="mt-4 text-slate-600">While working at <a href="https://www.cimx.com/" className="font-semibold text-blue-500 hover:text-blue-400">CIMx</a> I learned how to use
            Jenkins, an automation server ran automated tasks like creating builds and running tests. When I arrived at CIMx the regression testing suite in place was broken and not producing
            meaningful results for the dev team. I worked with Selenium to fix the tests and then learned how setup a pipeline in Jenkins to automated running the tests every time a new build
            was created. This helped our team receive email notifications about failed tests whenever a build was created.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Java',
        description: (
            <p className="mt-4 text-slate-600">Back in 2014 I wrote my first Java application that simulated <a href="https://en.wikipedia.org/wiki/Battleship_(game)" className="font-semibold text-blue-500 hover:text-blue-400">Battleship</a> (a game). I was a Sophomore at Wyoming High School
            and I signed up for AP Computer Science. Most of my peers in the class were either Juniors or Seniors. I knew after taking the class that I would major in CS. My first job
            with CIMx Software introduced me to the real world applications of Java. At first, I found myself overwhelmed with the amount of structure required to read/write data to
            a SQL database, but after woking with the different testing frameworks like <a href="https://www.selenium.dev/" className="font-semibold text-blue-500 hover:text-blue-400">Selenium</a> and <a href="https://jestjs.io/" className="font-semibold text-blue-500 hover:text-blue-400">Jest</a> I
            was able to develop a better understanding of the codebase.</p>
        )
    }
]
const learning = [
    {
        selected: true,
        color: 'bg-green-500',
        text: 'Solidity',
        description: (
            <p className="mt-4 text-slate-600">A few of the people I follow on Twitter shared threads on Web3 topics and I was inspired to begin learning Solidity. I've
            started with the <a href="https://cryptozombies.io/" className="font-semibold text-blue-500 hover:text-blue-400">CryptoZombies</a> school to learn the syntax and technical aspects about blockchain technology.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Tailwind CSS',
        description: (
            <p className="mt-4 text-slate-600">A few of the people I follow on Twitter shared threads on Web3 topics and I was inspired to begin learning Solidity. I've
            started with the <a href="https://cryptozombies.io/" className="font-semibold text-blue-500 hover:text-blue-400">CryptoZombies</a> school to learn the syntax and technical aspects about blockchain technology.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'MongoDB',
        description: (
            <p className="mt-4 text-slate-600">I started using <a href="" className="font-semibold text-blue-500 hover:text-blue-400">React</a> at my job
            with <a href="https://www.cimx.com/" className="font-semibold text-blue-500 hover:text-blue-400">CIMx Software</a>. My manager had taken over a project
            to create a mobile friendly UI for an existing application. I learned the basics with the intention to help out with the project. As school priorities
            took over, I had to part from the company. I continued to watch tutorials and read guides to advanace my React/React Native knowldege. I quickly
            built <a href="https://apps.apple.com/us/app/scoopt-discover-plan-chat/id1536820705" className="font-semibold text-blue-500 hover:text-blue-400">Scoopt</a>, struggling
            through the bugs and learning by trial and error.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Three.js',
        description: (
            <p className="mt-4 text-slate-600"><a href="https://threejs.org/" className="font-semibold text-blue-500 hover:text-blue-400">Three.js</a> is a JavaScript library used to create and animate 3D objects in a web browser. Three.js
            taps into the <a href="https://get.webgl.org/" className="font-semibold text-blue-500 hover:text-blue-400">WebGL</a> JavaScript API for rendering interactive 2D and 3D graphics.
            I have started developing a small game that utilizes Three.js to animate an F1 car driving around circuits. My goal is to have an RC like interaction where two players can race around a track, with required pit stops,
            race strategies, tire degredation, and more.</p>
        )
    },
]
const hobbies = [
    {
        selected: true,
        color: 'bg-green-500',
        text: 'Formula 1',
        description: (
            <p className="mt-4 text-slate-600">A few of the people I follow on Twitter shared threads on Web3 topics and I was inspired to begin learning Solidity. I've
            started with the <a href="https://cryptozombies.io/" className="font-semibold text-blue-500 hover:text-blue-400">CryptoZombies</a> school to learn the syntax and technical aspects about blockchain technology.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Golf'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Gaming'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Family & Friends'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Travel'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Podcasts'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Sim Driving'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Art & Collecting'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Growing Plants'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'My Dog (Merlin)'
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Softball'
    },
]

const AboutMe = forwardRef((props, ref) => {
    const { isVisible, visibilityRatio } = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('About Me');
            setShowContent(true);
        }
    }, [isVisible])

    const dataPie = {
        labels: ["JavaScript", "Python", "Ruby"],
        datasets: [
            {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(133, 105, 241)",
                    "rgb(164, 101, 241)",
                    "rgb(101, 143, 241)",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const dataRadar = {
        labels: [
            "Eating",
            "Drinking",
            "Sleeping",
            "Designing",
            "Coding",
            "Cycling",
            "Running",
        ],
        datasets: [{
            label: "My First Dataset",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(133, 105, 241, 0.2)",
            borderColor: "rgb(133, 105, 241)",
            pointBackgroundColor: "rgb(133, 105, 241)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(133, 105, 241)",
        },
        {
            label: "My Second Dataset",
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
        }],
    };

    const configRadarChart = {
        type: "radar",
        data: dataRadar,
        scales: {
            r: {
                ticks: {
                    display: false
                }
            }
        }
    };

    const configPie = {
        type: "pie",
        data: dataPie,
        options: {},
    };

    return (
        <>
            <Section ref={ref} sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`}>
                <HobbyContainer title="Languages & Tools I love" hobbies={knowledge} >
                    <Pie options={configPie} data={dataPie} />
                </HobbyContainer>
            </Section>
            <Section sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`}>
                <HobbyContainer style="ml-auto" title="Things I'm Learning" hobbies={learning} />
            </Section>
            <Section sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`}>
                <HobbyContainer title="My Hobbies" hobbies={hobbies} >
                    <Radar options={configRadarChart} data={dataRadar} />
                </HobbyContainer>
            </Section>
        </>
    );
});

export default AboutMe;
