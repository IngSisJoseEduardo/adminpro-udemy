import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children : [
      // { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
      { path: 'grafica1', component: GraficasComponent, data: {titulo: 'Graficas'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes del Tema'} },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);
