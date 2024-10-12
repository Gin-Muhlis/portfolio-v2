import React from 'react'
import Container from '../elements/Container'

const Contact = () => {
    return (
        <Container>
            <div className="w-full block md:flex items-center justify-between gap-10 py-24 " id="contact">
                <div className='w-full'>
                    <h2 className='text-primary font-bold mb-5 text-3xl md:text-4xl font-montserrat'>Get in Touch</h2>
                    <div className="mb-8 font-roboto">
                        <h3 className='text-white font-bold text-lg mb-1'>WhatsApp:</h3>
                        <a href='https://wa.me/62895616007300' target='_blank' className='flex items-centerjustify-start gap-2'>
                            <img src="/assets/images/wa.png" alt="WA Image" className='w-5 object-cover' />
                            <span className='text-white text-sm'>+62 895616007300</span>
                        </a>
                    </div>
                    <div className="mb-8 font-roboto">
                        <h3 className='text-white font-bold text-lg mb-1'>Instagram:</h3>
                        <a href='https://www.instagram.com/gin2_nm' target='_blank' className='flex items-centerjustify-start gap-2'>
                            <img src="/assets/images/instagram.png" alt="WA Image" className='w-5 object-cover' />
                            <span className='text-white text-sm'>@gin2_nm</span>
                        </a>
                    </div>
                    <div className="mb-8 font-roboto">
                        <h3 className='text-white font-bold text-lg mb-1'>Linkedin:</h3>
                        <a href='https://www.linkedin.com/in/gin-muhlis/' target='_blank' className='flex items-centerjustify-start gap-2'>
                            <img src="/assets/images/linkedin.png" alt="WA Image" className='w-5 object-cover' />
                            <span className='text-white text-sm'>Gin Muhlis</span>
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="w-full px-5 py-10 rounded-sm bg-skill-gradient text-white border-t border-t-slate-400 border-l border-l-slate-400 font-roboto mb-5 flex items-center justify-center flex-col gap-3">
                        <img src="/assets/images/gmail.png" alt="Email Image" className='w-10 object-cover' />
                        <h3 className='text-white font-roboto font-bold text-lg'>
                            <a href="mailto:ginmuhlis@gmail.com" target='_blank'>ginmuhlis@gmail.com</a>
                        </h3>
                    </div>
                    <div className="w-full px-5 py-10 rounded-sm bg-skill-gradient text-white border-t border-t-slate-400 border-l border-l-slate-400 font-roboto flex items-center justify-center flex-col gap-3">
                        <img src="/assets/images/github.png" alt="Email Image" className='w-10 object-cover' />
                        <h3 className='text-white font-roboto font-bold text-lg'>
                            <a href="https://github.com/Gin-Muhlis" target='_blank'>Gin-Muhlis</a>
                        </h3>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact