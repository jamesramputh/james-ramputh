import './App.scss';
import './scss/Loader.scss'
import { TypeAnimation } from 'react-type-animation';

import { Header, Footer } from './components'
import { CodeCommitSolid, LocationDotSolid } from './Icons';

const App = () => {

  return (
    <div className="App">

    <div className="full-page-container">

      <div className="left-side">

        <div className="skills">
          <div className="large-folding-cube">
            <div className="skill-box">
              <CodeCommitSolid fill="#FFFFFF" height="40px" width="40px" />
            </div>
          </div>
        </div>

        <h1>Front End Software<br/> Engineer</h1>

        <h2>James Ramputh</h2>

        <div className="loader">
          <div className="sk-folding-cube">
            <div className="jr-logo">JR</div>
          </div>
        </div>

      </div>

      <div className="right-side">
        <div className="right-side-overlay">
          <div className="right-side-content">
            <h1>Front End Software<br/> Engineer</h1>

            <h2>James Ramputh</h2>

            <div className="loader">
              <div className="sk-folding-cube">
                <div className="jr-logo">JR</div>
              </div>
            </div>
          </div>
 
        </div>
      </div>

    </div>

    <Header />

    <div className="full-page-container move-up">
      <div className="left-side-2">
        <div className="left-side-2-overlay"></div>
      </div>

      <div className="right-side-2">
        <h3>About Me</h3>

        <p>I've been doing Front-End Web development for 10 years now.</p>

        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
          `I've worked with ...`,
          1000,
          `I've worked with React`,
          1000,
          `I've worked with Typescript`,
          1000,
          `I've worked with GraphQL`,
          1000,
          `I've worked with SCSS`,
          1000,
          `I've worked with HTML`,
          1000,
          `I've worked with JSX`,
          1000,
          `I've worked with Javascript`,
          1000,
          `I've worked with Yarn`,
          1000,
          `I've worked with Webpack`,
          1000,
          `I've worked with NPM`,
          1000,
          `I've worked with Next.js`,
          1000,
          `I've worked with Scala`,
          1000,
          `I've worked with Apollo`,
          1000,
          `I've worked with Vue.js`,
          1000,
          `I've worked with AngularJS`,
          1000,
          `I've worked with MySQL`,
          1000,
          `I've worked with Swift`,
          1000,
          `I've worked with Xcode`,
          1000,
          `I've worked with NodeJS`,
          1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '16px' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />

        <p>Some of my hobbies include playing piano, drawing, and photography.</p>
        <p className="location">Currently based in Toronto, ON <LocationDotSolid fill="#6F4E37" height="20px" width="20px" /> </p>
          
      </div>

    </div>

    <Footer />

    </div>
  );
}

export default App;
