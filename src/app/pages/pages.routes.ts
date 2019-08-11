import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';

const PagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children : [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: GraficasComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);
