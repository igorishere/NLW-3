import  React ,{ useEffect,useState } from 'react'; 
import  {Link}  from 'react-router-dom';
import {Map,TileLayer, Marker,Popup } from 'react-leaflet' 

//Importação do ícone de seta
import {FiPlus, FiArrowRight} from 'react-icons/fi'; 
// Import das imagens
import mapMarkerImg from "../images/map-marker.svg";

// Importação do CSS da página
import  "../styles/pages/orphanage-map.css";

import api from '../services/api';

import mapIcon from "../utils/mapIcon";


interface Orphanage {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
}

export default function OrphanagesMap() {
    // State do componente
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

        useEffect(()=>{
            api.get('/orphanages').then(
                
                response => { 
                    setOrphanages(response.data);
                }
            )
        },[])

    return( 
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>


                    <p>Muitas crianças estão esperando sua visita :) </p>
                </header>


                <footer>
                    <strong>Torres</strong>

                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map
            center={[ -29.3225049,-49.7794938 ]}
            zoom={13}
            style={
                {
                    width:'100%',
                    height:'100%'
                }
            } >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {  orphanages.map( orph => {
                    return(
                        <Marker
                            key={orph.id}
                            position={[ orph.latitude,orph.longitude ]}
                            icon={mapIcon}
                        >
                            <Popup
                                closeButton={false} 
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            >
                            {orph.name}
                                <Link to={`/orphanages/${orph.id}`}>
                                    <FiArrowRight size={20} color="#fff"/>
                                </Link>
                            </Popup>
                        </Marker>
                )})
                }
                
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}