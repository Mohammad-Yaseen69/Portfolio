import { useSelector } from 'react-redux'
import { Section } from '../'
import {FaFacebook , FaInstagram , FaGithub , FaTwitter , FaLinkedin} from 'react-icons/fa'

const CTA = () => {
    const links = useSelector(state => state.info.links)
    return (
        <Section >
            <div className='relative  bg-black-gradient-2 flex max-md:flex-col max-md:gap-7 justify-between p-9 items-center w-full sm:h-[13rem] rounded-2xl mt-20 mb-36'>
                <div>
                    <h1 className='font-Code max-md:text-center whitespace-nowrap bg-gradient-to-r font-bold text-3xl xs:text-4xl text-transparent from-white to-gray-300 bg-clip-text'>Wanna Connect ?</h1>
                    <h2 className='font-Balsamiq max-md:text-center text-gray-200 font-semibold  xs:text-xl mt-4'>Hire me and let's embark on an incredible journey together!</h2>
                </div>

                <div className='flex'>
                    <a href={links.instagram} target='_blank'>
                        <button class="Btn flex-shrink-0 mr-6 BtnInsta">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                            <span class="text">Instagram</span>
                        </button>
                    </a>

                    <a href={links.linkedin} target='_blank'>
                        <button class="Btn BtnLinkedin flex-shrink-0 mr-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1.1em"
                                viewBox="0 0 512 512"
                                stroke-width="0"
                                fill="currentColor"
                                stroke="currentColor"
                                class="w-5 h-5 svgIcon"
                            >
                                <path
                                    d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                                ></path>
                            </svg>
                            <span class="text">Linkedn</span>
                        </button>
                    </a>
                </div>

                <div className="absolute w-[50%] h-[40%] top-10 pink__gradient -z-10 -right-36"></div>
            </div>
        </Section>
    )
}

export default CTA