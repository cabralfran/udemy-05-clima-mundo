const axios = require('axios');

const getLugarLatLon =  async (dire) =>{
    const  encodeURL = encodeURI(dire); // transforma el string con espacios para enviar por url

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location='+encodeURL,
        headers: {'X-RapidAPI-Key': '9a6742192dmsh8f089a89c407078p1fb350jsnc1ac35265754'}
      });
    
    
      const resp = await instance.get();
     
      if(resp.data.Results.length ===0){
          throw new Error ('No existen datos para: '+dire);
      }
      const data = resp.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const lon = data.lon;
      return {
        direccion,
        lat,
        lon
      }
}

module.exports = {
    getLugarLatLon
}

