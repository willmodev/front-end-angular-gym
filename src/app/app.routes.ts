import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [

      {
        path: 'usuarios',
        title: 'Usuarios',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'usuarios/create',
        loadComponent: () => import('./dashboard/pages/user-create/user-create.component'),
      },

      {
        path: 'entrenadores',
        title: 'Entrenadores',
        loadComponent: () => import('./dashboard/pages/entrenadores/entrenadores.component'),
      },

      {
        path: 'planes',
        title: 'Planes',
        loadComponent: () => import('./dashboard/pages/planes/planes.component'),
      },
      {
        path: 'clientes',
        title: 'Clientes',
        loadComponent: () => import('./dashboard/pages/clientes/clientes.component')
      },




      {
        path:'', redirectTo: 'dashboard', pathMatch: 'full',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }



];
