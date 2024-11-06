import React from 'react'
import './Newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className='input-subscribe'>
            <input type="email" name="" id="" placeholder='Your Email Id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter