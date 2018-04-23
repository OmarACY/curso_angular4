import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    public nombre_prenda = 'Pantalones vaqueros';
    public colleccion_ropa = ['Pantalones blancos', 'Camiseta roja'];

    prueba(nombre_prenda){
        return nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string>{
        this.colleccion_ropa.push(nombre_prenda);

        return this.getRopa();
    }

    deleteRopa(index:number){
        this.colleccion_ropa.splice(index,1);

        return this.getRopa();
    }

    getRopa():Array<string>{
        return this.colleccion_ropa;
    }
}