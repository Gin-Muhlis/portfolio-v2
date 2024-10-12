import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full relative h-full max-w-5xl mx-auto p-5 md:-0'>
        {children}
    </div>
  )
}

export default Container