import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full relative h-full max-w-5xl mx-auto px-5'>
        {children}
    </div>
  )
}

export default Container