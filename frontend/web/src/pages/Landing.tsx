import  React, { useEffect, useState }  from 'react';
import  {Link}  from 'react-router-dom';

//Importação do ícone de seta
import {FiArrowRight} from 'react-icons/fi'; 

// Importação do CSS da página
import  "../styles/pages/landing.css";

// Import das imagens
import logoImg  from '../images/logo.svg'
import getGeolocationInformation from '../services/geolocation';

export default function Landing() {

  const [cidade,setCidade] = useState<String>('Carregando...');
  const [estado,setEstado] = useState<String>('Carregando...');

  useEffect(    () =>{

      getGeolocationInformation().then(  rsp => {
        setCidade(rsp.city);
        setEstado(rsp.state);
      });
  },[] );

    return(
    <div id="page-landing">
        <div className="content-wrapper">

          <img src={logoImg} alt='happy'/>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>
            Visite orfanatos e mude o dia de muitas crianças.
            </p>

            <div className="location">
              <strong>{cidade}</strong>
              <span>{estado}</span>
            </div>

            <Link to="app"  className="enter-app">
            <FiArrowRight 
            size={26}
            color="rgba(0,0,0,0.6)"/>
              </ Link>
          </main>
        </div>
    </div>

    )
}