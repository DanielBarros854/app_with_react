import { Link } from "react-router-dom";
import '../../../style/buttonLink.css'

const Home = () => {

  return (
    <div>
      <h1>Welcome to Home</h1>
      <div>
        <Link className="button-link" to="/About">Sobre</Link>
        <Link className="button-link" to="/Contact">Contact</Link>
        <Link className="button-link" to="/Resources">Recursos</Link>
      </div>
    </div>
  )
};

export default Home;
