import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({type, text, isLink, path}) => {
  return (
    <button className={`outline-none border-none rounded font-roboto px-7 py-2 md:px-8 md:py-3 text-sm font-bold  ${type == 'primary' ? 'bg-primary text-black shadow-cust-shad-primary' : 'bg-bg-second text-white'}`}>
      {isLink ? <Link to={path}>{text}</Link> : text}
    </button>
  )
}

export default Button