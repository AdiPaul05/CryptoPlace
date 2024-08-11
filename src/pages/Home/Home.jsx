import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the worl's largest cryptocurreny Marketplace</p>
        <form>
            <input type = 'text'placeholder='Search Crypto...'/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Home 