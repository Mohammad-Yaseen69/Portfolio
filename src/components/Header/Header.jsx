import { Section } from '../'
import { navLinks } from '../../constants'
import Logo from '../../assests/logo.png'

const Header = () => {
    console.log(Logo)
    return (
        <Section>
            <div className='flex items-center justify-between '>
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="size-24 md:size-36 cursor-pointer"
                    />
                </div>

                <div className="flex space-x-4">
                    {navLinks.map(link => (
                        <h1 
                            key={link.id} 
                            href={link.url} 
                            className="text-white font-Code font-bold cursor-pointer text:lg md:text-xl hover:text-gray-400 hover:scale-105 transition duration-300"
                        >
                            {link.name}
                        </h1>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Header

