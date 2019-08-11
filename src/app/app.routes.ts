// modulos para rutas
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

// Config routes
const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children : [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: GraficasComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

// export routes
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
