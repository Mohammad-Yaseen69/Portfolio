import React, { useEffect } from 'react';
import { Section } from '../';
import { skillSet } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('.skill-card', {
            opacity: 1,
            duration: 0.3,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 70%', // Adjusted start position
                end: 'bottom 20%', // Adjusted end position
                toggleActions: 'play none none none',
            }
        });
    }, []);

    return (
        <Section id="skills">
            <div className='w-full h-full  skillset-section mb-20'>
                <h1 className='font-bold font-Balsamiq uppercase text-center text-white text-6xl mb-8'>Skillset</h1>

                <div className='flex flex-wrap  w-full justify-center gap-4'>

                    {skillSet.map((skill, index) => (
                        <div id={`box${index + 1}`} key={index} className='opacity-0 hover:scale-105 transition-all duration-200 bg-gray-800 rounded-lg p-2 md:p-4 text-center w-[40%] ss:w-[30%] mb-4 skill-card'>
                            <img src={skill.img} alt={skill.title} className={`mx-auto ${skill.title == "App Write" ? " w-full sm:w-full" : ""} size-12 sm:size-24 object-contain mb-4`} />
                            <h2 className={`text-white uppercase sm:text-lg font-semibold`}>{skill.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
