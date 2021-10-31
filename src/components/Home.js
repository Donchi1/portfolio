import React, { useEffect, useState } from 'react'

import Hero from './Hero'
import Social from './Social'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className=" h-screen max-w-screen-2xl top-0 w-full " id="home">
        <div
          style={{ backgroundImage: "url('/assets/bg.jpeg')" }}
          className="bg-no-repeat bg-local  bg-center bg-cover h-full pb-4 "
        >
          <Social />
          <Hero />
        </div>
        <About />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
