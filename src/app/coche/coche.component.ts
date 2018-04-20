import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    selector:'choche',
    templateUrl:'./coche.component.html',
    providers: [PeticionesService]
})

export class CocheComponent{
    public titulo:string;
    public coche: Coche;
    public coches:Array<Coche>;

    constructor(
        private _peticionesService : PeticionesService
    ){
        this.titulo = 'Componente de coche';
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda", "120", "Blanco"),
            new Coche("Renault Clio", "110", "Azul")
        ]
    }

    ngOnInit(){
        console.log(this._peticionesService.getPrueba());
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }
}