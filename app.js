const argv = require ('./config/yargs').argv;
const ubicacion = require('./ubicacion/ubicacion');
const clima = require('./clima/clima')


// ubicacion.getLugarLatLon(argv.direccion)
// .then(console.log);

// clima.getClima(-38.000000,-57.580002)
// .then(console.log)
// .catch(console.log) 

const getInfo =  async (direccion) =>{

    try{
        let respuesta = await ubicacion.getLugarLatLon(direccion);
        if(respuesta && respuesta.lat && respuesta.lon){
            let temp = await clima.getClima( respuesta.lat, respuesta.lon);
            if(temp){
                return 'El clima de '+respuesta.direccion+' es de '+temp;
            }
            else{
                return 'No se pudo determinar el clima de' + respuesta.direccion;
            }
        }else{
            throw new Error('No se pudo obtener ningun dato');
        }
    }catch(err){
        return 'Error: ',err;
    }
}

getInfo(argv.direccion)
.then(console.log)
.catch(error =>{
    console.log('Se ha producido un error: ', error);
});
