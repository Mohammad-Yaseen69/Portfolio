import {Section} from '../'
import CV from '../../assests/CV/CV.pdf'

const Hero = () => {
  return (
    <Section className="">
        <div className='relative flex items-center pb-48  justify-center h-screen  px-9'>
            <div className='flex flex-col gap-4 items-center'>
                <p className='font-Balsamiq italic text-blue-400'>Hello there I'm:</p>
                <h1 className='-mt-4 text-white whitespace-nowrap font-bold xs:font-extrabold text-4xl xs:text-5xl md:text-6xl'>Mohammad Yaseen</h1>
                <h3 className='text-gray-400  sm:w-[70%]  text-center xs:font-semibold text-lg md:text-xl'>A Passionate web developer and programmer. Skilled in crafting frontend</h3>
                <button className='button max-xs:p-[0.3em]'><a href={CV} download="Mohammad_Yaseen_CV.pdf">Download CV</a> </button>
            </div>
        </div>
    </Section>
  )
}

export default Hero