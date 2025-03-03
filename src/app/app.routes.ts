import { Routes } from '@angular/router';
export const routes: Routes = [
    {path:'auth',loadChildren:()=>import('./modules/auth/auth.routes').then(m=>m.routes)},
    
    // {path:'auth',loadChildren:()=>import('./module/auth/auth.module').then(m=>m.AuthModule)},
    {path:'',redirectTo:'auth',pathMatch:'full'}
];
