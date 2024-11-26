import {Vehiculo} from './../model/Vehiculo';

export function emitirPosicion(error, channel){

    if (error) {
        throw error;
    }

    channel.assertQueue('vehiculos.informacion', {
        durable: false,
        autoDelete: true,
        
    });

    setInterval(() => {
        
        actualizarPosicionVehiculo();

        const data = {
            data: Vehiculo.getInstance()
        };

        
        channel.sendToQueue('vehiculos.informacion', Buffer.from(JSON.stringify(data)));
        
    }, 5000); 
    console.log("Mensaje enviado");

}


function actualizarPosicionVehiculo(){
    console.log("posición actualizada...");
}