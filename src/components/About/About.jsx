import { Section } from '../'
import { personalInfo } from '../../constants'

const About = () => {
    return (
        <Section id="about">
            <div className='flex max-md:flex-col items-start  h-full  relative my-36'>

                <div className='w-full md:w-1/2 max-md:order-2 max-xs:my-16 max-md:my-24'>
                    <h1 className='font-bold font-Balsamiq uppercase text-start text-white text-4xl my-6'>Personal Info:</h1>
                    {personalInfo.map(info => (
                        <div className='py-6 w-full sm:w-[70%] border-b border-dashed border-gray-300'>
                            <span className='font-extrabold text-white text-2xl'>{info.title} :</span>
                            <span className='ml-5 text-gray-200 text-2xl  font-semibold'>{info.value}</span>
                        </div>
                    ))}
                </div>

                <div className='md:w-1/2 max-md:order-1'>
                    <div className='md:translate-y-20'>
                        <h1 className='font-bold font-Balsamiq uppercase text-start text-white text-4xl mb-8'>About me</h1>
                        <p className='text-gray-300  font-Code text-start  xs:text-xl'>
                            Hey there! I'm a self-taught developer deeply passionate about frontend development. With a knack for crafting captivating user interfaces, I'm now venturing into backend development. Currently, I'm immersing myself in Web 3 technologies and Solidity, aiming to innovate in decentralized applications. As a fresher in the field, I'm excited to learn and grow alongside fellow developers. Join me as I explore new horizons and push the boundaries of technology.
                        </p>
                    </div>
                </div>
                <div className="absolute w-[50%] h-[40%] bottom-0 blue__gradient z-0 -left-28 top-0"></div>
            </div>
        </Section>
    )
}

export default About