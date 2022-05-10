import React, { useEffect, useState } from 'react';
import { FaSmile, FaPaperPlane } from 'react-icons/fa';

const ChatBot = (props) => {

    const [message, setMessage] = useState("");
    const [thread, setThread] = useState([{isBot: true, text: "Hello there!"}, {isBot: true, text: "My name is Tristan 🙂"}, {isBot: true, text: "Welcome to my site, ask me anything you want."}]);

    useEffect(() => {
        console.log("HERE THREAD UPDATE")
        // screenBodyRef.current.scrollTo({
        //     top: screenBodyRef.current.scrollHeight,
        //     behavior: 'smooth'
        // });
    }, [thread.length])

    const sendMessage = () => {
        console.log('message: ', message);
        let tempThread = [...thread];
        tempThread.push({
            isBot: false,
            text: message
        });
        setThread(tempThread);
        fetchResponse(tempThread);
    }

    const fetchResponse = async (messageThread) => {
        let result = await fetch('https://bot-agent-service-vkvstoshpa-uc.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id": "name",
                "payload": message
            })
        })
        .then(response => response.json());

        console.log("RESULT: ", result);

        let tempThread = [...messageThread];
        tempThread.push({
            isBot: true,
            text: result.response
        });
        setThread(tempThread);

    }

    return (
        <div className="h-[24.25rem] shadow-xl shadow-blue-200/50 mx-auto lg:max-w-none flex items-center justify-center max-w-md bg-blue-200 rounded-lg">
            <div className="relative w-full h-full flex flex-col">
                <div className="flex items-center border-b border-slate-500/30">
                    <div className="flex items-center h-8 space-x-1.5 px-3">
                        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"/>
                        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"/>
                        <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"/>
                    </div>
                    <div className="">
                        <figure className="flex items-center space-x-2">
                            <img className="flex-none w-5 h-5 rounded-full object-cover" src="https://ik.imagekit.io/e9mf9z51n6h/ts/tr:w-800,f-webp,pr-true/o/aboutMeProfile.png?alt=media&token=4929ec45-5ad8-456e-976c-3e6eb2edb47b"/>
                            <figcaption className="flex-auto">
                                <h2 className="text-slate-900 font-semibold">Treeeest Bot</h2>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="relative overflow-auto flex flex-1 flex-col rounded-lg p-6 space-y-2">
                    {thread.map((message, index) => {
                        if(message.isBot) {
                            return (
                                <span key={`message-${index}`} className="mr-auto text-slate-900 p-2 bg-blue-300 rounded-lg">{message.text}</span>

                            )
                        } else {
                            return (
                                <span key={`message-${index}`} className="ml-auto text-slate-900 p-2 bg-blue-400 rounded-lg">{message.text}</span>
                            )
                        }
                    })}
                </div>
                <div className="flex items-center space-x-6 p-6">
                    <div className="flex flex-1 group relative rounded-md bg-white">
                        <FaSmile size="20px" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"/>
                        <input onChange={changeEvent => setMessage(changeEvent.target.value)} className="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 cursor-pointer shadow-sm hover:bg-blue-400">
                        <FaPaperPlane size="20px" className="mr-2"/>
                        <button onClick={sendMessage} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot;
