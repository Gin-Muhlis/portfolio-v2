import React from 'react'
import Container from './Container'
import { HashLink as Link } from 'react-router-hash-link'
import EachUtils from '../../utils/EachUtils'
import DATA_NAVLIST from '../../data/navbar.json'
import UseNavbar from '../../hooks/use/UseNavbar'

const Navbar = () => {
    const {
        toggleMenu,
        isOpen,
        setIsOpen
    } = UseNavbar()

    return (
        <div className='w-full bg-bg-second h-16'>
            <Container>
                <div className='flex justify-between items-center h-full gap-5'>
                    {/* Logo */}
                    <Link to={'/'}>
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo Gin Gin"
                            className='object-cover w-20 md:w-24'
                        />
                    </Link>

                    {/* Burger Icon for medium screens */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {/* Burger icon */}
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Full navigation (hidden on small screens) */}
                    <div className="hidden md:flex flex-1 justify-end items-center">
                        <ul className="flex items-center justify-end gap-10">
                            <EachUtils
                                dataList={DATA_NAVLIST}
                                render={(item, index) => (
                                    <li key={index}>
                                        <Link className="font-roboto text-white" to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )}
                            />
                        </ul>
                    </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="absolute top-16 left-0 w-full transition duration-500 bg-bg-second z-50 md:hidden">
                            <ul className="flex flex-col items-center gap-5 p-5">
                                <EachUtils
                                    dataList={DATA_NAVLIST}
                                    render={(item, index) => (
                                        <li key={index}>
                                            <Link
                                                smooth
                                                className="font-roboto text-white block"
                                                to='/#about'
                                                onClick={() => setIsOpen(false)} // Close menu on link click
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )}
                                />
                            </ul>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Navbar