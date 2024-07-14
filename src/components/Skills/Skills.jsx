import React, { useEffect } from 'react';
import { Section } from '../';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';

const Skills = () => {
    const skillCategories = useSelector(state => state.info.skillCategories)

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

                <div className='flex flex-wrap w-full justify-center gap-8'>
                    {skillCategories.map((skillCategory, index) => (
                        <div key={index} className='skill-card w-full xs:w-[450px] bg-gray-900 border border-gray-700 rounded-lg py-8 xs:px-6'>
                            <h2 className='font-bold text-white text-2xl mb-4 text-center'>{skillCategory.name}</h2>
                            <div className='flex flex-wrap gap-3 justify-center items-center'>
                                {skillCategory.skills.map((skillItem, skillIndex) => (
                                    <div key={skillIndex} className='skill-item flex items-center gap-2 p-[5px] xs:p-2 bg-gray-700 border border-gray-400 rounded'>
                                        <img src={skillItem.icon?.publicUrl} alt={skillItem.skill} className='w-6 h-6 xs:w-8 xs:h-8 object-contain' />
                                        <p className='font-semibold xs:font-bold text-white'>{skillItem.skill}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
};

export default Skills;
