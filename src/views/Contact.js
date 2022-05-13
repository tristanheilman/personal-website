import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Section from '../components/Section';
import visibleOnScreen from '../utils/visibleOnScreen';

const Contact = forwardRef((props, ref) => {
    const isVisible = visibleOnScreen(ref);
    const [showContent, setShowContent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [commentSent, toggleCommentSent] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        if(isVisible) {
            props.setSelectedNavItem('Contact');
            setShowContent(true);
        }
    }, [isVisible])

    const sendComment = () => {

        setLoading(true);
        import('../api/FirebaseContact').then(async firebaseContact => {
            await firebaseContact.submitContactRequest(name, email, comment);
            setLoading(false);
            toggleCommentSent(true);
            finishedAnimation();
        })
    }

    return (
        <Section ref={ref} >
            <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 items-center">
                <div className="relative row-start-1 col-start-2 col-span-4 xl:col-span-6">
                    {!commentSent ?
                        <>
                            <p className="mt-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">I'd love to connect & chat.</p>
                            <p className="mb-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Leave your info and I'll reach out to say <span className="text-blue-500">hello</span></p>
                        </>
                    :
                        <>
                            <p className="mt-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">Thanks for sending a message!</p>
                            <p className="mb-4 text-center mx-auto max-w-3xl text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">I'll get back to you <span className="text-blue-500">ASAP</span></p>
                        </>
                    }
                    <div className="mb-4 flex flex-col group rounded-md space-y-1 text-slate-900 font-semibold">
                        <label>Full Name</label>
                        <input disabled={commentSent} onChange={changeEvent => setName(changeEvent.target.value)} className="appearance-none disabled:bg-slate-50 bg-white w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-2 pr-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4 flex flex-col group rounded-md space-y-1 text-slate-900 font-semibold">
                        <label>Email</label>
                        <input disabled={commentSent} onChange={changeEvent => setEmail(changeEvent.target.value)} className="appearance-none disabled:bg-slate-50 bg-white w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-2 pr-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4 flex flex-col group rounded-md space-y-1 text-slate-900 font-semibold">
                        <label>Comment</label>
                        <textarea disabled={commentSent} onChange={changeEvent => setComment(changeEvent.target.value)} className="resize-none disabled:bg-slate-50 bg-white appearance-none w-full text-sm leading-6 text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-2 pr-2 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex justify-center mb-4">
                        {loading ?
                            <button disabled type="button" className="text-base font-medium rounded-lg bg-blue-500 text-white w-64 py-3 px-6 text-center cursor-pointer">
                                <svg role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                                Sending...
                            </button>
                        : commentSent ?
                            <button className="text-base flex justify-center items-center font-medium rounded-lg bg-blue-500 text-white w-64 py-3 px-6 text-center cursor-pointer"><FaCheckCircle className="mr-2"/>Sent</button>
                        :
                            <button onClick={sendComment} className="text-base font-medium rounded-lg bg-blue-500 text-white w-64 py-3 px-6 text-center cursor-pointer">Send Comment</button>
                        }
                    </div>
                </div>
            </div>
        </Section>
    );
});

export default Contact;
