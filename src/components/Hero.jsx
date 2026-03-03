import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroContent">
        <div className="bubble">
          <span>Front-End Engineering</span> | <span>UI Architecture</span>
        </div>

        <h1>JAMES RAMPUTH</h1>
        <p>Front End Software Engineer</p>
      </div>

      <div className="heroImage" aria-hidden="true"></div>
    </section>
  )
}

export { Hero }
