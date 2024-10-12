import React from 'react'
import Container from '../elements/Container'

const About = () => {
    return (
        <Container>
            <div className="w-full block md:flex items-center justify-between py-24 relative" id="about">
                <img src="/assets/images/profile.png" alt="Profile Image" className='w-72 h-96 rounded object-cover shadow-cust-shad-primary mb-10 md:mb-0 mr-0 md:mr-20' />
                <div>
                    <h2 className='text-primary font-bold mb-4 text-3xl md:text-4xl font-montserrat'>Who am I?</h2>
                    <p className='text-sm text-slate-100 leading-8 mb-7 font-roboto'>A graduate of a Vocational High School (SMK) majoring in Software Engineering, with over 3 years of learning
                        and gaining experience in web development. Familiar with front-end and back-end frameworks, including
                        Laravel, React with JavaScript and TypeScript, Tailwind, and MySQL for database management. My
                        experience includes database creation, API implementation, and front-end API integration.</p>
                    <div className="w-full font-bold flex items-center justify-start gap-5 flex-wrap font-roboto">
                        <div className="flex items-center justify-center text-center text-white rounded-md bg-bg-second bg-opacity-20 border border-bg-second px-6 md:px-12 py-2 shadow-cust-shad-primary text-xs md:text-sm">
                            Front-End Developer
                        </div>
                        <div className="flex items-center justify-center text-center text-white rounded-md bg-bg-second bg-opacity-20 border border-bg-second px-6 md:px-12 py-2 shadow-cust-shad-primary text-xs md:text-sm">
                            Back-End Developer
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About