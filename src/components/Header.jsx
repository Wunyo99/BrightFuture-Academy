import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Admissions", path: "/admissions" },
        { name: "Facilities", path: "/facilities" },
        { name: "Staff", path: "/staff" },
        { name: "Gallery", path: "/gallery" },
        { name: "News & Events", path: "/events" },
        { name: "Contact Us", path: "/contact" },

    ]

    const linkClass = ({ isActive }) => isActive ? 'text-red-800 font-bold' : 'text-black font-medium hover:text-red-800 transition duration-500'

    return (
        <>
            <header className='w-full bg-white shadow-2xl fixed z-100'>
                <div className="container mx-auto px-4">
                    <div className='flex items-center justify-between h-20'>
                        <Link to="/"
                            className="logo flex items-center gap-3">
                                <img src="./src/assets/logo2.png" className='w-18' />
                            <p className='hidden md:block text-2xl font-bold'>BrightFuture Academy</p>
                        </Link>
                        <nav className='hidden lg:flex space-x-6'>
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={linkClass}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                        <button className='lg:hidden text-black' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className='border-t px-6'>
                            <nav className='flex flex-col gap-2 py-4'>
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={linkClass}
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>


            </header>
        </>

    )
}

export default Header