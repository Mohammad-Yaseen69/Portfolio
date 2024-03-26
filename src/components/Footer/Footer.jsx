import { socialMedia } from '../../constants'

const Footer = () => {
    console.log(socialMedia)
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
