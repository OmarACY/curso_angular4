import { ModuleWithProviders,Component } from '@angular/core';
import { Routes,RouterModule,Router } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component : FrutaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component : ContactoComponent},
    {path: '**', component: HomeComponent} //Cuando la ruta Falla
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);