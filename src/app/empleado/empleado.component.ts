import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component ({
    selector: 'empleado',
    templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente Empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;

    constructor(){
        this.empleado = new Empleado('Omar Alejandro Cervantes', new Date('1993/08/12'),'Programador analista', true);  
        this.trabajadores = [
            new Empleado('Omar Alejandro Cervantes', new Date('1993/08/12'),'Programador analista', true),
            new Empleado('Jorge Armando Tovar', new Date('1992/02/18'),'Programador', false),
            new Empleado('Fernando Donat', new Date('1992/09/24'),'Programador analista', true)
        ];

        this.trabajador_externo = false;
        this.color = 'red';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarEmpleado(valor){
        this.trabajador_externo = valor;
    }
}