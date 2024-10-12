import React from 'react'
import Container from '../elements/Container'
import { HashLink as Link } from 'react-router-hash-link'

const Hero = () => {
    return (
        <Container>
            <div className="hero w-full block md:flex items-center justify-between gap-10 py-10 relative" id='hero'>
                
                <div className='mb-16 md:mb-16'>
                    <span className="text-slate-300 inline-block mb-1 font-roboto">Hi, I'm Gin Gin</span>
                    <h1 className='text-primary font-raleway text-6xl font-bold shadow-text-primary'>Full Stack</h1>
                    <h1 className='text-white font-raleway text-6xl font-bold mb-5'>Web Developer</h1>
                    <p className='font-roboto mb-5 text-white'>I'm creating a <span className="text-primary font-bold">program</span>, not hacking social media accounts.</p>
                    <button className='outline-none border-none rounded font-roboto px-7 py-2 md:px-8 md:py-3 text-sm font-bold bg-primary text-black shadow-cust-shad-primary'>
                        <Link to={'#about'}>Explore More</Link>
                    </button>
                </div>
                <div className='flex-1 flex items-center justify-center md:justify-end'>
                    <div className="relative md:-translate-y-16">
                        <img src="/assets/images/me.png" alt="Image Me" className='object-cover w-44 md:w-full' />
                        <img src="/assets/images/html.png" alt="Image Me" className='object-cover absolute -left-20 bottom-12 w-12 md:w-16' />
                        <img src="/assets/images/css.png" alt="Image Me" className='object-cover absolute -left-16 -bottom-16 w-12 md:w-16 ' />
                        <img src="/assets/images/js.png" alt="Image Me" className='object-cover absolute left-16 -bottom-20 w-12 md:w-16' />
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Hero