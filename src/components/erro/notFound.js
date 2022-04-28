import { Link } from "react-router-dom";
import '../../style/buttonLink.css'

const NotFound = () => {

  return (
    <div className="align-center">
      <h1>Hum, parece que essa paina não existe!</h1>
      <h2>Você pode estar procurando:</h2>
      <div>
        <Link className="button-link" to="/">Home</Link>
        <Link className="button-link" to="/About">Sobre</Link>
        <Link className="button-link" to="/Contact">Contact</Link>
        <Link className="button-link" to="/Resources">Recursos</Link>
      </div>
    </div>
  )
};

export default NotFound;
