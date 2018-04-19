import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
    selector:'choche',
    templateUrl:'./coche.component.html'
})

export class CocheComponent{
    public titulo:string;
    public coche: Coche;
    public coches:Array<Coche>;

    constructor(){
        this.titulo = 'Componente de coche';
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda", "120", "Blanco"),
            new Coche("Renault Clio", "110", "Azul")
        ]
    }

    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }
}