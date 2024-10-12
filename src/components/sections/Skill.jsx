import React from 'react'
import Container from '../elements/Container'

const Skill = () => {
    return (
        <Container>
            <div className="w-full py-16 md:py-0 mb-20">
                <h2 className='text-primary font-bold mb-5 text-3xl md:text-4xl text-center font-montserrat'>What I Can?</h2>
                <div className="w-full block md:flex items-center justify-center gap-5">
                    <div className="w-full md:w-1/2 p-5 rounded-sm bg-skill-gradient text-white border-t border-t-slate-400 border-l border-l-slate-400 font-roboto mb-5 z-20 relative">
                        <h3 className='text-white font-bold mb-3 text-lg md:text-xl'>Front-End</h3>
                        <p className='text-xs md:text-sm leading-6 mb-4'>I am able to implement designs into code to achieve the desired appearance. I am proficient in utilizing frontend technologies such as React.js, Next.js, TypeScript, Bootstrap, Tailwind CSS, and Shadcn UI.</p>
                        <div className="w-full flex items-center justify-start gap-3">
                            <img src="/assets/images/react.png" alt="Image React" className='w-8 md:w-12 object-cover' />
                            <img src="/assets/images/next.png" alt="Image Next" className='w-8 md:w-12 object-cover' />
                            <img src="/assets/images/ts.png" alt="Image Typescript" className='w-8 md:w-12 object-cover' />
                            <img src="/assets/images/tailwind.png" alt="Image Tailwind" className='w-8 md:w-12 object-cover' />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-5 rounded-sm bg-skill-gradient text-white border-t border-t-slate-400 border-l border-l-slate-400 font-roboto mb-5 z-20 relative">
                        <h3 className='text-white font-bold mb-3 text-lg md:text-xl'>Back-End</h3>
                        <p className='text-xs md:text-sm leading-6 mb-4'>I am capable of designing a database and crafting APIs to be utilized on the frontend, leveraging backend technologies that I master, including Laravel and MySQL.</p>
                        <div className="w-full flex items-center justify-start gap-3">
                            <img src="/assets/images/laravel.png" alt="Image Laravel" className='w-8 md:w-12 object-cover' />
                            <img src="/assets/images/mysql.png" alt="Image MySQL" className='w-8 md:w-12 object-cover' />
                        </div>
                    </div>
                </div>
                <img src="/assets/images/structure.png" alt="Image Structure" className='relative mx-auto -translate-y-6 object-cover z-10' />
            </div>
        </Container>
    )
}

export default Skill