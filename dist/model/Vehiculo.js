"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor() {
        this.id = "";
        this.posicionx = 0;
        this.posiciony = 0;
    }
    static getInstance() {
        if (this.vehiculoInstance == null) {
            this.vehiculoInstance = new Vehiculo();
        }
        return this.vehiculoInstance;
    }
    getId() {
        return this.id;
    }
    getPosicionx() {
        return this.posicionx;
    }
    getPosiciony() {
        return this.posiciony;
    }
    setId(id) {
        this.id = id;
    }
    setPosicionx(posicionx) {
        this.posicionx = posicionx;
    }
    setPosiciony(posiciony) {
        this.posiciony = posiciony;
    }
}
exports.Vehiculo = Vehiculo;
