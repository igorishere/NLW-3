import axios from "axios";

interface geolocationInformation{
    country_code: string,
    country_name: string,
    city: string,
    postal: string,
    latitude: number,
    longitude: number,
    IPv4: string,
    state: string   
}

async function getGeolocationInformation() {

    let geolocationInformation: geolocationInformation;
    
    try {
        const response = await axios.get('https://geolocation-db.com/json/');
        geolocationInformation = response.data;
        
    } catch (error) {
        geolocationInformation = {
            "country_code": 'none',
            "country_name": 'none',
            "city": 'none',
            "postal": 'none',
            "latitude": 0,
            "longitude": 0,
            "IPv4": 'none',
            "state": 'none'
          }
    }

    return geolocationInformation;
    
}

export default getGeolocationInformation;
 
