import { Component } from '@angular/core';

@Component ({
    selector: 'empleado',
    templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent {
    tituloComponente = 'Empleado';
    nombre:string = 'Omar Alejandro Cervantes Yepez';
    edad:number = 24;
    mayorDeEdad:boolean = true;
    trabajos:Array<any> = [5, ' Programador analista', ' Levantamiento de tarros XD'];

    constructor(){
        console.log(this.trabajos);
    }
}