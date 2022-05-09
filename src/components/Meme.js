import React, { useState, useEffect } from 'react'
import { FaRandom } from 'react-icons/fa'

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1g8my4.jpg',
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  })

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url

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
        <button className='form--button' onClick={getMemeImage}>
          Random Meme <FaRandom />
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} alt={meme.name} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}
export default Meme
