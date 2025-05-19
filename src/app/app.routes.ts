import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(
            m => m.HomeComponent,
        ),
    },
    {
        path: 'options',
        loadComponent: () => import('./pages/options/options.component').then(
            m => m.OptionsComponent,
        ),
    },
    {
        path: 'lateboard',
        loadComponent: () => import('./pages/lateboard/lateboard.component').then(
            m => m.LateboardComponent,
        ),
    },
    {
        path: 'level1',
        loadComponent: () => import('./pages/levels/levelA/LevelA.component').then(
            m => m.LevelAComponent,
        ),
    },
    {
        path: 'level2',
        loadComponent: () => import('./pages/levels/levelB/LevelB.component').then(
            m => m.LevelBComponent,
        ),
    },
    {
        path: 'level3',
        loadComponent: () => import('./pages/levels/levelC/LevelC.component').then(
            m => m.LevelCComponent,
        ),
    },
    {
        path: 'lost',
        loadComponent: () => import('./pages/lost/lost.component').then(
            m => m.LostComponent,
        ),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/notFound/notFound.component').then(
            m => m.notFoundComponent,
        ),
    },
];
