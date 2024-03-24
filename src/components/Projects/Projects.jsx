import React from 'react';
import { Section } from '../';
import { projects } from '../../constants';
import { FaGithub, FaLink} from 'react-icons/fa'

const Projects = () => {
    return (
        <Section id="projects">
            <div className='w-full relative h-full'>
                <h1 className='font-bold uppercase text-center font-Balsamiq text-white text-6xl mb-8'>My Work</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-10'>
                    {projects.map((project, index) => (
                        <div key={index} className='bg-gray-800 items-start h-full rounded-lg overflow-hidden shadow-lg flex flex-col'>
                            <img src={project.img} alt={project.title} className='w-full min-h-[15rem] ss:min-h-60  ss:object-cover ' />
                            <div className='flex-1 p-4 flex flex-col justify-between'>
                                <h2 className='text-white text-xl font-semibold mb-2'>{project.title}</h2>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.techs.map((tech, techIndex) => (
                                        <span key={techIndex} className='bg-gray-600 max-xs:text-xs text-white px-2 py-1 rounded-2xl'>#{tech}</span>
                                    ))}
                                </div>
                                <div className='flex gap-3'>
                                    <a target='_blank' href={project.github} className='mt-4  text-center bg-black text-white py-2 px-4 rounded-md transition duration-300 hover:bg-gray-950'><FaGithub /></a>
                                    <a target='_blank' href={project.link} className='mt-4  text-center bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-900'><FaLink /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
