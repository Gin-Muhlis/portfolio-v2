import React from 'react'
import Container from '../elements/Container'
import EachUtils from '../../utils/EachUtils'
import DATA_PORTFOLIO from '../../data/portfolio.json'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <Container>
            <div className="w-full py-24">
                <h2 className='text-primary font-bold mb-5 text-3xl md:text-4xl text-center font-montserrat'>What Have I Made?</h2>
                <EachUtils dataList={DATA_PORTFOLIO} render={(item, index) => <a target='_blank' href={item.link_github} className={`w-full block md:flex items-center justify-center ${index != DATA_PORTFOLIO.length - 1 ? 'mb-20' : ''}`} key={index}>
                    <div className='font-roboto mb-3'>
                        <h3 className={`font-bold mb-2 text-white text-2xl relative z-20 ${(index + 1) % 2 == 0 ? 'md:-translate-x-5 md:text-end' : 'md:translate-x-5'}`}>{item.title}</h3>
                        <div className={`bg-white bg-opacity-20 backdrop-blur-md rounded-md text-white p-4 z-20 relative ${(index + 1) % 2 == 0 ? 'md:-translate-x-5' : 'md:translate-x-5'}`}>
                            <p className='text-sm'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    <img src={item.image} alt="Image Portfolio" className={`w-full md:w-1/2 h-60 z-10 relative rounded-md object-cover  ${(index + 1) % 2 == 0 ? 'md:-order-1 md:translate-x-5' : 'order-1 md:-translate-x-5'}`} />
                </a>} />
            </div>
        </Container>
    )
}

export default Portfolio