import { useSelector } from 'react-redux'
import { Section } from '../'
import CV from '../../assests/CV/CV.pdf'

const Hero = () => {
  const tagline = useSelector(state => state.info.info)
  return (
    <Section className="">
      <div className='relative flex items-center pb-48  justify-center h-screen  px-9'>
        <div className='flex flex-col gap-4 items-center'>
          <p className='font-Balsamiq italic text-blue-400'>Hello there I'm:</p>
          <h1 className='-mt-4 text-white whitespace-nowrap font-bold xs:font-extrabold text-4xl xs:text-5xl md:text-6xl'>Mohammad Yaseen</h1>
          <h3 className='text-gray-400  sm:w-[70%]  text-center xs:font-semibold text-lg md:text-xl'>{tagline?.heroTagline}</h3>
          <a href={CV} download="Mohammad_Yaseen_CV.pdf">  <button className='button max-xs:p-[0.3em]'>Download CV</button></a>
        </div>
      </div>
    </Section>
  )
}

export default Hero