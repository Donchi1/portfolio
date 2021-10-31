import React, { useState } from 'react'
import Button from '@material-tailwind/react/Button'
import { AnimatePresence, motion } from 'framer-motion'

function Hero() {
  const [openCv, setOpenCv] = useState(false)
  return (
    <>
      <div className="container mx-auto  space-x-6 pt-28 lg:pt-80 lg:pb-16 min-w-md h-auto lg:h-4/6 flex items-center flex-col lg:flex-row justify-between">
        <div className="text-center ">
          <h1 className="font-bold uppercase text-3xl lg:text-4xl text-purple-500 ">
            My name is Donchi am a Front-end web Developer{' '}
          </h1>
          <p className="  font-medium italic tracking-wider text-lg mt-5 text-white ">
            Love Learning new thing, always ready to work with others.
          </p>
          <div className="flex items-center space-x-6 justify-center mt-10">
            <Button
              ripple="light"
              rounded
              size="lg"
              onClick={() => window.location.assign('#contact')}
              className="bg-purple-500 hover:shadow-new focus:shadow-new   hover:bg-purple-600  focus:bg-purple-600"
            >
              Hire Me
            </Button>
            <Button
              onClick={() => setOpenCv((prev) => !prev)}
              ripple="light"
              size="lg"
              rounded
              className="bg-transparent inline-block hover:border-transparent  hover:shadow-new focus:shadow-new ring-2 ring-purple-500 hover:ring-0 focus:ring-0  hover:bg-purple-500  focus:bg-purple-500"
            >
              Get Cv
            </Button>
          </div>
        </div>
        <div className=" w-full   mt-4 flex items-center  justify-center lg:mt-14 ">
          <img
            src="/assets/don1.jpg"
            alt="My Picture"
            className="flex-shrink-0  border-8 z-20 hover:shadow-lg 
                border-transparent  w-3/5 h-5/6   rounded-full  "
          />
        </div>
      </div>
      {openCv && (
        <div className="w-screen  h-screen right-0 left-0 overflow-y-auto bottom-0 fixed top-0 bg-black bg-opacity-80 z-50 ">
          <div className="w-screen  absolute h-screen ">
            <div className=" fade mt-16 container mx-auto lg:w-3/5  bg-white relative overflow-x-hidden overflow-y-visible">
              <span
                className="bg-gray-400 lg:right-16 focus:bg-red-500 mt-4 right-12 hover:bg-red-500 text-white cursor-pointer p-4 absolute "
                onClick={() => setOpenCv(false)}
              >
                X
              </span>
              <div className=" text-center text-black pt-14">
                <img
                  src="/assets/cv.png"
                  alt="my_cv"
                  className="h-full lg:h-96 "
                />

                <div className="border-purple-500  border-b-2 w-full h-2"></div>
                <div className="flex space-x-4 float-right pb-5 pt-5 bg-white w-full pl-4">
                  <Button
                    onClick={() => setOpenCv(false)}
                    ripple="light"
                    color="red"
                  >
                    Close
                  </Button>
                  <a
                    href="/assets/cv.pdf"
                    download="cv.pdf"
                    className="bg-purple-500 rounded-lg text-center focus:bg-purple-700 hover:shadow-new hover:bg-purple-700 transition-colors duration-500 ease-linear  text-white text-sm font-medium  uppercase p-2"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
