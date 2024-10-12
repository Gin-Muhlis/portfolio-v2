import React, { useState } from 'react'

const UseNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return {
        toggleMenu,
        isOpen,
        setIsOpen
    }
}

export default UseNavbar