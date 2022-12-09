import React from 'react'
import { HeartRegular } from '../Icons'
import "./Footer.scss"


const Footer = () => {

  const today = new Date()



  return (
    <footer>
      <div className="copyright">
         { today.getFullYear() } - James Ramputh
      </div>
      <div className="message">
        Made with <HeartRegular fill="#f0a433" height="20px" width="20px" /> using ReactJS
      </div>
    </footer>
  )
}

export { Footer }