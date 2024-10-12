import { useEffect, useState } from "react"

const UseScroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  const isScrolled = () => {
    if (window.scrollY > 300) {
        setIsVisible(true)
    } else {
        setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isScrolled)

    return () => window.removeEventListener('sroll', isScrolled)
  }, [])

  return {
    isVisible
  }
}

export default UseScroll