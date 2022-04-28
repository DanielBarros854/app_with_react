/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import './index.css'

//https://sujeitoprogramador.com/rn-api/?api=posts

const RequisicaoHTTP = () => {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    const loadApi = async () => {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      const data = await fetch(url);
      const data_formated = await data.json();

      setNutri(data_formated);
    };

    loadApi();

  }, [nutri]);

  return (
    <div className="container">
      <header className="header-request">
        <strong>
          React Nutri
        </strong>
      </header>

      {nutri.map((element) => (
        <article key={element.id} className="post">
          <strong className="title">
            {element.titulo}
          </strong>
          <img src={element.capa} alt={element.titulo} className="cover"/>
          <p className="caption">
            {element.subtitulo}
          </p>
          <a href="#" className="button">
            Acessar
          </a>
        </article>
      ))}
    </div>
  )
}

export default RequisicaoHTTP
