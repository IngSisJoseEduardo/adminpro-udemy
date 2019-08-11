// modulos para rutas
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

// Config routes
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
];

// export routes
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
