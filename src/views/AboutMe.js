import React, { forwardRef, useRef, useState, useEffect } from 'react';
import Section from '../components/Section';
import HobbyContainer from '../components/HobbyContainer';
import visibleOnScreen from '../utils/visibleOnScreen';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, Filler, LineElement } from 'chart.js';
import { PolarArea , Radar } from 'react-chartjs-2';

ChartJS.register(ArcElement, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const knowledge = [
    {
        selected: true,
        color: 'bg-green-500',
        text: 'React',
        description: (
            <p className="mt-4 text-slate-600">I started using <a href="" className="font-semibold text-blue-500 hover:text-blue-400">React</a> at my job
            with <a href="https://www.cimx.com/" className="font-semibold text-blue-500 hover:text-blue-400">CIMx Software</a>. My manager had taken over a project
            to create a mobile friendly UI for an existing application. I learned the basics with the intention to help out with the project. As school priorities
            took over, I had to part from the company. I continued to watch tutorials and read guides to advance my knowldege. I quickly
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
            developing <a href="https://apps.apple.com/us/app/scoopt-discover-plan-chat/id1536820705" className="font-semibold text-blue-500 hover:text-blue-400">Scoopt</a>. I learned most of what I know by solving my own problems. After about a year
            of practice with React Native, I had an app published on the iOS App Store.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'JavaScript',
        description: (
            <p className="mt-4 text-slate-600">Out of every programming language I have used thus far in my career, JavaScript is my favorite. Throughout college, it was my language of choice
            when given the option for projects or assignments. My first real world applications of JS began at CIMx Software, where we used <a hre="https://clarle.github.io/yui3/" className="font-semibold text-blue-500 hover:text-blue-400">YUI</a>, a JS and CSS library for building interative
            web applications.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'NoSQL',
        description: (
            <p className="mt-4 text-slate-600">Unfortunately there were very little classes at UC that talked about NoSQL databases. After my time spent at CIMx, I began diving into two different NoSQL
            databases - <a href="https://firebase.google.com/" className="font-semibold text-blue-500 hover:text-blue-400">Firebase</a> & <a href="https://www.mongodb.com/" className="font-semibold text-blue-500 hover:text-blue-400">MongoDB</a>. I found Firebase Cloud Firestore very simple and cost effective for my purposes. <a href="https://apps.apple.com/us/app/scoopt-discover-plan-chat/id1536820705" className="font-semibold text-blue-500 hover:text-blue-400">Scoopt</a> and <a href="https://premierartdestination.com/" className="font-semibold text-blue-500 hover:text-blue-400">Premier Art Destination</a> were both built with a Firebase Cloud Firestore
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
            very easy to use. I have experience creating backend functions, <a href="https://firebase.google.com/products/hosting?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRI8TKOL-DwryUvQT5OGJE6doSEspngDHNxiGQBCA8xKCD_dcnb6gY4aAvQTEALw_wcB&gclsrc=aw.ds"  className="font-semibold text-blue-500 hover:text-blue-400">hosting applications</a>, integrating <a href="https://firebase.google.com/products/auth?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRJbnByuN0O3CSThdq5c9_ycrjpBE5yf4ZTymgbh8uLIFXUpaDXv9WIaAvokEALw_wcB&gclsrc=aw.ds" className="font-semibold text-blue-500 hover:text-blue-400">secure user authentication</a>, <a href="https://firebase.google.com/products/storage?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRKePj4evf-BmfXN8EBNNBTk-f-avMZAXY1zq4GYGwXuAgJ0XmApHkoaAlgnEALw_wcB&gclsrc=aw.ds"  className="font-semibold text-blue-500 hover:text-blue-400">storing files</a>, <a href="https://firebase.google.com/products/cloud-messaging?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRLJBtOuKjijA4r4xcBE22NBlN5oBno-n-iM4uQKPm8UHnax3chE_NgaAoVaEALw_wcB&gclsrc=aw.ds" className="font-semibold text-blue-500 hover:text-blue-400">sending notifications</a>, and <a href="https://firebase.google.com/products/analytics?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRLKHQN0rYfTc9RegJN-8gi8ha9tVPCCmknw8RyarFVZ8uxJfGjzK1MaAn7VEALw_wcB&gclsrc=aw.ds" className="font-semibold text-blue-500 hover:text-blue-400">tracking analytics</a> all within Firebase.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'SQL | MySQL',
        description: (
            <p className="mt-4 text-slate-600">SQL was one of the first query language that I learned. Throughout college it was required for most projects and assignments. At CIMx Software I was given the
            opportunity to work with a large complex manufacturing application that utilized a SQL database.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Docker',
        description: (
            <p className="mt-4 text-slate-600"><a href="https://www.docker.com/" className="font-semibold text-blue-500 hover:text-blue-400">Docker</a> was first introduced to me in college. A few of my classes utilized the tool for various reasons, typically to get jumpstart progress on an assignment or
            project. Most recently, I use Docker for my chat bot project when I'm doing work locally. It utilizes a simple python server to construct responses and a mongo container to record dialogs.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Git',
        description: (
            <p className="mt-4 text-slate-600">I've been using Git/Github since high school. You can checkout my github profile <a href="https://github.com/tristanheilman" className="font-semibold text-blue-500 hover:text-blue-400">here!</a></p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'Jenkins',
        description: (
            <p className="mt-4 text-slate-600">While working at <a href="https://www.cimx.com/" className="font-semibold text-blue-500 hover:text-blue-400">CIMx</a> I learned how to
            use <a href="https://www.jenkins.io/" className="font-semibold text-blue-500 hover:text-blue-400">Jenkins</a>, an automation server ran automated tasks like creating builds and running tests. When I arrived at CIMx the regression testing suite in place was broken and not producing
            meaningful results for the dev team. I worked with <a href="https://www.selenium.dev/" className="font-semibold text-blue-500 hover:text-blue-400">Selenium</a> to fix the tests and then learned how setup a pipeline in Jenkins to automated running the tests every time a new build
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
            <p className="mt-4 text-slate-600">A few of the people I follow on Twitter shared threads on Web3 topics and I was inspired to begin learning <a href="https://docs.soliditylang.org/en/v0.8.13/" className="font-semibold text-blue-500 hover:text-blue-400">Solidity</a>. I've
            started with the <a href="https://cryptozombies.io/" className="font-semibold text-blue-500 hover:text-blue-400">CryptoZombies</a> school to learn the syntax and technical aspects about blockchain technology.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Tailwind CSS',
        description: (
            <p className="mt-4 text-slate-600">I have recently began learning <a href="https://tailwindcss.com/" className="font-semibold text-blue-500 hover:text-blue-400">TailwindCSS</a>. To express my current knowledge, I have reconstructed my personal website using it. Feel free to inspect my code, and please give feedback
            using the contact section below. I'm always eager to learn from my mistakes.</p>
        )
    },
    {
        selected: false,
        color: 'bg-yellow-300',
        text: 'MongoDB',
        description: (
            <p className="mt-4 text-slate-600"><a href="https://www.mongodb.com/" className="font-semibold text-blue-500 hover:text-blue-400">MongoDB</a> and Firebase are fairly similar in how data is stored and accessed, but syntactical differences still separate the two. I have been teaching myself the basics of MongoDB by utilizing it
            with my chat bot application.</p>
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
            <p className="mt-4 text-slate-600">Over the last year or so, I have been drawn in by Formula 1. Like many people, the Drive to Survive Netflix series, along with my friends interests, jumpstarted my F1 journey. My
            favorite team is Mclaren by far with Lando being my guy. I own a starter's racing wheel and pedal setup and find joy in driving in sims and racing against others.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Golf',
        description: (
            <p className="mt-4 text-slate-600">I've been golfing since I was a little boy. My grandpa showed me my first clubs and would take my cousins and I out everyime we visited. I'm nowhere near good (20 handicap), but find
            myself on the course at least twice a week.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Gaming',
        description: (
            <p className="mt-4 text-slate-600">I'm a computer nerd at heart, so by design I love playing games. Most recently, I enjoy driving sim racing games like F1, iRacing, or Assetto Corsa. I also love board games like Chess and Catan.</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Family & Friends',
        description: (
            <>
                <p className="mt-4 text-slate-600">I love my family. A few of my closest relatives all share a small tattoo on our wrist that says "Lumi" which stands for "Love U Mean It".</p>
                <blockquote className="mt-4 p-4 italic border-l-4 text-slate-600 border-slate-900 quote">
                    <p className="mb-2">"If your parents are 70 and you see them twice a year, you dont have 5-10 years left. You could have as few as 10 times left to see them at all. Unless you change the rate. Change the rate."</p>
                    <cite>
                        <a className="flex gap-2" href="https://twitter.com/jackmurphylive/status/1524537131565256704?s=20&t=jkoKLXuxmh_kG-JPyJRqEQ">
                            <img className="w-6 rounded-full" src="https://pbs.twimg.com/profile_images/1491890860241346574/GyQsSxnu_400x400.jpg" />
                            <span>Jack Murphy</span>
                        </a>
                    </cite>
                </blockquote>
            </>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Travel',
        description: (
            <p className="mt-4 text-slate-600">I've been blessed to have a family that has included me in so many experiences. Some of my favorite destinations include: Denver, St. Maarten, Cape Cod, & Holland, MI</p>
        )
    },
    {
        selected: false,
        color: 'bg-green-500',
        text: 'Podcasts',
        description: (
            <p className="mt-4 text-slate-600">A goal of mine has been to start a podcast and starting Monday May 16th I will be. My first podcast will feature my roomate and myself discussing Formula 1 and physics topics. More
            details will be coming soon!</p>
        )
    }
]

const AboutMe = forwardRef((props, ref) => {
    const isVisible = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('About Me');
            setShowContent(true);
        }
    }, [isVisible])

    const dataRadar = {
        labels: [
            "Family",
            "Friends",
            "Golf",
            "Dogs",
            "Coding",
            "Cycling",
            "Running",
        ],
        datasets: [{
            label: "Me on the Radar",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(133, 105, 241, 0.2)",
            borderColor: "rgb(133, 105, 241)",
            pointBackgroundColor: "rgb(133, 105, 241)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(133, 105, 241)",
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

    return (
        <div ref={ref}>
            <Section sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-300' : 'transition-filter ease-in-out duration-300'}`}>
                <HobbyContainer title="Languages & Tools I love" hobbies={knowledge} >
                    <ul className="grid gap-8 grid-cols-1 md:grid-cols-2">
                        <li>
                            <figure className="bg-blue-200 rounded-lg">
                                <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:-webp,pr-true/o/family.jpg?alt=media&token=b15b467f-6f4f-4b4f-b307-3ea8ff3ee268" alt=""/>
                                <figcaption className="p-2">
                                    <p className="text-sm font-mono">Family Trip to Denver, CO</p>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="bg-blue-200 rounded-lg">
                                <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true/o/aboutMeBanana.png?alt=media&token=c88f1cf0-da8b-4ecc-98ab-94f533616707" alt=""/>
                                <figcaption className="p-2">
                                    <p className="text-sm font-mono">Saint Lucia Excursion</p>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </HobbyContainer>
            </Section>
            <Section sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`}>
                <HobbyContainer style="ml-auto" title="Things I'm Learning" hobbies={learning} >
                    <ul className="lg:col-start-1 lg:row-start-1 grid gap-8 grid-cols-1 md:grid-cols-2">
                        <li>
                            <figure className="bg-blue-200 rounded-lg">
                                <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true/o/aboutMeSnow.png?alt=media&token=c23b7880-91c4-4a7d-95ea-f52a4c721a19" alt=""/>
                                <figcaption className="p-2">
                                    <p className="text-sm font-mono">Shredding the Rocky Mountains</p>
                                </figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure className="bg-blue-200 rounded-lg">
                                <img className="rounded-lg" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:f-webp,pr-true/o/mountains.jpg?alt=media&token=b47eb2f1-eaf7-4d03-88c0-bb27e00610fe" alt=""/>
                                <figcaption className="p-2">
                                    <p className="text-sm font-mono">Mount Rainier National Park</p>
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                </HobbyContainer>
            </Section>
            <Section sectionStyle="bg-blue-100" childStyle={`${!showContent ? 'blur-md transition-filter ease-in-out duration-1000 delay-100' : 'transition-filter ease-in-out duration-1000 delay-100'}`}>
                <HobbyContainer title="My Hobbies" hobbies={hobbies} >
                <ul className="grid gap-8 grid-cols-1">
                    <li>
                        <figure className="bg-blue-200 rounded-lg">
                            <img className="rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/treeeest-solutions.appspot.com/o/1A9BD133-E53C-4988-AAAD-20411E753161.jpeg?alt=media&token=ee3e9cdf-944c-4773-be60-11b1959d4597" alt=""/>
                            <figcaption className="p-2">
                                <p className="text-sm font-mono">Softball Season</p>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
                </HobbyContainer>
            </Section>
        </div>
    );
});

export default AboutMe;
