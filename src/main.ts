import amqp, { Channel, Connection } from 'amqplib/callback_api';
import { emitirPosicion } from './services/vehiculoservice';
import { Vehiculo } from './model/Vehiculo';
    
    //Inicialización del vehiculo
    Vehiculo.getInstance().setId(process.env.ID_VEHICULO);
    Vehiculo.getInstance().setPosicionx(Number(process.env.POSICIONX));
    Vehiculo.getInstance().setPosiciony(Number(process.env.POSICIONY));    
    
    amqp.connect('amqp://localhost:5672', function(error0, connection) {
        
        if (error0) {
          throw error0;
        }

        //Enviar mensajes
        connection.createChannel(function(error1, channel) {
            emitirPosicion(error1, channel);
        });


    });


