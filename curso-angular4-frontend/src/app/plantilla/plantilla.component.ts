import { Component } from '@angular/core';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'plantilla',
    templateUrl: './plantilla.component.html',
})

export class PlantillaComponent {
    public titulo: string;
    public administrador;

    constructor() {
        this.titulo = 'Plantilla ngTemplate en Angular';
        this.administrador = true;

    }

    Cambiar() {
        this.administrador = !this.administrador;
    }
}
