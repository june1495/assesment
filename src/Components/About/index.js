import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './index.css';

const About = () => (
  <section className="ban">
    <div className="content">
      <div className="imgBx">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFCTHeuyZZE7Q/profile-displayphoto-shrink_800_800/0/1621014805817?e=1647475200&v=beta&t=FXs9qf1ubBWp2EM0h8KfCbh2rQSfbclgHsYgA-nhVcI"
          alt="profile"
        />
      </div>
      <h3>Franco Melgar</h3>
      <p>Software Developer</p>
      <p>I&apos;ve learned React, Flexbox , Node(building an API)</p>
      <ul className="socialMedia">
        <li>
          <a
            href="https://github.com/june1495"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />{' '}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/franco-melgar-54154b19b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />{' '}
          </a>
        </li>
      </ul>
      <div className="mail">
        <FontAwesomeIcon icon={faEnvelope} /> francomelgar4@gmail.com
      </div>
    </div>
  </section>
);

export default About;
