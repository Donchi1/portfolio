import React, { useState } from 'react'
import Tittle from './Tittle'
import Button from '@material-tailwind/react/Button'

function Contact() {
  const [contacts, setContacts] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleContact = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //send to server

    setContacts({ ...contacts, name: '', email: '', message: '' })
  }
  return (
    <div
      className="container  bg-center bg-no-repeat bg-cover  pb-8 mx-auto "
      id="contact"
      style={{ backgroundImage: "url('/assets/bg1.jpeg')" }}
    >
      <Tittle text="Contact" />
      <div className="w-4/5  mt-12  h-auto mx-auto">
        <form onSubmit={handleSubmit} className=" min-w-max ">
          <div className="mt-4">
            <label htmlFor="name" className="font-bold uppercase text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={contacts.name}
              onChange={handleContact}
              placeholder="Your Name"
              required
              className="w-full  border-4 transition-colors duration-500 ease-linear rounded-md focus:outline-none hover:border-purple-700 focus:border-purple-700 focus:placeholder-white placeholder-black  pl-4 py-5  bg-gray-400 hover:bg-transparent focus:bg-transparent hover:text-white focus:text-white"
            />
          </div>
          <div className="mt-4 ">
            <label htmlFor="email" className="font-bold uppercase text-white ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={contacts.email}
              onChange={handleContact}
              placeholder="Your Email"
              required
              className="w-full border-4 transition-colors duration-500 ease-linear  rounded-md focus:outline-none hover:border-purple-700 focus:border-purple-700  pl-4  focus:placeholder-white py-5 placeholder-black hover:opacity-90 bg-gray-400 hover:bg-transparent focus:bg-transparent hover:text-white focus:text-white"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="msg" className="font-bold uppercase text-white">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              id="msg"
              placeholder="What i can do for you"
              value={contacts.message}
              required
              onChange={handleContact}
              className="w-full border-4 resize-none transition-colors duration-500 ease-linear focus:placeholder-white placeholder-black rounded-md focus:outline-none h-40 hover:border-purple-700 focus:border-purple-700  pl-4 py-3  hover:opacity-90 bg-gray-400 hover:bg-transparent focus:bg-transparent hover:text-white focus:text-white "
            />
          </div>
          <div>
            <Button
              ripple="light"
              size="lg"
              className="focus:outline-none  rounded-full px-8 mt-4 mb-4  bg-purple-600 hover:bg-purple-900 focus:bg-purple-900 transition-colors duration-500 ease-linear  hover:border-transparent  hover:shadow-new focus:shadow-new uppercase focus:text-white hover:text-white hover:outline-none  ring-purple-500 ring-2 "
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
