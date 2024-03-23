import {Section} from '../'

const Hero = () => {
  return (
    <Section>
        <div className='relative h-[90vh] sm:h-[70vh] pt-28 sm:pt-14 px-9'>
            <div className='flex flex-col gap-4 items-center'>
                <p className='font-Balsamiq italic text-blue-400'>Hello there I'm:</p>
                <h1 className='-mt-4 text-white whitespace-nowrap font-bold xs:font-extrabold text-3xl xs:text-5xl md:text-6xl'>Mohammad Yaseen</h1>
                <h3 className='text-gray-400  sm:w-[70%] md:w-1/2 text-center xs:font-semibold text-sm xs:text-lg md:text-xl'>A Passionate web developer and programmer. Skilled in crafting frontend</h3>
                <button className='button max-xs:p-[0.5em]'>Download CV</button>
            </div>
        </div>
    </Section>
  )
}

export default Hero