import { Link } from 'react-router-dom';

import '../../../App.css'

const About = () => {

  return (
    <div className="align-center">
      <h1>Welcome to About</h1>
      <div>
        <Link className="button-link" to="/">Home</Link>
        <Link className="button-link" to="/Contact">Contact</Link>
        <Link className="button-link" to="/Resources">Resources</Link>
      </div>
    </div>
  )
};

export default About;
