import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const PagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children : [
      // { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: GraficasComponent },
      { path: 'account-settings', component: AccountSettingsComponent }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);
