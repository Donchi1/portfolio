import React from 'react'
import PropTypes from 'prop-types'

function Tittle({ text }) {
  return (
    <>
      <h1 className="text-3xl mt-10 font-extrabold text-purple-700 capitalize text-center ">
        {text}
      </h1>

      <p className="bg-white h-1 w-16 mx-auto rounded-b-lg"></p>
    </>
  )
}

Tittle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tittle
