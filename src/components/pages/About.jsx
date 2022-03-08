import React from 'react'

function About() {
  return (
    <div className='text-white'>
    <h1 className='text-6xl mb-4'>Github Finder</h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details.
    </p>
    <p className='text-lg text-gray-400'>
      Version <span className=''>1.0.0</span>
    </p>
    <p className='text-lg text-gray-400'>
      Layout By:
      <a className='' href='https://www.facebook.com/profile.php?id=100068589054337' target="_blank">
        Ayoub ELHAOUSSI
      </a>
    </p>
  </div>
  )
}

export default About