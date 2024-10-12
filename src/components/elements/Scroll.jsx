import { ArrowUpIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import UseScroll from '../../hooks/use/UseScroll'

const Scroll = () => {
    const {
        isVisible
    } = UseScroll()

  return (
    <>
        {isVisible && <Link to='#' className='bg-white w-10 h-10 z-50 flex items-center justify-center rounded-full text-bg-main fixed bottom-10 right-10 shadow-cust-shad-white'>
        <ArrowUpIcon className='size-4' />
    </Link>}
    </>
  )
}

export default Scroll