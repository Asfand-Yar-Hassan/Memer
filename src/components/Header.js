import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <img
        src='../images/troll-face.jpg'
        alt='troll-face.png'
        className='header--image'
      />
      <h2 className='header--title'>Memer</h2>
      <h2 className='header--info'>Random Meme Generator</h2>
    </header>
  )
}
export default Header
