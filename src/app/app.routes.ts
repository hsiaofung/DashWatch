/*
   AppComponent
    │
    ▼
<router-outlet>
    |
    ├── LoginComponent
    │
    ▼
AppShellComponent
    │
    ├── Sidebar
    ├── Header
    └── <router-outlet>
             │
             ▼
      DashboardComponent
*/

import { Routes } from '@angular/router';
import { AppShellComponent } from './shell/app-shell/app-shell.component';

export const routes: Routes = [
  // Default redirect to login page
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // Login page (outside the main shell)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },

  // Main application shell (contains Sidebar, Header, etc.)
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        title: 'Dashboard',
      },

      // Default redirect inside the shell
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  // 404 fallback route
  {
    path: '**',
    redirectTo: 'login',
  },
];