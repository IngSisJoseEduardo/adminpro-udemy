import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../share/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})

export class PageModule {}
