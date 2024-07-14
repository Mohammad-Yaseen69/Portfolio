import { useSelector } from 'react-redux'
import { Section } from '../'
import CV from '../../assests/CV/CV.pdf'
import gsap from "gsap"
import { useEffect, useRef } from "react";

const Hero = () => {
  const tagline = useSelector(state => state.info.info)
  const completed = useSelector(state => state.Animation.completed)
  const ref = useRef(null)

  console.log(completed)

  useEffect(() => {
    if (completed) {
      gsap.to(".content", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
      })
    }
  }, [completed])


  return (
    <Section className="">
      <div ref={ref} className='relative content flex items-center opacity-0 pb-40 md:pb-56  justify-center h-screen  px-9'>
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