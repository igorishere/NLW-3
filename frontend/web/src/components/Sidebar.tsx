import React from "react";
import { Link, useHistory } from "react-router-dom";

import '../styles/components/sidebar.css';
import { FiArrowLeft } from "react-icons/fi";
import mapMarkerImg from '../images/map-marker.svg';

export default function Sidebar( ) {

    const { goBack } = useHistory();

    return(
        <aside className="app-sidebar">
          <Link to={'/app'}>
            <img src={mapMarkerImg} alt="Happy" />
          </Link>
        

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
        )
}