import {FaFacebook , FaInstagram , FaGithub , FaTwitter , FaLinkedin} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Footer = () => {
    const links = useSelector(state => state.info.links)

    const socialMedia = [
        { name: 'Facebook', link: links.facebook, icon: FaFacebook },
        { name: 'Instagram', link: links.instagram, icon: FaInstagram },
        { name: 'Github', link: links.github, icon: FaGithub },
        { name: 'Twitter', link: links.twitter, icon: FaTwitter },
        { name: 'Linkedin', link: links.linkedin, icon: FaLinkedin }
    ]
    return (
        <div className='bg-black mt-32 flex items-center justify-center p-12 w-full relative'>
            <div className="flex justify-center items-center -translate-y-6 space-x-6">
                {socialMedia.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center text-white hover:text-gray-400 rounded-full p-4 bg-[#04152D] w-12 h-12">
                        <social.icon className='size-4' />
                    </a>

                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full border-t-[1px] border-gray-700 bg-black py-4 text-white text-center">
                &copy; 2024 Mohammad-Yaseen. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
