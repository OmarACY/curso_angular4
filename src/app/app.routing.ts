import { ModuleWithProviders,Component } from '@angular/core';
import { Routes,RouterModule,Router } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

const appRoutes : Routes = [
    {path: '', component: EmpleadoComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component : FrutaComponent},
    {path: '**', component: EmpleadoComponent} //Cuando la ruta Falla
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);