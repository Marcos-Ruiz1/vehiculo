export class Vehiculo{

    private id : string = "";
    private posicionx: number = 0;
    private posiciony: number = 0;
    private static  vehiculoInstance: Vehiculo;

    private constructor (){
        
    }

    public static getInstance(): Vehiculo{
        if(this.vehiculoInstance == null){
            this.vehiculoInstance = new Vehiculo();
        }
        return this.vehiculoInstance;
    }
    
    getId(): string{
        return this.id;
    }
    getPosicionx(): number{
        return this.posicionx;
    }
    getPosiciony(): number{
        return this.posiciony;
    }

    setId(id: string){
        this.id = id;
    }
    setPosicionx(posicionx: number){
        this.posicionx = posicionx;
    }
    setPosiciony(posiciony: number){
        this.posiciony = posiciony;
    }
    

}