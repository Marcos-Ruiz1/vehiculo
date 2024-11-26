"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callback_api_1 = __importDefault(require("amqplib/callback_api"));
const vehiculoservice_1 = require("./services/vehiculoservice");
const Vehiculo_1 = require("./model/Vehiculo");
//Inicialización del vehiculo
Vehiculo_1.Vehiculo.getInstance().setId(process.env.ID_VEHICULO);
Vehiculo_1.Vehiculo.getInstance().setPosicionx(Number(process.env.POSICIONX));
Vehiculo_1.Vehiculo.getInstance().setPosiciony(Number(process.env.POSICIONY));
callback_api_1.default.connect('amqp://localhost:5672', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    //Enviar mensajes
    connection.createChannel(function (error1, channel) {
        (0, vehiculoservice_1.emitirPosicion)(error1, channel);
    });
    //Recibir mensajes
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        const queue = 'vehiculos.informacion';
        channel.assertQueue(queue, {
            durable: false,
            autoDelete: true
        });
        channel.consume(queue, function (msg) {
            console.log(msg.content.toString());
        }, {
            noAck: true
        });
    });
});
