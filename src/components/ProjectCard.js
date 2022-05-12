import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = (props) => {

    return (
        <div className="h-full flex flex-col justify-between shadow-xl shadow-blue-200/50 xl:w-auto bg-blue-200 p-8 rounded-lg">
            <div>
                <div className="flex h-20 w-20">
                    <img className="m-auto" src={props.image}/>
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mt-4">{props.title}</h2>
                <div className="flex gap-1 flex-wrap mt-4">
                    {props.tags.map((tag, index) => {
                        return (
                            <span key={`tag-${index}`} className="flex space-x-2 bg-blue-300 rounded-full py-1 px-2 items-center">
                                <div className={`${tag.color} w-2.5 h-2.5 rounded-full`}/>
                                <p className="text-sm text-slate-900">{tag.text}</p>
                            </span>
                        )
                    })}
                </div>
                <p className="text-md text-slate-900 mt-4">{props.description}</p>
            </div>
            <a href={props.link} className="mt-4 flex self-end items-center gap-1 font-semibold text-blue-500 hover:text-blue-400">
                <span>{props.linkText}</span>
                <FaArrowRight />
            </a>
        </div>
    );
}

export default ProjectCard;

/*
<figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
<img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
<div class="pt-6 space-y-4">
<blockquote>
<p class="text-lg font-medium">
“Tailwind CSS is the only framework that I've seen scale
on large teams. It’s easy to customize, adapts to any design,
and the build size is tiny.”
</p>
</blockquote>
<figcaption class="font-medium">
<div>
Sarah Dayan
</div>
<div>
Staff Engineer, Algolia
</div>
</figcaption>
</div>
</figure>

*/
