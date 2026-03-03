import './App.scss';
import { TypeAnimation } from 'react-type-animation';

import { Header, Footer, Hero } from './components'
import { LocationDotSolid } from './Icons';

const App = () => {

  return (
    <div className="App">
      <Hero />

    <Header />

    <div className="full-page-container move-up">
      <div className="left-side-2">
        <div className="left-side-2-overlay"></div>
      </div>

      <div className="right-side-2">
        <h3>About Me</h3>

        <p className="about-me-text">I've been doing Front-End Web development for 8 years now.</p>

        <TypeAnimation
          sequence={[
          `What I work with:`,
          1200,
          `Languages & Frameworks: React, TypeScript, JavaScript`,
          1500,
          `Languages & Frameworks: HTML/JSX, CSS/SCSS, GraphQL`,
          1500,
          `Languages & Frameworks: Next.js, Vue.js, AngularJS, Node.js, PHP`,
          1600,
          `Tools: Webpack, NPM/Yarn, Apollo, Storybook, Jest`,
          1500,
          `Tools: Jenkins, Spinnaker, GitHub, Bitbucket, Jira, Figma`,
          1600,
          `Tools: Cursor AI IDE`,
          1300,
          `Additional: Micro Frontends (MFE), Server-Driven UI (SDUI)`,
          1600,
          `Additional: A/B Testing, CI/CD, AODA compliance, MySQL`,
          1600,
          `Additional: Backend for Frontend (BFF)`,
          1500,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: '16px' }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          className="type-animation"
        />

        <p className="about-me-text">Some of my hobbies include playing piano, drawing, and photography.</p>

        <div className="projects-section">
          <h4>Notable Personal Projects</h4>
          <ul className="projects-list">
            <li>
              <a
                className="project-link"
                href="https://ramputh-media.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Ramputh Media
              </a>
              <span>Real Estate Photography & Videography Services</span>
            </li>
            <li>
              <a
                className="project-link"
                href="https://wedding2024.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Aisya & James - Wedding 2024
              </a>
              <span>Wedding microsite and digital event experience</span>
            </li>
            <li>
              <a
                className="project-link"
                href="https://doculyze.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Doculyze
              </a>
              <span>AI-powered contract risk analysis platform</span>
            </li>
          </ul>
        </div>

        <p className="location">Currently based in Toronto, ON <LocationDotSolid fill="#202020" height="20px" width="20px" /> </p>

          
      </div>

    </div>

    <Footer />

    </div>
  );
}

export default App;
