import React from 'react'
import * as Icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Social() {
  return (
    <div className="fixed flex flex-col items-center space-y-6 pl-2 top-72  ">
      <a href="https://facebook.com/chioma.cynthian" target="_blank">
        <Icons.Facebook
          size="25px"
          className="text-white transition-colors duration-500 ease-linear hover:text-purple-500"
        />
      </a>
      <a href="https://instagram.com/neirusp" target="_blank">
        <Icons.Instagram
          size="25px"
          className="text-white transition-colors duration-500 ease-linear hover:text-purple-500"
        />
      </a>

      <a href="https://wa.me/+971558271567" target="_blank">
        <Icons.Whatsapp
          size="25px"
          className="text-white transition-colors duration-500 ease-linear hover:text-purple-500 "
        />
      </a>
      <a href="mailto:pchidi250@gmail.com">
        <Icons.Envelope
          size="25px"
          className="text-white transition-colors duration-500 ease-linear hover:text-purple-500 "
        />
      </a>
      <a href="tel:+971558271567">
        <Icons.Telephone
          size="25px"
          className="text-white transition-colors duration-500 ease-linear hover:text-purple-500 "
        />
      </a>
      <a href="https://github.com/donchi12">
        <Icons.Github
          size="25px"
          className="text-white transition-colors duration-500 ease-linear hover:text-purple-500 "
        />
      </a>
    </div>
  )
}

export default Social
