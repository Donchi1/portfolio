import React from 'react'
import Progress from '@material-tailwind/react/Progress'
import Button from '@material-tailwind/react/Button'
import Tittle from './Tittle'

function About() {
  return (
    <>
      <Tittle text="About Me" />
      <div className="container mx-auto w-auto mt-8 lg:w-10/12" id="about">
        <div className=" flex flex-col lg:flex-row  justify-around items-center">
          <div className="mt-8 lg:pt-10 max-w-sm lg:max-w-3xl order-2 lg:order-none">
            <img
              src="/assets/don1.jpg"
              alt="another pic"
              className=" rounded-full h-96 "
            />
          </div>
          <div className="lg:w-2/5 w-4/5 mt-20 lg:mt-5 ">
            <h4 className="text-xl font-extrabold text-purple-700 capitalize text-center ">
              Intro
            </h4>
            <div className="space-y-2 text-center">
              <p className="text-white font-medium italic tracking-wider text-lg">
                My name is Donchi Neirus O. Am a citizen of Nigeria. Am a single
                self taught web-developer living in Dubai.
              </p>
              <p className="text-white font-medium italic tracking-wider text-lg ">
                Am a front end web developer using the best tools, strategies
                and tecnologies creating cross-platform and mobile friendly
                websites.
              </p>
              <p className="text-white font-medium italic tracking-wider text-lg ">
                I have learnt to utilize the knowledge of the tecnologies to
                create a very nice website. Am not an expert but learning to
                become one. My target is to become an expert in MERN stack
                Development. Everyday learning and working on projects is my
                routen.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row  justify-around items-center">
          <div className="lg:w-2/5 w-4/5 mt-20 lg:mt-8 space-y-6 text-center">
            <h4 className="text-xl font-extrabold text-purple-700 capitalize  ">
              Experience
            </h4>
            <div className="space-y-2">
              <p className="text-white font-medium italic tracking-wider text-lg">
                One year experience with the front end technologies. Working
                remotely making a responsive and scaleable website.
              </p>
              <p className="text-white font-medium italic tracking-wider text-lg ">
                Working on already made projects, maintaining sites to suite and
                handle clients issues. Creating mobile cross-platform app in
                React, with react native and other associate tecnologies.
              </p>
            </div>

            <Button
              ripple="light"
              size="lg"
              onClick={() => window.location.assign('#contact')}
              className="focus:outline-none rounded-full mx-auto bg-transparent hover:bg-purple-700 focus:bg-purple-700 transition-colors duration-500 ease-linear  hover:border-transparent  hover:shadow-new focus:shadow-new uppercase text-white hover:outline-none  ring-purple-500 ring-2 "
            >
              Lets Talk
            </Button>
          </div>
          <div className="lg:w-2/5 w-4/5 mt-20 lg:mt-0 space-y-6 text-center pb-4">
            <h4 className="text-xl font-extrabold text-purple-700 capitalize mt-6 ">
              Technologies
            </h4>
            <div className="text-left">
              <span className="text-white font-medium italic tracking-wider text-lg">
                Html
              </span>

              <Progress color="purple" value="70" />
              <span className="text-white font-medium italic tracking-wider text-lg">
                Css
              </span>
              <Progress color="purple" value="65" />
              <span className="text-white font-medium italic tracking-wider text-lg">
                Javascript
              </span>

              <Progress color="purple" value="90" />
              <span className="text-white font-medium italic tracking-wider text-lg">
                React
              </span>
              <Progress color="purple" value="90" />
              <span className="text-white font-medium italic tracking-wider text-lg">
                React Native
              </span>

              <Progress color="purple" value="70" />
              <span className="text-white transform  font-medium italic tracking-wider text-lg">
                Taiwindcss
              </span>

              <Progress color="purple" value="70" />
              <span className="text-white font-medium italic tracking-wider text-lg">
                Firebase
              </span>

              <Progress color="purple" value="60" />
              <span className="text-white font-medium italic tracking-wider text-lg">
                Express-js
              </span>

              <Progress color="purple" value="50" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
