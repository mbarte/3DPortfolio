import React from "react";

import { projects } from "../constants";
import { Link } from "react-router-dom";
import {infoIcon} from "../assets/icons";
import CTA from '../components/CTA';

const Projects = () => {
    return (
        <section className="max-container">
            <h1 className="head-text flex gap-3">
                My <p className="amber-gradient_text font-semibold drop-shadow">Projects</p>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p className="text-lg mb-4">
                    I have embarqued on numerous projects throughout the years, and this is a non-exhaustive list that will be continuously updated. Feel free to explore the codebase, where available, and contribute with your ideas for further development.
                    Your collaboration is highly valuable!
                </p>
            </div>
            <div className="flex flex-wrap my-20 gap-16">
                
                <div className="mt-5 flex flex-wrap gap-16">
                    {projects.map((project) => (
                        <div className="lg:w-[400px] w-full" key={project.name}>
                            <div className="block-container w-12 h-12">
                                <div className={`btn-back rounded-xl ${project.theme}`}/>
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <img src={project.iconUrl}
                                        alt="Project Icon"
                                        className="w-1/2 h-1/2 object-contain">   
                                    </img>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-col">
                            <h4>
                                {project.name}
                            </h4>
                            <p>
                                {project.description}
                            </p>
                            <div className="mt-5 flex items-center gap-2 font-poppins">
                                <Link
                                to={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font semibold text-amber-600" >
                                    More
                                </Link>
                                <img
                                    src={infoIcon}
                                    alt="info icon"
                                    className="w-4 h-4 object-contain">
                                </img>
                            </div>
                            </div>

                           
                        </div>

                    ))}
                    <hr className="w-full border-slate-200"/>
                    <CTA />
                </div>

            </div>
        </section>
    )
}


export default Projects;