import { Link } from 'react-router-dom';
import '../../../style/buttonLink.css'
import '../../../App.css'

const Contact = () => {

  return (
    <div className="align-center">
      <h1>Welcome to Contact</h1>
      <div>
        <Link className="button-link" to="/">Home</Link>
        <Link className="button-link" to="/About">Sobre</Link>
        <Link className="button-link" to="/Resources">Resources</Link>
      </div>
    </div>
  )
};

export default Contact;
