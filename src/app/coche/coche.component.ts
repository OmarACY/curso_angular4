import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
    selector:'choche',
    templateUrl:'./coche.component.html'
})

export class CocheComponent{
    public titulo:string;
    public coche: Coche;

    constructor(){
        this.titulo = 'Componente de coche';
        this.coche = new Coche("", "", "");
    }

    onSubmit(){
        console.log(this.coche);
    }
}