import React from 'react'
import { Linkedin, Github } from '../Icons'
import "./Header.scss"

const Header = () => {

  return (
    <header className="on-load">

      <div className="header-overlay">
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jamesramputh" title="My LinkedIn">LinkedIn<Linkedin width="25px" height="25px" /></a>
          <a target="_blank" rel="noreferrer" href="https://github.com/jamesramputh" title="My Github">Github<Github width="25px" height="25px" /></a>
        </div>
      </div>

    </header>
  )
}

export { Header }