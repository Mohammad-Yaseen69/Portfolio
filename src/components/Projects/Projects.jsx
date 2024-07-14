import React from 'react';
import { Section } from '../';
import { FaGithub, FaLink} from 'react-icons/fa'
import { useSelector } from 'react-redux';

const Projects = () => {
    const projects = useSelector(state => state.info.projects)
    return (
        <Section id="projects">
            <div className='w-full relative h-full'>
                <h1 className='font-bold uppercase text-center font-Balsamiq text-white text-6xl mb-8'>My Work</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-4  mt-10 place-items-center'>
                    {projects?.map((project, index) => (
                        <div key={index} className='bg-zinc-900 w-full xs:w-[475px] sm:w-[600px] md:w-full  items-start h-full rounded-lg overflow-hidden shadow-lg flex flex-col'>
                            <img src={project.img?.publicUrl} alt={project.name} className='w-full h-[16rem]  object-cover object-top' />
                            <div className='flex-1 p-4 flex flex-col justify-between'>
                                <h2 className='text-white text-xl font-semibold mb-2'>{project.name}</h2>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {project.techStack?.map((tech, techIndex) => (
                                        <span key={techIndex} className='bg-gray-600 max-xs:text-xs text-white px-2 py-1 rounded-2xl'>#{tech}</span>
                                    ))}
                                </div>
                                <div className='flex gap-3'>
                                    <a target='_blank' href={project.github} className='mt-4  text-center bg-black text-white py-2 px-4 rounded-md transition duration-300 hover:bg-gray-950'><FaGithub /></a>
                                    <a target='_blank' href={project.hostLink} className='mt-4  text-center bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-900'><FaLink /></a>
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
