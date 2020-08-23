    
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonagemComponent } from './componentes/personagem/personagem.component';
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { PlanetaComponent } from './componentes/planeta/planeta.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { HomeComponent } from './componentes/home/home.component';



const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personagens', component: PersonagensComponent },
    { path: 'personagem/:id', component: PersonagemComponent },
    { path: 'planeta/:id', component: PlanetaComponent },
    { path: 'planetas', component: PlanetasComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);