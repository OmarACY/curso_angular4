import { Component } from '@angular/core';

@Component ({
    selector: 'empleado',
    templateUrl: 'empleado.component.html'
})

export class EmpleadoComponent {
    tituloComponente = 'Empleado';
    nombre:string;
    edad:number;
    mayorDeEdad:boolean = true;
    trabajos:Array<any>;
    comodin:any;

    constructor(){
        console.log(this.trabajos);
        this.nombre = 'Omar Alejandro Cervantes Yepez';
        this.edad = 24;
        this.mayorDeEdad = true;
        this.trabajos = [5, ' Programador analista', ' Levantamiento de tarros XD'];
        this.comodin = 'SI';
    }

    ngOnInit(){
        this.cambiarNombre('Juan Perez');
        this.cambiarEdad(22);
        //alert('Bienvenido!!' + this.nombre + ' Con edad ' + this.edad);
    
        // Variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;
            var dos = 88;

            console.log("Dentro de if: " + uno + " " + dos);
        }

        console.log("Fuera de de if: " + uno + " " + dos);
    }

    cambiarNombre(nombre){
        this.nombre = nombre;
    }

    cambiarEdad(edad){
        this.edad = edad;
    }
}