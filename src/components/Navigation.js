import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Navigation() {
  const [openNav, setOpenNav] = useState(false)

  const menuVariant = {
    opened: {
      top: 50,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    closed: {
      top: '-90vh',
      opacity: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.3,
      },
    },
  }

  const linkVariants = {
    opened: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: -100,
    },
  }

  return (
    <>
      <div className="h-20 pt-2 bg-gradient-to-r z-50 from-black bg-opacity-90 fixed w-full top-0 to-purple-700 flex justify-between items-center flex-wrap max-w-full ">
        <div className="ml-6 lg:ml-12 pb-3 flex">
          <img src="/assets/don1.jpg" className="rounded-full mr-2 w-8" />
          <h4 className="text-lg font-extrabold text-white">DONCHI</h4>
        </div>
        <div
          className="mr-8 text-purple-50 lg:hidden "
          onClick={() => setOpenNav(!openNav)}
        >
          <button className="bg-white transition-all ease-linear duration-500  focus:border-none rounded ring-offset-2 focus:outline-none ring-2 ring-purple-700 flex flex-col items-center justify-center p-1">
            <span className=" bg-black h-1.5 w-8  mt-1 text-white"></span>
            <span className=" bg-black h-1.5 w-8 mt-1 text-white"></span>
            <span className=" bg-black h-1.5 w-8 mt-1 mb-1 text-white"></span>
          </button>
        </div>
        <motion.div
          variants={menuVariant}
          animate={openNav ? 'opened' : 'closed'}
          initial={false}
          className={`w-full 
            
            lg:mr-16  lg:items-center lg:w-auto absolute top-12  lg:top-0 lg:relative lg:block transition-all duration-800 ease-in-out `}
        >
          <motion.ul className="text-sm divide-y divide-solid divide-gray-50 lg:divide-y-0 mt-7 lg:mt-0 lg:flex-grow pb-2 lg:pb-0 flex flex-col space-y-4 lg:space-y-0 pl-6 lg:pl-0 lg:space-x-6 lg:flex-row z-50 bg-gradient-to-r   from-black  to-purple-700 lg:from-transparent lg:to-transparent lg:bg-transparent ">
            <motion.a
              variants={linkVariants}
              href="#home"
              className="block focus:bg-purple-700 font-bold lg:text-lg text-white focus:text-green  hover:text-opacity-70 transition-colors duration-500 ease-in-out"
            >
              Home
            </motion.a>

            <motion.a
              variants={linkVariants}
              href="#about"
              className="block pt-3 lg:pt-0 font-bold lg:text-lg text-white  active:text-green-500 hover:text-opacity-70 transition-colors duration-500 ease-in-out"
            >
              About
            </motion.a>
            <motion.a
              variants={linkVariants}
              href="#services"
              className="block pt-3 lg:pt-0 font-bold lg:text-lg text-white  active:text-green-500 hover:text-opacity-70 transition-colors duration-500 ease-in-out"
            >
              Services
            </motion.a>

            <motion.a
              href="#portfolio"
              variants={linkVariants}
              className="block pt-3 lg:pt-0  font-bold  lg:text-lg text-white  active:text-green-500 hover:text-opacity-70 transition-colors duration-500 ease-in-out"
            >
              Portfolio
            </motion.a>

            <motion.a
              variants={linkVariants}
              href="#contact"
              className="block pt-3 lg:pt-0  lg:text-lg font-bold text-white  active:text-green-500 hover:text-opacity-70 transition-colors duration-500 ease-in-out"
            >
              Contact
            </motion.a>
          </motion.ul>
        </motion.div>
      </div>
    </>
  )
}

export default Navigation
