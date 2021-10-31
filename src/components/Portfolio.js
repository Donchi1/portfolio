import React, { useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'react-bootstrap-icons'
import Tittle from './Tittle'
import Button from '@material-tailwind/react/Button'

function Portfolio() {
  const [gallery, setGallery] = useState({
    show: false,
    title: '',
    img: '',
    idx: 0,
    description: '',
    fade: true,
  })

  const imgsData = [
    {
      id: new Date().toDateString() + Math.random().toString(),
      img: '/assets/chatapp.png',
      title: 'Chat App',
      link: 'project link',
      description:
        'This is a chat mobile application created with react and firebase for a cool chat with cross-platform compatibility',
    },
    {
      id: new Date().toDateString() + Math.random().toString(),
      img: '/assets/musicky.png',
      title: ' Music Site',
      link: 'project link',
      description:
        'A simple music app created for storing, listening and downloading musics. This site is created with react and other cool libraries.',
    },
    {
      id: new Date().toDateString() + Math.random().toString(),
      img: '/assets/newsapp.png',
      title: ' News App',
      link: 'project link',
      description:
        'This is a news app for getting simple news informations through api.This is created with react (react-native) in expo and other cool libraries.',
    },
    {
      id: new Date().toDateString() + Math.random().toString(),
      img: '/assets/crypto.png',
      title: 'Crypto site',
      link: 'project link',
      description:
        'A cryptocurrency website created with react and firebase, for your crypto trading and other cryptocurrency trading',
    },
    {
      id: new Date().toDateString() + Math.random().toString(),
      img: '/assets/ecomapp.png',
      title: 'Ecommerce site',
      link: 'project link',
      description:
        'A simple ecommerce wesite created with React, simple dommy data with paypal payment integration',
    },
  ]
  const imgUrl = [
    '/assets/chatapp.png',
    '/assets/musicky.png',
    '/assets/newsapp.png',
    '/assets/crypto.png',
    '/assets/ecomapp.png',
  ]

  const handleGallery = (data, idx) => {
    const { title, img, description } = data
    setGallery({ ...gallery, title, show: true, img, idx, description })
  }

  const handleMove = (idx) => {
    var currentIdx = imgUrl.indexOf(gallery.img)

    currentIdx += idx
    if (currentIdx === imgUrl.length) {
      currentIdx = 0
    }
    const info = imgsData.filter((each) => each)
    const data = info[currentIdx]

    setGallery({
      ...gallery,
      img: imgUrl[currentIdx],
      description: data.description,
      title: data.title,
    })
  }
  const handleMove1 = () => {
    var currentIdx = imgUrl.indexOf(gallery.img)

    currentIdx -= 1

    if (currentIdx < 0) {
      currentIdx = imgUrl.length - 1
    }
    const info = imgsData.filter((each) => each)
    const data = info[currentIdx]

    setGallery({
      ...gallery,
      img: imgUrl[currentIdx],
      description: data.description,
      title: data.title,
    })
  }
  return (
    <div className="container mx-auto w-4/5 pb-8" id="portfolio">
      <Tittle text="Portfolio" />
      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
        {imgsData.map((each, idx) => (
          <div key={each.id}>
            <h4 className="text-xl font-extrabold text-purple-700 capitalize mt-6 ">
              {each.title}
            </h4>
            <img
              src={each.img}
              alt="projects simple"
              className="cursor-pointer transform duration-500 ease-linear hover:scale-105 w-full lg:w-80 h-80"
              onClick={() => handleGallery(each, idx)}
            />
          </div>
        ))}
      </div>
      {gallery.show && (
        <div className="w-screen h-screen right-0 left-0 overflow-y-auto bottom-0 fixed top-0 bg-black z-50 ">
          <div className="w-screen  absolute h-screen">
            <div className="relative">
              <h4 className="mt-20 pl-8 text-lg text-white">
                {gallery.title}

                <span
                  className="bg-gray-400 lg:right-28 focus:bg-red-500 right-12 hover:bg-red-500 text-white cursor-pointer p-4 absolute "
                  onClick={() => setGallery({ ...gallery, show: false })}
                >
                  X
                </span>
              </h4>
            </div>
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className=" mt-16  container w-4/5 mx-auto relative"
            >
              {gallery.img && (
                <img
                  src={gallery.img}
                  alt="my works"
                  className="w-4/5
                  lg:w-3/5 h-96 max-w-full mx-auto"
                />
              )}
              {gallery.description && (
                <p className="text-center  text-white pb-6 lg:pb-0">
                  {gallery.description}
                </p>
              )}
              <div>
                <button
                  onClick={() => handleMove1()}
                  className="text-white absolute  px-4 py-4 ring-2 ring-white hover:ouline-none focus:outline-none focus:bg-purple-500 top-40 left-4 lg:left-20  border-0 bg-purple-500 hover:bg-transparent"
                >
                  <Icons.ArrowLeft size="20px" />
                </button>
                <button
                  onClick={() => handleMove(1)}
                  className="text-white absolute right-4 top-40  px-4 py-4 ring-2 ring-white hover:ouline-none focus:outline-none focus:bg-purple-500   border-0 bg-purple-500 hover:bg-transparent"
                >
                  <Icons.ArrowRight size="20px" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
