import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'choche',
    templateUrl: './coche.component.html',
    providers: [PeticionesService]
})

export class CocheComponent {
    public titulo: string;
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesService
    ) {
        this.titulo = 'Componente de coche';
        this.coche = new Coche('', '', '');
        this.coches = [
            new Coche('Seat Panda', '120', 'Blanco'),
            new Coche('Renault Clio', '110', 'Azul')
        ];
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if (!this.articulos) {
                    console.log('Error en el servidor!');
                }
            },
            error => {
                const errorMessage = <any> error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche('', '', '');
    }
}
