import React, { useEffect, useState } from 'react'
import * as Icons from 'react-bootstrap-icons'

function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY || e.currentTarget.pageYOffset > 100) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    })
    return window.removeEventListener('scroll', () => {
      setShowScroll(false)
    })
  }, [])
  return (
    <footer className="group">
      <div className=" text-center pb-4">
        <p className="mb-0 text-white text-lg ">
          © {new Date().getFullYear()}
          <a
            href="#"
            className="group-hover:underline group-hover:text-blue-500"
          >
            {' '}
            Donchi
          </a>{' '}
          All Rights Reserved
        </p>
      </div>
      {showScroll && (
        <div className="fixed right-6 top fade transition-all duration-500 ease-linear">
          <a
            href="#"
            className="text-white  inline-block transition-all ease-linear duration-500 rounded-full bg-purple-500 hover:bg-opacity-70 p-4"
          >
            <Icons.ArrowUp size="20px" className="font-extrabold" />
          </a>
        </div>
      )}
    </footer>
  )
}

export default Footer
