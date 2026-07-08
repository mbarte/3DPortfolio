import React from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm <p className="amber-gradient_text font-semibold drop-shadow">Michele</p>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p className="text-lg mb-4">
                    I'm a passionate software engineer based in Italy, with a love for creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and building applications that make a difference.
                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
            
                <div className="mt-5 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className="w-15 h-15 block-container">
                            <div className="btn-back rounded-xl">
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <img src={skill.imageUrl}
                                        alt={skill.name}
                                        title = {skill.name}
                                        className="w-1/2 h-1/2 object-contain">   
                                    </img>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="py-16">
                <h3 className="subhead-text">Work Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p className="text-lg mb-4">
                        I worked hard leveling up my skills in software development and teaming up with my colleagues, while keeping full ownership and delivering impactful projects across the full stack.
                    </p>
                </div>
                <div className="mt-12 flex">
                    <VerticalTimeline>
                       {experiences.flatMap((experience, index) => {
                        const element = (
                        <VerticalTimelineElement
                            key={experience.company_name}
                            date={experience.date}
                            icon={<div className="flex justify-center items-center w-full h-full">
                                <img src={experience.icon} 
                                alt={experience.company_name} 
                                className="w-[60%] h-[60%] object-contain"/>
                            </div>}
                            iconStyle={{background: experience.iconBg}}
                            contentStyle={{
                                'borderBottom': '8px',
                                'borderStyle': 'solid',
                                'borderColor': experience.iconBg,
                                'boxShadow': 'none',
                            }}>
                            <div>
                                <h3 className="text-xl font-semibold font-poppins">
                                    {experience.title} 
                                </h3>
                                <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                                    {experience.company_name}
                                </p>
                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, idx) => (
                                        <li key={`experience-point-${idx}`} className="text-black-500/50 font-normal pl-1 text-sm ">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </VerticalTimelineElement>
                        );
                        if (index === 2) {
                            return [
                                <div key="experience-divider" className="mt-5 flex flex-col gap-3 text-slate-500">
                                    <p className="text-lg mb-4 z-50">
                                       Over the years, I have gained experience across both academic and real-world environments. These roles have helped me develop strong <strong>communication</strong>, <strong>organizational</strong>, and <strong>interpersonal</strong> skills
                                    </p>
                                </div>,
                                element
                            ];
                        }
                        return [element];
                       })} 
                    </VerticalTimeline>
                    
                </div>
          
            </div>

            <hr className="border-slate-200 my-10"/>
            <CTA/>

        </section>
    )
}

export default About;