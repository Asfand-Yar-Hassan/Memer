import React, { useState } from 'react'
import {FaRandom} from 
import data from '../data'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  })
  const [allMemeImages, setAllMemeImages] = useState(data)

  const getMemeImage = () => {
    const memeArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className='form'>
        
        <input
          type='text'
          placeholder='Top Text'
          className='form--input'
          value={meme.topText}
          name='topText'
          onChange={handleChange}
        />
        
        <input
          type='text'
          placeholder='Bottom Text'
          className='form--input'
          value={meme.bottomText}
          name='bottomText'
          onChange={handleChange}
        />
       <button className='form--button' onClick={getMemeImage}>Random Meme </button>
      </div>
      
    </main>
  )
}
