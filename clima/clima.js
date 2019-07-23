const axios = require('axios');


const getClima =  async (lat, lon) =>{
    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=304ff45c51c2dc3936bb98dcf86521b1&units=metric'
      });
    
      const resp = await instance.get();
      
      return resp.data.main.temp;
}

module.exports = {
    getClima
}

